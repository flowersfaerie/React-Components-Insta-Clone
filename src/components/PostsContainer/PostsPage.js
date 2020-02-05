//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer"
// import App from "../../App"

// pass the data from App.js down as props then map through the data
const PostsPage = ({data}) => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {data.map(user => (
          <div>
            <Post post={user} />
            <CommentSectionContainer post={user} key={data.index}/>
          </div>
      ))}
    </div>
  );
};

export default PostsPage;

