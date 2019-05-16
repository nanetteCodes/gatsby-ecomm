import React from "react";
import Typed from "react-typed";
import { withPrefix } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

import "../css/pages/index.scss";

const IndexPage = () => {
  let roles = [
    "Built with React",
    "Built with Gatsby",
    "Built with styled-Components",
    "Built with Css Grid"
  ];

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `Nanette`,
          `react`,
          `frontend`,
          `front-end`,
          `developer`,
          `engineer`,
          `web`,
          `portfolio`
        ]}
      />
      <div id="home-page-container">
        <h1 className="page-heading">Hi I'm Nanette!</h1>
        <h2> Welcome To My Site :)</h2>

        <Typed
          className="self-typed-heading"
          loop
          typeSpeed={40}
          backSpeed={40}
          strings={roles}
          shuffle={false}
          backDelay={1000}
          loopCount={0}
          showCursor
          smartBackspace
          cursorChar="|"
        />

        <div className="downloadCV">
          <a
            rel="noopener noreferrer"
            className="btn-cv"
            href={withPrefix("Nanette_Julius.pdf")}
            target="_blank"
          >
            Download
          </a>
        </div>
      </div>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      {/* <Link to="/about/">Learn more about me.</Link> */}
    </Layout>
  );
};
export default IndexPage;
