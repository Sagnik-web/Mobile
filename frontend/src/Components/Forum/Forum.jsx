import React from "react";
import { Route } from "react-router-dom";
import Explore from "./Explore/Explore";
import ForumDiscussion from "./ForumDiscussion/ForumDiscussion";
import NewDiscussion from "./NewDiscussion/NewDiscussion";
import "./Forum.css";
import ForumNav from "./ForumNav/ForumNav";

const Forum = () => {
  return (
    <div className="Forum">
      <div className="Forum_Container">
        <div className="Forum_NavBar">
          <ForumNav />
        </div>
        <div className="Forum_route">
          <Route component={Forum}>
            <Route path="/forum/explore" component={Explore} />
            <Route path="/forum/discussion" component={ForumDiscussion} />
            <Route path="/forum/newdiscussion" component={NewDiscussion} />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Forum;
