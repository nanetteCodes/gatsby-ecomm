import React from "react";
import StyledBox from "./styledBox";

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
            <StyledBox>
              <img src={linkedinIcon} alt="linkedin link" />
            </StyledBox>
          </a>
          <a
            href="https://github.com/nanetteCodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledBox>
              <img src={githubIcon} alt="github link" />
            </StyledBox>
          </a>
          <a href="mailto:nanette.codes@gmail.com">
            <StyledBox>
              <img src={emailIcon} alt="email link" />
            </StyledBox>
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
