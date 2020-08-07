import React from "react";
import App from "../components/App";
import Login from "../components/Login";

const Index = () => {
  const isLoggedIn: boolean = true;

  return (
    <>
      {isLoggedIn ? <App /> : <Login />}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Exo", sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        *:focus {
          outline: none;
        }
        button {
          border: none;
          cursor: pointer;
          text-align: left;
        }
      `}</style>
    </>
  );
};

export default Index;
