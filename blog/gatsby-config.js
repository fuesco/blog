/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://blog.fues.us/`,
    description: `the open source guide to %TOPICS%`,
    topics: [
      'Design',
      'Python',
      'AWS',
      'React',
      'JAMStack',
      'Go',
    ],
    menu: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Bookmarks',
        path: '/bookmarks'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
    ],
    footerMenu: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Bookmarks',
        path: '/bookmarks'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
      {
        name: 'RSS',
        path: '/rss.xml'
      }
    ],
    search: true,
    author: {
      name: `Naval Monga`,
      // <b>&copy;&nbsp;2018-${new Date().getFullYear()}.</b>
      description: `
        <b>FUES&nbsp;LABS&nbsp;BLOG</b>
        <br/>
        <br/>
        <br/>
        Want to contribute?
        <br/>
        <a href="https://github.com/fuesco/blog" rel="noopener" target="_blank">Edit the source&nbsp;&rarr;</a>`,
      social: {
        youtube: `https://github.com/fueslabs`,
        facebook: ``,
        twitter: `https://twitter.com/fueslabs`,
        linkedin: ``,
        instagram: `https://instagram.com/fueslabs`,
        github: `https://github.com/fueslabs`,
        twitch: ``,
      }
    }
  },
  plugins: [
    {
      resolve: '@nehalist/gatsby-theme-nehalem',
      options: {
        manifest: {
          name: `Fues Blog - Gatsby Theme`,
          short_name: `blog`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#121212`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/android-chrome-512x512.png`
        }
      }
    }
  ]
};

