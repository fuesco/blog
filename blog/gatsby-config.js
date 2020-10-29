/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://blog.fues.us/`,
    description: `an open-source guide to %TOPICS%`,
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
      description: `
        <b><em>FUES&trade;&nbsp;BLOG</em></b>
        <br/>
        <b>&copy;&nbsp;2020.</b>
        <br/>
        <br/>
        Like what you see?
        <br/>
        <a href="https://github.com/fuesco/blog" rel="noopener" target="_blank">View the source!</a>`,
      social: {
        facebook: ``,
        twitter: `https://github.com/fuesco/`,
        linkedin: ``,
        instagram: `https://instagram.com/fues.co/`,
        youtube: `https://github.com/fuesco/`,
        github: `https://github.com/fuesco/`,
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

