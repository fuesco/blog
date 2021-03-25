/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://blog.fues.us/`,
    description: `the open guide to %TOPICS%`,
    topics: [
      'Machine Learning',
      'Cloud Computing',
      'Python',
      'React',
      'JAMStack'
    ],
    menu: [
      {
        name: 'Start',
        path: '/start-here'
      },
      {
        name: 'About',
        path: '/about'
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
        <h2>FUES<span>VC</span>&trade;&nbsp;BLOG</h2>
        <p>&copy;&nbsp;${new Date().getFullYear()}</p>
        <br/>
        <br/>
        <a href="https://github.com/fuesvc/blog" rel="noopener" target="_blank">Edit the source&nbsp;&rarr;</a>`,
      social: {
        youtube: `https://www.youtube.com/channel/UCXwldfPBw8ipE_9yT-psufQ`,
        facebook: ``,
        twitter: `https://twitter.com/fuesvc`,
        linkedin: ``,
        instagram: `https://instagram.com/fuesvc`,
        github: `https://github.com/fuesvc`,
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

