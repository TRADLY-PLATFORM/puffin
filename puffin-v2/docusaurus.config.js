module.exports = {
  title: 'TradlyPlatform',
  tagline: 'Empowering you with platform infrastructure',
  url: 'https://portal.tradly.app',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'TRADLY-PLATFORM', // Usually your GitHub org/user name.
  projectName: 'puffin', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    "googleAnalytics": {
      "trackingID": "UA-143764314-1",
      "anonymizeIP": true
    },
    gtag: {
      trackingID: 'UA-143764314-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: '46e3a046b3ec681ea19c49ac9eb069a9',
      indexName: 'tradly_platform',
      appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: 'TradlyPlatform',
      logo: {
        alt: 'Tradly Platform Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        
        {
          href: 'https://drive.google.com/drive/u/0/folders/16D2oxYs7-7VPkiXPZZ3vsYfqXJNj0RGI',
          label: 'Postman Collection',
          position: 'right',
        },
        {
          href: 'https://portal.tradly.app/api-reference.html',
          label: 'API Reference',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Superadmin',
              to: 'docs/superadmin',
            },
            {
              label: 'User Apps',
              to: 'docs/appfeatures',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Technical Enquiry',
              href: 'https://community.tradly.app',
            },
            {
              label: 'Submit Bug',
              href: 'https://tradly.atlassian.net/servicedesk/customer/portals',
            },
            {
              label: 'Feature Request',
              href: 'https://community.tradly.app',
            },
            {
              label: 'Product Roadmap',
              href: 'https://github.com/TRADLY-PLATFORM/puffin/projects/1',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Postman Collection',
              href: 'https://drive.google.com/drive/u/0/folders/16D2oxYs7-7VPkiXPZZ3vsYfqXJNj0RGI',
            },
            {
              label: 'API Reference',
              href: 'https://portal.tradly.app/api-reference.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TradlyPlatform. A product of iStrata Digital Sdn. Bhd.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/',
      
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
