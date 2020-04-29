/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Warp`,
    siteUrl: `https://warp.jetlaglabs.com`,
    description: `The open source guide to %TOPICS%`,
    topics: [
      'Python',
      'AWS',
      'Programming',
      'Design',
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
        name: 'Topics',
        path: '/tags'
      },
      {
        name: 'About',
        path: '/about'
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
      description: `I'm <a href="https://navm.tech" rel="noopener" target="_blank">Naval</a>, founder of <b>Warp.</b>
        <br/>
        Like what you see?
        <br/>
        <a href="https://github.com/jetlaglabs/warp-blog" rel="noopener" target="_blank">Star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: ``,
        instagram: `https://instagram.com/jetlaglabs`,
        youtube: ``,
        github: `https://github.com/jetlaglabs`,
        twitch: `https://jetlaglabs.com`,
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

