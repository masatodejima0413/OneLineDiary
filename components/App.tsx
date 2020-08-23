import React, { useEffect } from "react";
import Header from "./Header";
import Post from "./Post/Post";
import TimeLine from "./TimeLine";
import { db } from "../libs/firebase";

const App = ({ accessToken }) => {
  const getData = () => {
    const userRef = db.collection("users");
    userRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().userName}`);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Post accessToken={accessToken} />
      <TimeLine />
    </>
  );
};

export default App;
