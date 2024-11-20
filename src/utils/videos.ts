// videos.ts

import type { OpenGraph } from '@astrolib/seo';

const load = async function () {
  let videos: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    videos = import.meta.glob('~/assets/videos/**/*.{mp4,webm,mov,avi}');
  } catch (e) {
    // continue regardless of error
  }
  return videos;
};

let _videos: Record<string, () => Promise<unknown>> | undefined = undefined;

/** */
export const fetchLocalVideos = async () => {
  _videos = _videos || (await load());
  return _videos;
};

/** */
export const findVideo = async (
  videoPath?: string | null
): Promise<string | undefined | null> => {
  // Not string
  if (typeof videoPath !== 'string') {
    return videoPath;
  }

  // Absolute paths
  if (videoPath.startsWith('http://') || videoPath.startsWith('https://') || videoPath.startsWith('/')) {
    return videoPath;
  }

  // Relative paths or not "~/assets/"
  if (!videoPath.startsWith('~/assets/videos')) {
    return videoPath;
  }

  const videos = await fetchLocalVideos();
  const key = videoPath.replace('~/', '/src/');

  return videos && typeof videos[key] === 'function'
    ? ((await videos[key]()) as { default: string })['default']
    : null;
};

/** */
export const adaptOpenGraphVideos = async (
  openGraph: OpenGraph = {},
  astroSite: URL | undefined = new URL('')
): Promise<OpenGraph> => {
  if (!openGraph?.videos?.length) {
    return openGraph;
  }

  const videos = openGraph.videos;

  const adaptedVideos = await Promise.all(
    videos.map(async (video) => {
      if (video?.url) {
        const resolvedVideo = await findVideo(video.url);
        if (!resolvedVideo) {
          return {
            url: '',
          };
        }

        return {
          url: new URL(resolvedVideo, astroSite).toString(),
          width: video?.width,
          height: video?.height,
        };
      }

      return {
        url: '',
      };
    })
  );

  return { ...openGraph, ...(adaptedVideos ? { videos: adaptedVideos } : {}) };
};