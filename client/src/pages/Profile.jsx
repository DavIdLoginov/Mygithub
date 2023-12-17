import React, { useState, useEffect } from "react";
import ProfileCard from "../organisms/ProfileCard";
import { ProfileData } from "../services/ProfileServices";
import LoadingFallback from "../molecules/LoadingFallback";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    ProfileData(setUserData);
  }, []);

  const openUserProfile = () => {
    if (userData) {
      window.open(userData.html_url, "_blank");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {userData ? (
        <ProfileCard userData={userData} openUserProfile={openUserProfile} />
      ) : (
        <LoadingFallback />
      )}
    </div>
  );
};

export default Profile;
