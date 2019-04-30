import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="about me" />
    <h1>About me...</h1>
    <p>content coming soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default About;
