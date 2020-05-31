import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        sadFace: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div style={{ maxWidth: '450px' }}>
          <Img fluid={data.sadFace.childImageSharp.fluid} alt="sad face 404" />
        </div>

      </Layout>
    )}
  />

);

export default NotFoundPage;
