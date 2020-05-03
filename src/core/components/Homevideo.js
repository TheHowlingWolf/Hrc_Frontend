

import React from 'react';
import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css";
// import "~video-react/styles/scss/video-react";

  const Homevideo = () => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};
export default Homevideo;
