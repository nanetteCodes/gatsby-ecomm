import React from 'react';
import Emoji from "./emoji";


const ILikeList = () => {
  return (
    <>
      <h2>I Like</h2>
      <ul>
        <li>
          Basketball
            <Emoji symbol=" 🏀" />
        </li>
        <li>
          Tennis
            <Emoji symbol=" 🎾" />
        </li>
        <li>
          Wine Tasting
            <Emoji symbol=" 🍷" />
        </li>
        <li>
          Playing Guitar
            <Emoji symbol=" 🎸" />
        </li>
        <li>
          Bindge Watching Shows
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
          Traveling <Emoji symbol=" 🛩🧳" />
        </li>
        <li>
          Building stuff
            <Emoji symbol=" 💻💾" />
        </li>
      </ul>
    </>
  )
}

export default ILikeList
