import React from "react";
import { Link } from "gatsby";
import Typed from "react-typed";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

import "../css/index.scss";

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
      <div>
        <h1>Hi I'm Nanette!</h1>
        <h2> Welcome To My Site :)</h2>
        <Typed
          className="self-typed-heading"
          loop
          typeSpeed={70}
          backSpeed={40}
          strings={roles}
          shuffle={false}
          backDelay={1000}
          loopCount={0}
          showCursor
          smartBackspace
          cursorChar="|"
        />
      </div>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Link to="/about/">Learn more about me.</Link>
    </Layout>
  );
};
export default IndexPage;
