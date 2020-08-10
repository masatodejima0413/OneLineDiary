import React from "react";
import Header from "./Header";
import Post from "./Post";
import TimeLine from "./TimeLine";
import { access } from "fs";

const App = ({ accessToken }) => {
  return (
    <>
      <Header />
      <Post />
      <div>accessToken is {accessToken}</div>
      <TimeLine />
    </>
  );
};

export default App;
