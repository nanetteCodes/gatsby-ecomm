import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ILikeList from "../components/iLikeList";
import stuffIKnowData from "../data/stuffIKnowData";

import "../css/pages/about.scss";

function getTimeAgo() {
  const dateFirst = new Date("01/01/2016");
  const dateSecond = new Date();
  // time difference
  const timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
  // days difference
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const diffYears = diffDays / 360;

  // difference
  return diffYears.toFixed(2);
}

class About extends React.Component {
  state = { timeAgo: '' };

  componentDidMount() {
    this.setState({ timeAgo: getTimeAgo() })
  }

  render() {
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
              My name is Nanette and I have been a developer for{" "}
              <span>{this.state.timeAgo} </span>
              years. I have a passion for the front end and building things that
              have an apealling UI and UX. I made the switch to computer science
              from music. If you would like to know more information about me or if
              you would like to get intouch about working together feel free to
              contact me!
        </p>
          </div>

          <div className="i-like">
            <ILikeList />
          </div>

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
}


export default About;
