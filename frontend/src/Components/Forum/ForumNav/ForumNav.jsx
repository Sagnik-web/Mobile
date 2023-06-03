import React from "react";
import { Link } from "react-router-dom";
import "./ForumNav.css";

const ForumNav = () => {
  return (
    <div className="Forum_Nav">
      <div className="Forum_Nav_container">
        <div className="Forum_Nav_Rapper">
          <div className="Forum_Nav_rapper1">
            <div className="Forum_Nav_content1">
              <Link to="/forum/explore">
                <p>Explore</p>
              </Link>
              <Link to="/forum/discussion">
                <p>My Discussions</p>
              </Link>
            </div>
            <div className="Forum_Nav_content2">
              <input type="text" placeholder="Search" name="search" />
              {/* <button type="submit">
                <i class="fa fa-search">s</i>
              </button> */}
              <Link to="/forum/newdiscussion">
                <p>Start New Discussion</p>
              </Link>
            </div>
          </div>
          <div className="Forum_Nav_container_dropdown">
            <select>
              <option value="">Trending</option>
              <option value="">Most Recent</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumNav;
