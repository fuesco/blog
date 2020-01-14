import React, {FunctionComponent} from "react";
import '@google/model-viewer';

interface ModelViewerProps {
  url: string;
}

const ModelViewer: FunctionComponent<ModelViewerProps> = ({url=''}) => {

  return (
    <model-viewer src={url}
      camera-controls
      camera-orbit="calc(30deg - env(window-scroll-y) * 100deg) 75deg 2.5m"
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