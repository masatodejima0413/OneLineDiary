import React, { useState, useEffect } from "react";

const endpoint = "https://photoslibrary.googleapis.com/v1/mediaItems";
// const endpoint = "https://photoslibrary.googleapis.com/v1/albums";

const ConsoleRest = ({ accessToken }) => {
  const [exPhotoUrl, setExPhotoUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${endpoint}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          // pageSize: "100",
        },
      });
      const json = await res.json();
      console.log(json.mediaItems[0].baseUrl);
      setExPhotoUrl(`${json.mediaItems[0].baseUrl}=w256-h256`);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`${endpoint}?access_token=${accessToken}`);
  //     const json = await res.json();
  //     console.log(json);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      console!!
      <img src={exPhotoUrl} alt="textImage" />
    </div>
  );
};

export default ConsoleRest;
