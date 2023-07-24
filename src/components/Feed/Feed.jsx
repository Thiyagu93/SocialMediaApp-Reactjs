import React from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../data";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedwrapped">
        <Share />
        {Posts.map((p)=>{
          return  <Post key={p.id} post={p} />
        })}
      </div>
    </div>
  );
};

export default Feed;
