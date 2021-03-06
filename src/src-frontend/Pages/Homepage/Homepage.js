import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./Homepage.css";
import Searchbar from "../../Components/Searchbar/Searchbar.js";
import InspireButton from "../../Components/InspireButton/InspireButton.js";
import Hero from "../../Components/Hero/Hero.js";
import Team from "../../Components/Team/Team.js";

export default function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="homepage-container">
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          ></link>
          <Hero />
          <Searchbar />
          <InspireButton />
        </div>
      </div>
    </>
  );
}
