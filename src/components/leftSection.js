import React from "react";
import { withPrefix, Link } from "gatsby";
import Footer from "./footer";

import "./leftSection.scss";

const LeftSection = props => {
  return (
    <aside className={`${"leftSection"} ${props.className}`}>
      <div className="content">
        <Link to="/" id="logo-sideBar">
          <span className="logo-box">
            <span className="logo-initial">N</span>
          </span>
        </Link>
        <h1>Nanette Boghosian</h1>
        <h2>www.nanette.codes</h2>
        <h3>nanette.codes@gmail.com</h3>
        <a
          rel="noopener noreferrer"
          href={withPrefix("Nanette_B_04-07-2020.pdf")}
          target="_blank"
          className="logo-box"
        >
          Download CV
        </a>
      </div>

      <Footer siteAuthor={"Nanette Boghosian"} />
    </aside>
  );
};

export default LeftSection;
