import React from "react";
import Popup from "reactjs-popup";
import BurgerIcons from "./burgerIcons";
import Menu from "./burgerMenu";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  position: "relative"
};

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const BurgerHeader = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: "#fff8f3" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcons open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  </div>
);

export default BurgerHeader;
