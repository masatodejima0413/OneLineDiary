import React, { useState } from "react";
import App from "../components/App";
import Login from "../components/Login";
import GoogleBtn from "../components/GoogleBtn";

const Index = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <>
      {isLogined && accessToken.length > 0 ? (
        <App accessToken={accessToken} />
      ) : (
        <Login />
      )}
      <GoogleBtn
        isLogined={isLogined}
        setIsLogined={setIsLogined}
        setAccessToken={setAccessToken}
      />
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
