import React from "react";
import { Link } from "gatsby";
import "./burgerMenu.scss";

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" };
};
const NavLink = props => <Link getProps={isActive} {...props} />;

export default ({ close }) => (
  <div className="menu">
    <NavLink onClick={close} to="/">
      Home
    </NavLink>
    <NavLink onClick={close} to="/about">
      About
    </NavLink>
    <NavLink onClick={close} to="/portfolio">
      Porfolio
    </NavLink>
    <NavLink onClick={close} to="/cv">
      CV
    </NavLink>
    {/* <NavLink onClick={close} to="/blog">
      Blog
    </NavLink> */}
  </div>
);
