import { Link } from "gatsby";
import PropTypes, { string } from "prop-types";
import React from "react";

import gatsbyLogo from "../images/gatsby-icon.png";

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" };
};
const NavLink = props => <Link getProps={isActive} {...props} />;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      {/* title/ logo */}
      <span style={{ display: "flex", alignItems: "center" }}>
        <img
          src={gatsbyLogo}
          alt="gatsby garb logo"
          style={{
            borderRadius: "50%",
            border: "3px solid orange",
            margin: "0 5px",
            width: "50px"
          }}
        />
        <h1 style={{ margin: 0 }}>
          <NavLink to="/">{siteTitle}</NavLink>
        </h1>
      </span>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="products">Store</NavLink>
      {/* Shopping Cart Summary */}
      <div
        style={{ color: "white", cursor: "pointer" }}
        className="snipcart-summary snipcart-checkout"
      >
        <div>
          <strong>My Cart</strong>
        </div>
        <div>
          <span className="snipcart-total-items" /> Items in Cart
        </div>
        <div>
          Total price <span className="snipcart-total-price" />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
