import React from "react";
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
        <div className="footer-copywrite">
          ♥ Built by {siteAuthor} © {new Date().getFullYear()}
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/nanette-julius"
            target="_blank"
            rel="noopener noreferrer"
            id="logo"
          >
            <span className="logo-box">
              <img src={linkedinIcon} alt="linkedin link" />
            </span>
          </a>
          <a
            href="https://github.com/nanetteCodes"
            target="_blank"
            rel="noopener noreferrer"
            id="logo"
          >
            <span className="logo-box">
              <img src={githubIcon} alt="github link" />
            </span>
          </a>
          <a href="mailto:nanette.codes@gmail.com" id="logo">
            <span className="logo-box">
              <img src={emailIcon} alt="email link" />
            </span>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
