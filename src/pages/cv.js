import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { withPrefix } from "gatsby";
// import Media from "react-media";
import Image from "../components/image";

import "../css/pages/cv.scss";

const Cv = () => (
  <Layout>
    <SEO
      title="Resume"
      keywords={[`cv`, `work experience`, `nanette julius`]}
    />
    <div className="cv-page-container">
      <h1 className="page-heading">Resume</h1>

      <div className="container">
        <Image />
        <div className="overlay">
          <a
            rel="noopener noreferrer"
            href={withPrefix("Nanette_B_02-03-2020.pdf")}
            target="_blank"
            className="text"
          >
            Download
          </a>
        </div>
      </div>
      {/* <iframe
              src={withPrefix("Nanette_B_02-03-2020.pdf")}
              title="NanetteJuliusCV"
            /> */}
    </div>
  </Layout>
);

export default Cv;
