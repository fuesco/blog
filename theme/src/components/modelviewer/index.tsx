import React, {FunctionComponent, useEffect, useState} from "react";
import {StyledModelViewer} from "./style";

const isBrowser = typeof window !== 'undefined';
interface ModelViewerProps {
  url: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
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
    //import('@google/model-viewer');
    return (
      <StyledModelViewer>
        <model-viewer 
          src={url}
          camera-controls
          camera-orbit={(30 - scrollProgress) +'deg 75deg 115%'} 
          reveal-when-loaded
          interaction-policy="allow-when-focused"
          interaction-prompt="auto"
          interaction-prompt-style="wiggle"
          style={{height: '18.5vh', width: '30vw', backgroundColor: 'unset'}}
          shadow-intensity={0.5}
          alt="A low-poly 3D model of the earth"
          auto-rotate
        />
      </StyledModelViewer>
    );
  } else {
    return (
      <img src="https://jetlaglabs.github.io/assets/img/sky-gradient.jpg" alt="vr" width="555px" height="343px" />
    )
  }
};


export default ModelViewer;