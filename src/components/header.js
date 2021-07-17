import React, { useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Media from "react-media";
import netlifyIdentity from "netlify-identity-widget";
import LinkBoxStyled from "./linkBoxStyled";
import BurgerHeader from "./burgerHeader";
import RegularHeader from "./regularHeader";
import "./header.scss";

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" };
};
const NavLink = props => <Link getProps={isActive} {...props} />;

const Header = ({ siteTitle }) => {

  useEffect(() => {
    netlifyIdentity.init();
  }, [])

  // TODO: updated netlify identity UI
  return (
    <header>
      <div className="headerContent">
        <NavLink to="/" id="logo">
          <LinkBoxStyled>
            <span className="logo-initial">N</span>
          </LinkBoxStyled>
          <span className="logo-text" data-links>
            {siteTitle}
          </span>
        </NavLink>
        <Media query="(max-width: 765px)">
          {matches => (matches ? <BurgerHeader /> : <RegularHeader />)}
        </Media>

        {/* <div data-netlify-identity-menu /> */}
      </div>
    </header>
  );

}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};
export default Header;
