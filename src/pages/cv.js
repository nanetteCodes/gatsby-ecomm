import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { withPrefix } from "gatsby";

const Cv = () => (
  <Layout>
    <SEO title="resume cv work experience" />
    <h1>Resume</h1>
    <div className="cv-title">
      <a
        rel="noopener noreferrer"
        className="btn-cv"
        href={withPrefix("Nanette_Julius.pdf")}
        target="_blank"
      >
        Download
      </a>
    </div>
    {/* <iframe style={{ width: "100%", height: "800px" }} src={Resume} /> */}
  </Layout>
);

export default Cv;
