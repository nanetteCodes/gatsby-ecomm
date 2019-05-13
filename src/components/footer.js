import React from "react";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    const { siteAuthor } = this.props;
    return (
      <footer>
        <div class="footer-copywrite">
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
              <i class="fab fa-linkedin-in" />
            </span>
          </a>
          <a
            href="https://github.com/nanetteCodes"
            target="_blank"
            rel="noopener noreferrer"
            id="logo"
          >
            <span className="logo-box">
              <i class="fab fa-github" />
            </span>
          </a>
          <a href="mailto:nanette.codes@gmail.com" id="logo">
            <span className="logo-box">
              <i class="fas fa-envelope-square" />
            </span>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
