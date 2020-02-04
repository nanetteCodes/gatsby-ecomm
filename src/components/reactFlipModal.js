import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./reactFlipModal.scss";

const Square = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="square" onClick={toggleFullScreen} onKeyDown={toggleFullScreen} role="button" tabIndex={0}> 
      hi
    </div>
  </Flipped>
);

const FullScreenSquare = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="full-screen-square" onClick={toggleFullScreen}  onKeyDown={toggleFullScreen} role="button" tabIndex={1}>
      bye
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
