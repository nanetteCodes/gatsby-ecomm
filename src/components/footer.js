import React from "react";
import LinkBoxStyled from "./linkBoxStyled";

import "./footer.scss";

//icons images
import linkedinIcon from "../images/linkedin.svg";
import githubIcon from "../images/github.svg";
import emailIcon from "../images/envelope.svg";
import PropTypes from "prop-types";

const Footer = ({ siteAuthor }) => (
  <footer>
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/nanette-boghosian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkBoxStyled>
          <img src={linkedinIcon} alt="linkedin link" />
        </LinkBoxStyled>
      </a>
      <a
        href="https://github.com/nanetteCodes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkBoxStyled>
          <img src={githubIcon} alt="github link" />
        </LinkBoxStyled>
      </a>
      <a href="mailto:nanette.codes@gmail.com">
        <LinkBoxStyled>
          <img src={emailIcon} alt="email link" />
        </LinkBoxStyled>
      </a>
    </div>
    <div className="footer-copywrite">
      ♥ {siteAuthor} © {new Date().getFullYear()}
    </div>
  </footer>
);

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
};

export default Footer;
