import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import resume from "../../public/static/Nanette_Julius.pdf";

const Cv = () => (
  <Layout>
    <SEO title="resume cv work experience" />
    <h1>Resume</h1>
    <div className="cv-title">
      <a download className="btn-cv" href={resume}>
        Download
      </a>
    </div>
    {/* <iframe style={{ width: "100%", height: "800px" }} src={Resume} /> */}
  </Layout>
);

export default Cv;
