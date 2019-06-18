import React from "react";
import CardRetro from "./cardRetro";
import portfolioData from "../portfolioData";

const PortfolioItems = () => (
  <>
    {portfolioData.map(i => (
      <CardRetro className={"flipCardRetro"} key={i.id}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{i.title}</h2>
            <p>{i.tech}</p>
          </div>
          <div className="flip-card-back">
            <a href={i.link} target="_blank" rel="noopener noreferrer">
              visit {i.linkTitle}
            </a>
          </div>
        </div>
      </CardRetro>
    ))}
  </>
);

export default PortfolioItems;
