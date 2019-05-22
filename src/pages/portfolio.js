import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CardRetro from "../components/cardRetro";

import "../css/pages/portfolio.scss";

const Portfolio = () => (
  <Layout>
    <SEO title="portfolio my work" />

    <div id="portfolio-page-container">
      <h1 className="page-heading">Portfolio</h1>

      <div className="portfolio-grid">
        <CardRetro>Testing Cards</CardRetro>
        <CardRetro>Testing Cards</CardRetro>
        <CardRetro>Testing Cards</CardRetro>
        <CardRetro>Testing Cards</CardRetro>
        <CardRetro>Testing Cards</CardRetro>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
