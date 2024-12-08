if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

module.exports = {
  siteMetadata: {
    title: `George Barbu | FULLSTACK DEVELOPER`,
    author: `George Barbu`,
    description: `With over 10 years of expertise in HTML, CSS, and JavaScript, 
    I possess a strong passion for continuous learning. 
    I consistently seek opportunities to enhance business value by collaborating 
    closely with various departments, including Product, Marketing, and BI.`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George Barbu | FULLSTACK DEVELOPER`,
        short_name: `Resume - George Barbu`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.jpg',
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: same-origin',
            `Content-Security-Policy: frame-ancestors 'self' https://george.barbu.es`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `Content Manager`,
        htmlFavicon: `static/assets/logo.png`,
        includeRobots: false,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `george.barbu.es/`,
        // type: `twitter`,
        // maxResults: 22,
        // tags: true,
        // context: true,
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        // Add the `gatsbyImageData` resolver to `CloudinaryMedia`
        transformTypes: [`CloudinaryMedia`],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://george.barbu.es',
        sitemap: 'https://george.barbu.es/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-FWV6WKTY4Y', // Google Analytics / GA
          'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
          origin: 'https://george.barbu.es',
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
