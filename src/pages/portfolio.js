import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import CardRetro from "../components/cardRetro";
import portfolioData from "../portfolioData";
import "../css/pages/portfolio.scss";

const Portfolio = () => (
  <Layout>
    <SEO title="portfolio my work" />

    <div id="portfolio-page-container">
      <h1 className="page-heading">Portfolio</h1>
      <p style={{ textAlign: "center" }}>content coming soon!</p>
      {/* <div className="portfolio-grid">
        {portfolioData.map(i => (
          <CardRetro key={i.id}>
            <h2>{i.title}</h2>
            <p>{i.tech}</p>
          </CardRetro>
        ))}
      </div> */}
    </div>
  </Layout>
);

export default Portfolio;
