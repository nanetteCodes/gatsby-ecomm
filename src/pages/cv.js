import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

//import resume from 'Nanette_Julius.pdf'

const Cv = () => (
  <Layout>
    <SEO title="resume cv work experience" />
    <h1>Resume</h1>
    <div className="cv-title">
      <a
        download="Nanette_Julius.pdf"
        className="btn-cv"
        href="Nanette_Julius.pdf"
      >
        Download
      </a>
    </div>
    {/* <iframe style={{ width: "100%", height: "800px" }} src={Resume} /> */}
  </Layout>
);

export default Cv;
