import React, {FunctionComponent, useEffect, useState} from "react";
import '@google/model-viewer';

interface ModelViewerProps {
  url: string;
}

const isBrowser = typeof window !== 'undefined';

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
    return (
      <model-viewer src={url}
        camera-controls
        camera-orbit={(30 - scrollProgress) +'deg 75deg 2.5m'}
        preload 
        id="mview"
        reveal-when-loaded
        interaction-policy="allow-when-focused"
        interaction-prompt="basic"
        style={{height: '343px', width: '555px'}}
        alt="A low-poly 3D model of a pizza box"
        quick-look-browsers="safari chrome"
        background-color="#b52e31">
      </model-viewer>
    );
  } else {
    return (
      <img src="https://jetlaglabs.github.io/assets/img/vr.svg" alt="vr" width="555px" height="343px" />
    )
  }
};

export default ModelViewer;