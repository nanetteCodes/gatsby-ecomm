import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./styles.css";

const Square = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="square" onClick={toggleFullScreen}>
      not full
    </div>
  </Flipped>
);

const FullScreenSquare = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="full-screen-square" onClick={toggleFullScreen}>
      fullscreen
    </div>
  </Flipped>
);

const ReactFlipModal = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen(prevState => !prevState);

  return (
    <Flipper flipKey={fullScreen}>
      {fullScreen ? (
        <FullScreenSquare toggleFullScreen={toggleFullScreen} />
      ) : (
        <Square toggleFullScreen={toggleFullScreen} />
      )}
    </Flipper>
  );
};

export default ReactFlipModal;