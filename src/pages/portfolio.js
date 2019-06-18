import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PortfolioItems from "../components/portfolioItems";

import "../css/pages/portfolio.scss";

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={[`my work`, ` projects`, `portfolio`, `nanette`]}
    />

    <div id="portfolio-page-container">
      <h1 className="page-heading">Portfolio</h1>
      <div className="portfolio-grid">
        <PortfolioItems />
      </div>
    </div>
  </Layout>
);

export default Portfolio;
