/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "./layout.scss";

const getSiteMetadata = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={getSiteMetadata}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="layout">
          <main>{children}</main>
        </div>
        <Footer siteAuthor={data.site.siteMetadata.author} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
