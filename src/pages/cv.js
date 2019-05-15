import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Resume from "../../public/static/Nanette_Julius.pdf";

const Cv = () => (
  <Layout>
    <SEO title="resume cv work experience" />
    <h1>Resume</h1>
    <div className="cv-title">
      <a download="Nanette_Julius.pdf" className="btn-cv" href={Resume}>
        Download
      </a>
    </div>
    {/* <iframe style={{ width: "100%", height: "800px" }} src={Resume} /> */}
  </Layout>
);

export default Cv;
