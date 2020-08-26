import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { lightBlack } from "../../constants/colors";

const endpoint = "https://photoslibrary.googleapis.com/v1/mediaItems";

interface IPhotoInfo {
  id: string;
  baseUrl: string;
}

const GooglePhotoList = ({ accessToken, setPhotoId }) => {
  const [photoList, setPhotoList] = useState<IPhotoInfo[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const json = await res.json();
    console.log(json);

    json.mediaItems.map((mediaItem) => {
      setPhotoList((prev) => [
        ...prev,
        {
          id: mediaItem.id,
          baseUrl: mediaItem.baseUrl,
        },
      ]);
    });
  };

  return (
    <StyledContainer>
      {photoList.map((photo) => {
        return (
          <img
            src={`${photo.baseUrl}=w256-h256-c`}
            alt=""
            onClick={() => setPhotoId(photo.id)}
          />
        );
      })}
    </StyledContainer>
  );
};

export default GooglePhotoList;

const StyledContainer = styled("div")`
  border-radius: 10px;
  border: 1px ${lightBlack} solid;
  padding: 10px;
  overflow: auto;
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
`;
