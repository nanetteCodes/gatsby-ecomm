import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import stuffIKnowData from "../data/stuffIKnowData";
import getTimeAgo from '../utils/getTimeAgo'
import "../css/pages/about.scss";

const About = () => {

  const [timeAgo, setTimeAgo] = useState('initialState');

  useEffect(() => {
    setTimeAgo(getTimeAgo())
  }, [])

  return (
    <Layout>
      <SEO
        title="About Me"
        keywords={[`nanette`, `information`, `info`, `bio`, `about`]}
      />

      <div className="about-page-container">
        <h1 className="page-heading">About Me</h1>

        <div className="intro">
          <p>
            My name is Nanette and I have been a software engineer for{" "}
            <span className='timeago'>{timeAgo} </span>
            years. I have a passion for the front end and building things that
            have an apealling User Experience. I made the switch to computer science
            from a career in music. If you would like to know more information about me, what I do or if
            you would like to get intouch about working together feel free to
            contact me!
          </p>
        </div>

        {/* <div className="i-like">
            <ILikeList />
          </div> */}

        <div className="tech-im-using">
          <h2>Technologies I'm Using</h2>
          <div className="tech-im-using_grid">
            {stuffIKnowData.map(stuffs => (
              <span key={stuffs.id}>{stuffs.stuff}</span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )

}


export default About;
