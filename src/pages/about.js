import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="about me" />
    <h1 className="page-heading">About me...</h1>
    <p style={{ textAlign: "center" }}>content coming soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default About;
