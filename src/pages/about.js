import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactFlipModal from "../components/reactFlipModal";

const About = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`nanette`, `information`, `info`, `bio`, `about`]}
    />
    <h1 className="page-heading">About me...</h1>
    <p style={{ textAlign: "center" }}>content coming soon!</p>
  </Layout>
);

export default About;
