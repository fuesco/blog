import {DefaultTheme} from "./default-theme";

const getRandomUnsplashImgUrl = () => {
  const unsplashURL = 'https://source.unsplash.com/'
  const category = 'daily/?white'
  return `${unsplashURL + category}`
}

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#222222`,
    linkColor: `#222222`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `892px`,
    xl: `1000px`,
  },
  fonts: {
    base: `IBM Plex Sans Condensed, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1400px`,
    },
    header: {
      height: `50rem`,
      background: `url('${getRandomUnsplashImgUrl()}')`,
    },
  },
};

export default Theme;
