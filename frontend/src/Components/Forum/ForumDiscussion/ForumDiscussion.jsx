import React from "react";
import { Link } from "react-router-dom";
import ForumDiscussionCard from "../ForumDiscussion/ForumDiscussionCard/ForumDiscussionCard";
import "./ForumDiscussion.css";

const ForumDiscussion = () => {
  return (
    <div className="Forum_Discussion">
      <div className="Forum_Discussion_container">
        {/* when no card is present */}
        <div className="Forum_discussion_display1">
          <p>No Discussions Yet</p>
          <div className="Forum_discussion_display1_button">
            <Link to="/forum/newdiscussion">
              <p>Start New Discussion</p>
            </Link>
          </div>
        </div>
        {/* cards are present to display */}
        <div className="Forum_discussion_display2">
          <div className="Forum_discussion_display2_rapper">
            <div className="Discussion_display2_Card">
              <ForumDiscussionCard />
            </div>
            <div className="Discussion_display2_button">
              <p className="push">Push</p>
              <p className="delete">Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDiscussion;
