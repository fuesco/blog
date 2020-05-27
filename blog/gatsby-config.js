/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Fues Blog`,
    siteUrl: `https://blog.fues.us/`,
    description: `The open source guide to %TOPICS%`,
    topics: [
      'Programming',
      'Design',
      'Python',
      'AWS',
      'React',
      'Flutter',
      'JAMStack',
      'Go',
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Topics',
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
        name: 'Newsletter',
        path: '/newsletter'
      },
      {
        name: 'RSS',
        path: '/rss.xml'
      }
    ],
    search: true,
    author: {
      name: `Naval Monga`,
      description: `I'm <a href="https://navm.tech" rel="noopener" target="_blank">Naval</a>, founder of <b><em>FUES™</em></b>.
        <br/>
        Like what you see?
        <br/>
        <a href="https://github.com/fuesco/fues-blog" rel="noopener" target="_blank">Star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/`,
        linkedin: `https://linkedin.com/`,
        instagram: `https://instagram.com/fuesco/`,
        youtube: `https://youtube.com/`,
        github: `https://github.com/fuesco/`,
        twitch: ``,
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `warp - A Gatsby theme`,
          short_name: `warp`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#121212`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/warp.dev.png`
        }
      }
    }
  ]
};

