import React from "react";
import CardMedia from '@mui/material/CardMedia';

const ProfileAvatar = ({ userData }) => (
  <CardMedia
    component="img"
    alt="User Avatar"
    height="140"
    image={userData.avatar_url}
  />
);

export default ProfileAvatar;
