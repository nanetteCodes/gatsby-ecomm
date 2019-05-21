import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

import "../css/pages/portfolio.scss";

const Portfolio = () => (
  <Layout>
    <SEO title="portfolio my work" />

    <div id="portfolio-page-container">
      <h1 className="page-heading">Portfolio</h1>

      <div className="portfolio-grid">
        <Card>Testing Cards</Card>
        <Card>Testing Cards</Card>
        <Card>Testing Cards</Card>
        <Card>Testing Cards</Card>
        <Card>Testing Cards</Card>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
