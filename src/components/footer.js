import React from "react";

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
