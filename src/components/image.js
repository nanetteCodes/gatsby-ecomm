import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

// NOTE: even though maxwidth is set here, need to set on parent elem

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        iconImage: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 590) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        burger: file(relativePath: { eq: "burger.png" }) {
          childImageSharp {
            fluid(maxWidth: 590) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cv: file(relativePath: { eq: "cv-snapshot-v5.png" }) {
          childImageSharp {
            fluid(maxWidth: 590) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <Img fluid={data.iconImage.childImageSharp.fluid} /> */}
        <Img fluid={data.cv.childImageSharp.fluid} />
      </>
    )}
  />
);
export default Image;
