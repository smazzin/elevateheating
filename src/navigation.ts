import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Heating',
      links: [
        {
          text: 'Heating',
          href: getPermalink('/heating/'),
        },
        {
          text: 'Heating Installation',
          href: getPermalink('/heating-installation/'),
        },
        {
          text: 'Heat Pumps',
          href: getPermalink('/heat-pumps/'),
        },
        {
          text: 'Heating Repair',
          href: getPermalink('/heating-repair/'),
        },
        {
          text: 'Furnace Repair',
          href: getPermalink('/furnace-repair/'),
        },
        {
          text: 'Heat Pump Tune-Up',
          href: getPermalink('/heat-pump-tune-up/'),
        },
      ],
    },
    {
      text: 'Air Conditioning',
      links: [
        {
          text: 'Air Conditioning',
          href: getPermalink('/air-conditioning/'),
        },
        {
          text: 'AC Repair & Maintenance',
          href: getPermalink('/ac-repair-and-maintenance/'),
        },
        {
          text: 'AC Installation',
          href: getPermalink('/ac-installation/'),
        },
        {
          text: 'Ductless/Mini-Split Installations',
          href: getPermalink('/ductless-mini-split-installations/'),
        },
      ],
    },
    {
      text: 'Service Areas',
      links: [
        {
          text: 'Aloha, OR',
          href: getPermalink('/service-areas/aloha-or/'),
        },
        {
          text: 'Banks, OR',
          href: getPermalink('/service-areas/banks-or/'),
        },
        {
          text: 'Beaverton, OR',
          href: getPermalink('/service-areas/beaverton-or/'),
        },
        {
          text: 'Bethany, OR',
          href: getPermalink('/service-areas/bethany-or/'),
        },
        {
          text: 'Cornelius, OR)',
          href: getPermalink('/service-areas/cornelius-or/'),
        },
        {
          text: 'Forest Grove, OR',
          href: getPermalink('/service-areas/forest-grove/'),
        },
        {
          text: 'Hillsboro, OR',
          href: getPermalink('/service-areas/hillsboro/'),
        },
        {
          text: 'North Plains, OR',
          href: getPermalink('/service-areas/north-plains/'),
        },
        {
          text: 'Portland, OR',
          href: getPermalink('/service-areas/portland-or/'),
        },
      ],
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Reviews',
      href: '/reviews/',
    },
    {
      text: 'Contact Us',
      href: '/contact-us/',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Areas We Service',
      links: [
        { text: 'Aloha', href: '/service-areas/aloha-or/' },
        { text: 'Banks', href: '/service-areas/banks-or/' },
        { text: 'Beaverton', href: '/service-areas/beaverton-or/' },
        { text: 'Bethany', href: '/service-areas/bethany-or/' },
        { text: 'Cornelius', href: '/service-areas/cornelius-or/' },
        { text: 'Forest Grove', href: '/service-areas/forest-grove/' },
        { text: 'Hillsboro', href: '/service-areas/hillsboro/' },
        { text: 'North Plains', href: '/service-areas/north-plains/' },
        { text: 'Portland', href: '/service-areas/portland-or/' },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Contact', href: '#' },
    //   ],
    // },
    {
      title: 'Contact',
      links: [
        { text: '14979 NW 265th PL, North Plains, OR, 97133', href: 'https://www.google.com/maps?cid=6706676142287378513' },
        { text: '503-432-1221', href: 'tel:503-432-1221' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/elevateheatingandcooling' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/ElevateHeating/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/elevate-heating-&-cooling-llc/' },
  ],
  secondaryFootNote: `
    Licensed & Insured CCB #247804
  `,
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
