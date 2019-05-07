import React from "react";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    const { siteAuthor } = this.props;
    return (
      <footer>
        © {new Date().getFullYear()}, Built by {siteAuthor}
      </footer>
    );
  }
}

export default Footer;
