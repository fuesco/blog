import {DefaultTheme} from "./default-theme";

const getRandomUnsplashImgUrl = () => {
  const unsplashApi = 'https://source.unsplash.com/random'
  // image size - const size = '/'
  return `${unsplashApi}`
}

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#f3752b`,
    linkColor: `#f3752b`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1000px`,
  },
  fonts: {
    base: `IBM Plex Sans Condensed, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1000px`,
    },
    header: {
      height: `75vh`,
      background: `url('${getRandomUnsplashImgUrl()}')`,
    },
  },
};

export default Theme;
