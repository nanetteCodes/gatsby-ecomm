import React from "react";
import BoxStyled from "./boxStyled";

import "./footer.scss";

//icons images
import linkedinIcon from "../images/linkedin.svg";
import githubIcon from "../images/github.svg";
import emailIcon from "../images/envelope.svg";

class Footer extends React.Component {
  render() {
    const { siteAuthor } = this.props;
    return (
      <footer>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/nanette-julius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BoxStyled id="logo">
              <img src={linkedinIcon} alt="linkedin link" />
            </BoxStyled>
          </a>
          <a
            href="https://github.com/nanetteCodes"
            target="_blank"
            rel="noopener noreferrer"
            id="logo"
          >
            <BoxStyled id="logo">
              <img src={githubIcon} alt="github link" />
            </BoxStyled>
          </a>
          <a href="mailto:nanette.codes@gmail.com" id="logo">
            <BoxStyled id="logo">
              <img src={emailIcon} alt="email link" />
            </BoxStyled>
          </a>
        </div>
        <div className="footer-copywrite">
          ♥ Built by {siteAuthor} © {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}

export default Footer;
