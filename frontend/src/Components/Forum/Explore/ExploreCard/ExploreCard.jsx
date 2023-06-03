import React from "react";
import "./ExploreCard.css";
// import View from "../../../../Asset/view.svg";
// import profile from "../../../../Asset/MaskGroup.png";

const ExploreCard = () => {
  return (
    <div className="Explore_Card">
      <div className="Explore_Card_container">
        <div className="Explore_Card_rapper">
          <div className="Explore_Card_imgcard">
            <div className="Explore_Card_imgcard_rapper">
              {/* <img src={profile} alt="profile" /> */}
              <h3>Virat Kohli</h3>
              <p>Software Developer</p>
            </div>
          </div>
          <div className="Explore_Card_content">
            <h2>Lorem ipsum dolor sit adipiscing elit</h2>
            <p>
              Adipiscing elit. dolor sit adipiscing elit. uspendisse vitae,
              adipiscing suspendisse vitae,adipiscingLorem ipsum dolor sit
              adipiscing elit. dolor sit adipiscing elit. adipiscingLorem ipsum
              dolor sit adipiscing elit. dolor sit adipiscing elit.
            </p>
          </div>
          <div className="Explore_Card_ratting">
            <div className="Explore_Card_ratting_rapper">
              <div className="Explore_Card_ratting_message">
                <img src="" alt="sms"></img>
                <p>28</p>
              </div>
              <div className="Explore_Card_ratting_view">
                {/* <img src={View} alt="view"></img> */}
                <p>60</p>
              </div>
              <div className="Explore_Card_ratting_time">
                <p>time</p>
                <p>9:30 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
