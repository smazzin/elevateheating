import type { HTMLAttributes } from 'astro/types';
import { parseUrl } from 'unpic';

type Layout = 'fixed' | 'constrained' | 'fullWidth';

export interface AttributesProps extends HTMLAttributes<'video'> {}

export interface VideoProps extends Omit<HTMLAttributes<'video'>, 'src'> {
  src?: string | null;
  width?: string | number | null;
  height?: string | number | null;
  autoplay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  style?: string;
  layout?: Layout;
  aspectRatio?: string | number | null;
}

export type VideosOptimizer = (
  video: string,
  breakpoints: number[],
  width?: number,
  height?: number
) => Promise<Array<{ src: string; width: number }>>;


const computeHeight = (width: number, aspectRatio: number) => {
  return Math.floor(width / aspectRatio);
};

const parseAspectRatio = (aspectRatio: number | string | null | undefined): number | undefined => {
  if (typeof aspectRatio === 'number') return aspectRatio;

  if (typeof aspectRatio === 'string') {
    const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);

    if (match) {
      const [, num, den] = match.map(Number);
      if (den && !isNaN(num)) return num / den;
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue)) return numericValue;
    }
  }

  return undefined;
};

const pixelate = (value?: number) => (value || value === 0 ? `${value}px` : undefined);

const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = 'cover',
  objectPosition = 'center',
}: {
  width?: number;
  height?: number;
  aspectRatio?: number;
  objectFit?: string;
  objectPosition?: string;
  layout?: string;
}) => {
  const styleEntries: Array<[prop: string, value: string | undefined]> = [
    ['object-fit', objectFit],
    ['object-position', objectPosition],
  ];

  if (layout === 'fixed') {
    styleEntries.push(['width', pixelate(width)]);
    styleEntries.push(['height', pixelate(height)]);
  } else if (layout === 'fullWidth') {
    styleEntries.push(['width', '100%']);
    styleEntries.push(['height', 'auto']);
    styleEntries.push(['aspect-ratio', aspectRatio ? `${aspectRatio}` : undefined]);
  }

  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));

  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
};

export const astroAssetsOptimizer: VideosOptimizer = async (video, breakpoints, _width, _height) => {
  if (!video) return [];

  return Promise.all(
    breakpoints.map(async (w: number) => {
      const url = video; // Direct link for each breakpoint as video optimization tools may vary
      return { src: url, width: w };
    })
  );
};

export const isUnpicCompatible = (video: string) => {
  return typeof parseUrl(video) !== 'undefined';
};

export async function getVideosOptimized(
  video: string,
  { width, height, aspectRatio, layout = 'constrained', style = '', ...rest }: VideoProps,
  _transform: VideosOptimizer = () => Promise.resolve([])
): Promise<{ src: string; attributes: AttributesProps }> {
  width = (width && Number(width)) || undefined;
  height = (height && Number(height)) || undefined;

  const aspectRatioValue = parseAspectRatio(aspectRatio);

  if (aspectRatioValue) {
    if (width && !height) {
      height = computeHeight(width, aspectRatioValue);
    } else if (height && !width) {
      width = Number(height * aspectRatioValue);
    }
  }


  return {
    src: video,
    attributes: {
      width: width,
      height: height,
      style: `${getStyle({ width, height, aspectRatio: aspectRatioValue, layout })}${style ?? ''}`,
      ...rest,
    },
  };
}