// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.SITE_NAME || "Massage Brighton",
  siteDescription: process.env.SITE_DESCRIPTION || "Deep tissue massage, Clinical massage, Thai massage, MFR, Abdominal massage, Reflexology, Pregnancy massage, Oncology massage.",
  siteUrl: process.env.SITE_URL || "http://127.0.0.1:8000",
  pathPrefix: process.env.PATH_PREFIX,
  metadata: {
    author: process.env.AUTHOR || "Jane Newman",
    facebook: "https://www.facebook.com/brightonmassage/?locale=en_GB"
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: './content/experiences/',
        path: "*.md",
        typeName: "Experiences", // for the sake of naming GraphQL - template missing
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: './content/projects/',
        path: "*.md",
        typeName: "Projects", // for the sake of naming GraphQL - template missing
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: './content/treatments/',
        path: "*.md",
        typeName: "Treatments", // for the sake of naming GraphQL - template missing
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: './content/blogs/',
        path: "*.md",
        typeName: "Blogs", // for the sake of naming GraphQL - template missing
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: "gridsome-plugin-windicss",
      options: {
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    }
  ]
}
