import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./burgerIcon";
import Menu from "./burgerMenu";
import "./burgerIcon.scss";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
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
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  </div>
);

export default BurgerHeader;
