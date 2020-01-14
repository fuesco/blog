import React, {FunctionComponent, useEffect, useState} from "react";
import '@google/model-viewer';

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
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);
  // const orbit = `calc(30deg - env(window-scroll-y) * 100deg) 75deg 2.5m`
  return (
    <model-viewer src={url}
      camera-controls
      camera-orbit={(30 - scrollProgress) +'deg 75deg 2.5m'}
      preload 
      id="mview"
      reveal-when-loaded
      interaction-poliicy="allow-when-focused"
      interaction-prompt="basic"
      style={{height: '25vh', width: '60vw'}}
      alt="A low-poly 3D model of a pizza box"
      quick-look-browsers="safari chrome"
      background-color="#b52e31">
    </model-viewer>
  );
};

export default ModelViewer;