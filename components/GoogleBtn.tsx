import React, { useState } from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "1062013144652-an0qd6bvkksav66ksoeb73v59mi1877m.apps.googleusercontent.com";

const READONLY_SCOPE = "https://www.googleapis.com/auth/photoslibrary.readonly";
const GoogleBtn = ({ isLogined, setIsLogined, setAccessToken }) => {
  const login = (response) => {
    if (response.accessToken) {
      setIsLogined(true);
      setAccessToken(response.accessToken);
    }
  };
  const logout = () => {
    setIsLogined(false);
    setAccessToken("");
  };

  const handleLoginFailure = () => {
    alert("Failed to LOG-IN");
  };

  const handleLogoutFailure = () => {
    alert("Failed to LOG-OUT");
  };

  return (
    <div>
      {isLogined ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
          scope={READONLY_SCOPE}
        />
      )}
    </div>
  );
};

export default GoogleBtn;
