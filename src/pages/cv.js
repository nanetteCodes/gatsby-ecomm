import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { withPrefix } from "gatsby";

import "../css/pages/cv.scss";

const Cv = () => (
  <Layout>
    <SEO title="resume cv work experience" />
    <h1 className="page-heading">Resume</h1>
    <iframe
      style={{ width: "100%", height: "800px" }}
      src={withPrefix("Nanette_Julius.pdf")}
      title="NanetteJuliusCV"
    />
  </Layout>
);

export default Cv;
