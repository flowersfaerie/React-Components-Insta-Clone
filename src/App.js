/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import {PostsPage} from "./Components/PostsContainer/PostsPage";
import {CommentSection} from "./Components/SearchBar/SearchBarContainer"
import * as postData from "./dummy-data"
// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = (props) => {
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;
