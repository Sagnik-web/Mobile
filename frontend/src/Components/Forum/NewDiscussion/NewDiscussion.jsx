import React from "react";
import "./NewDiscussion.css";
// import profile from "../../../Asset/MaskGroup.png";

const NewDiscussion = () => {
  return (
    <div className="New_discussion">
      <div className="New_discussion_container">
        <div className="New_discussion_Rapper">
          <div className="New_discussion_image_Section">
            <div className="Explore_Card_imgcard_rapper">
              {/* <img src={profile} alt="profile" /> */}
              <h3>Virat Kohli</h3>
              <p>Software Developer</p>
            </div>
          </div>
          <div className="New_discussion_content">
            <form>
              <div className="New_discussion_input">
                <p>Enter Topic Title</p>
                <input type="text"></input>
              </div>
              <div className="New_discussion_dropdown">
                <select>
                  <option value="">Select Category</option>
                  <option value="">Most Recent</option>
                </select>
                <select>
                  <option value="">Select Sub Category</option>
                  <option value="">Most Recent</option>
                </select>
              </div>
              <div className="New_discussion_input">
                <p>Description</p>
                <textarea rows="8"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDiscussion;
