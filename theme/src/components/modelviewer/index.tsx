import React, {FunctionComponent, useEffect, useState} from "react";
const isBrowser = typeof window !== 'undefined';

interface ModelViewerProps {
  url: string;
}



const ModelViewer: FunctionComponent<ModelViewerProps> = ({url=''}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const scrollListener = () => {
    // const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    setScrollProgress(window.scrollY);
    console.log(scrollProgress)
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    }
  }, []);
  // const orbit = `calc(30deg - env(window-scroll-y) * 100deg) 75deg 2.5m`
  // camera-orbit={(30 - scrollProgress) +'deg 75deg 2.5m'}
  if (isBrowser) {
    import('@google/model-viewer');
    return (
      <model-viewer 
        src={url}
        camera-controls
        camera-orbit={(30 - scrollProgress) +'deg 75deg 110%'}
        preload 
        id="mview"
        reveal-when-loaded
        interaction-policy="allow-when-focused"
        interaction-prompt="basic"
        style={{height: '30vh', width: '65vw'}}
        shadow-intensity={0.5}
        alt="A low-poly 3D model of a pizza box"
        quick-look-browsers="safari chrome"
        background-color="#1A1A1D" 
      />
    );
  } else {
    return (
      <img src="https://jetlaglabs.github.io/assets/img/vr.svg" alt="vr" width="555px" height="343px" />
    )
  }
};

export default ModelViewer;