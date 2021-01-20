import {DefaultTheme} from "./default-theme";

const getRandomUnsplashImgUrl = () => {
  // const unsplashURL = 'https://source.unsplash.com/'
  // const category = 'daily/?white'
  // return `${unsplashURL + category}`
  return 'https://cdn.fues.us/fuesorg/force-fields-matt-lipman.svg'
}

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#f8fafe`,
    primaryColor: `#F12711`,
    linkColor: `#F5AF19`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `892px`,
    xl: `1000px`,
  },
  fonts: {
    base: `IBM Plex Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
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
