import {DefaultTheme} from "./default-theme";

const getRandomUnsplashImgUrl = () => {
  // const unsplashApi = 'https://source.unsplash.com/daily'
  const bannerS3ImageUrl = 'https://jlassets.s3.amazonaws.com/jpg/aziz-acharki-unsplash.jpg'
  // const awhinUnsplash = 'https://images.unsplash.com/photo-1588556591443-bfa59cf8e0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
  // image size - const size = '/'
  return `${bannerS3ImageUrl}`
}

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#f05542`,
    linkColor: `#f05542`,
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
