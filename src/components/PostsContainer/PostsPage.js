//Complete the necessary code in this file
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import App, {data} from "../../App"

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      const [dataArray, setDataArray] = useState(props.data[0]);
      {props.data.map(item => {
        return <Post post={dataArray} />;
      })}
    </div>
  );
};

export default PostsPage;

