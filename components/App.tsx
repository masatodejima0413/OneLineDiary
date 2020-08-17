import React from "react";
import Header from "./Header";
import Post from "./Post/Post";
import TimeLine from "./TimeLine";

const App = ({ accessToken }) => {
  return (
    <>
      <Header />
      <Post accessToken={accessToken} />
      <TimeLine />
    </>
  );
};

export default App;
