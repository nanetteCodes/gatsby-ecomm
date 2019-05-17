import React from "react";
import { withPrefix, Link } from "gatsby";
import Footer from "./footer";

import "./leftSection.scss";

const LeftSection = () => {
  return (
    <aside id="leftSection">
      <div className="content">
        <Link to="/" id="logo-sideBar">
          <span className="logo-box">
            <span className="logo-initial">N</span>
          </span>
        </Link>
        <h1>Nanette Julius</h1>
        <h2>www.nanette.codes</h2>
        <a
          rel="noopener noreferrer"
          href={withPrefix("Nanette_Julius.pdf")}
          target="_blank"
          className="logo-box"
        >
          Download CV
        </a>
      </div>

      <Footer siteAuthor={"Nanette Julius"} />
    </aside>
  );
};

export default LeftSection;
