import React from "react";
import "./ForumDiscussionCard.css";
// import View from "../../../../Asset/view.svg";

const ForumDiscussionCard = () => {
  return (
    <div className="Discussion_Card">
      <div className="Discussion_Card_container">
        <div className="Discussion_Card_rapper">
          <div className="Discussion_Card_content">
            <h2>Lorem ipsum dolor sit adipiscing elit</h2>
            <p>
              Adipiscing elit. dolor sit adipiscing elit. uspendisse vitae,
              adipiscing suspendisse vitae,adipiscingLorem ipsum dolor sit
              adipiscing elit. dolor sit adipiscing elit. adipiscingLorem ipsum
              dolor sit adipiscing elit. dolor sit adipiscing elit.
            </p>
          </div>
          <div className="Discussion_Card_ratting">
            <div className="Discussion_Card_ratting_rapper">
              <div className="Discussion_Card_ratting_message">
                <img src="" alt="sms"></img>
                <p>28</p>
              </div>
              <div className="Discussion_Card_ratting_view">
                {/* <img src={View} alt="view"></img> */}
                <p>60</p>
              </div>
              <div className="Discussion_Card_ratting_time">
                <p>time</p>
                <p className="Post_time">9:30 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDiscussionCard;
