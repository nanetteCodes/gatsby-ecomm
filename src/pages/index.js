import React from "react";
import Typed from "react-typed";
import SEO from "../components/seo";
import Layout from "../components/layout";
// import ReactFlipModal from "../components/reactFlipModal";

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
          `portfolio`,
          `website`
        ]}
      />
      <div id="home-page-container">
        <h1>Hi I'm Nanette!</h1>
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
        {/* <Link to="/about/">Learn more about me.</Link> */}

        {/* <ReactFlipModal /> */}   
      </div>      
    </Layout>
  );
};
export default IndexPage;
