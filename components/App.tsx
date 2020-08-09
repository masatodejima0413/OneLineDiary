import React from "react";
import Header from "./Header";
import Post from "./Post";
import TimeLine from "./TimeLine";
import Employee from "./DummyApi";
import GoogleBtn from "./GoogleBtn";

const App = () => {
  return (
    <>
      <GoogleBtn />
      <Header />
      <Post />
      <TimeLine />
    </>
  );
};

export default App;
