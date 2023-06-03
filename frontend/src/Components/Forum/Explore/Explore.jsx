import React from "react";
import "./Explore.css";
import ExploreCard from "../Explore/ExploreCard/ExploreCard.jsx";

const Explore = () => {
  return (
    <div className="Explore">
      <div className="Explore_Container">
        <div className="Forum_Fliter">
          <p>Tech</p>
          <p>Design</p>
          <p>Crypto</p>
          <p>Development</p>
          <p>Marketing</p>
          <p>Finance</p>
        </div>
        <div className="ExploreCard_display">
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </div>
  );
};

export default Explore;
