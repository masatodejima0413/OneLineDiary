import React, { useState, useEffect } from "react";

const endpoint = "https://photoslibrary.googleapis.com/v1/albums";
// const endpoint = "http://dummy.restapiexample.com/api/v1/employees";

const ConsoleRest = ({ accessToken }) => {
  const [data, setData] = useState("");

  useEffect(async () => {
    const res = await fetch(`${endpoint}?access_token=${accessToken}`);
    const json = await res.json();

    //   await setData(json);
    console.log(accessToken);
    console.log(json);
  }, [accessToken]);

  return <div>console!!</div>;
};

export default ConsoleRest;
