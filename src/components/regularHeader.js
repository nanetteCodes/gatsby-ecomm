import React from "react";
import { Link } from "gatsby";

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" };
};
const NavLink = props => <Link getProps={isActive} {...props} />;

const RegularHeader = () => (
  <>
    <NavLink to="/about" data-links>
      About
    </NavLink>
    {/* <NavLink to="/blog" data-links>
            Blog
          </NavLink> */}
    <NavLink to="/portfolio" data-links>
      Portfolio
    </NavLink>
    <NavLink to="/cv" data-links>
      CV
    </NavLink>
  </>
);


export default RegularHeader;
