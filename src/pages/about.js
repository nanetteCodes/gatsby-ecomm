import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Emoji from "../components/emoji";

import "../css/pages/about.scss";

function getDateFrom() {
  const dateFirst = new Date("07/01/2015");
  const dateSecond = new Date();

  // time difference
  const timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());

  // days difference
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const diffYears = diffDays / 360;

  // difference
  return diffYears.toFixed(2);
}

const About = () => (
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
          <span>{getDateFrom()} </span>
          years. I have a passion for the front end and building things that
          have an apealling UI and UX. I made the switch to computer science
          from music. If you would like to know more information about me or if
          you would like to get intouch about working together feel free to
          contact me!
        </p>
      </div>

      <div className="i-like">
        <h2>I Like</h2>
        <ul>
          <li>
            Basketball
            <Emoji symbol=" 🏀" />
          </li>
          <li>
            Playing Guitar
            <Emoji symbol=" 🎸" />
          </li>
          <li>
            Traveling <Emoji symbol=" 🛩🧳" />
          </li>
          <li>
            Wine Tasting
            <Emoji symbol=" 🍷" />
          </li>
          <li>
            Bindge Watching New Shows
            <Emoji symbol=" 📺" />
          </li>
        </ul>
        <ul>
          <li>
            Beach
            <Emoji symbol=" 🏖" />
          </li>
          <li>
            Sushi
            <Emoji symbol=" 🍣 🥢" />
          </li>
          <li>
            All food actually
            <Emoji symbol=" 🍴😋" />
          </li>
          <li>
            Learning new tech
            <Emoji symbol=" 💾" />
          </li>
          <li>
            Building stuff
            <Emoji symbol=" 💻" />
          </li>
        </ul>
      </div>

      <div className="tech-im-using">
        <h2>Technologies I'm Using</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby</li>
          <li>Apollo</li>
        </ul>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Node</li>
          <li>Mongo</li>
        </ul>
        <ul>
          <li>SQL</li>
          <li>GraphQL</li>
          <li>Express</li>
          <li>jQuery</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default About;
