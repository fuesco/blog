/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `navl.me`,
    siteUrl: `https://navlme.netlify.com`,
    description: `An open source guide to %TOPICS%`,
    topics: [
      'Python',
      'Machine Learning',
      'Design',
      'React',
      'Flutter',
      'JAMStack',
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
    ],
    footerMenu: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Credits',
        path: '/credits'
      },
      {
        name: 'RSS',
        path: '/rss.xml'
      }
    ],
    search: true,
    author: {
      name: `Naval Monga`,
      description: `I'm <a href="https://linkedin.com/in/navalm" rel="noopener" target="_blank">naval</a>, if you like what you see feel free to give a 
        <a href="https://github.com/navalmonga" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: `https://www.linkedin.com/in/navalm/`,
        instagram: `https://instagram.com/nav.code`,
        youtube: ``,
        github: `https://github.com/navalmonga`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `navlme - A Gatsby theme`,
          short_name: `navlme`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#0f4c81`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ]
};

