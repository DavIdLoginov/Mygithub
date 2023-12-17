import React, { useState } from "react";
import { CardContent, Typography, Button } from "@mui/material";
import EditProfileForm from "./EditProfil";
import { updateProfileData } from "../services/ProfileServices";

const ProfileInfo = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async (editedData) => {
    try {
      await updateProfileData(editedData);
      setIsEditing(false);
      // После обновления данных можно обновить userData
      // Например, получить новые данные с сервера и обновить состояние
    } catch (error) {
      console.error("Failed to update profile:", error);
      // Обработка ошибок при обновлении данных профиля
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {userData.name}
      </Typography>
      {!isEditing ? (
        <div>
          <Typography variant="body2" color="text.secondary">
            <strong>Login:</strong> {userData.login}
            <br />
            <strong>Email:</strong> {userData.email || "Not provided"}
            <br />
            <strong>Company:</strong> {userData.company || "Not provided"}
            <br />
            <strong>Location:</strong> {userData.location || "Not provided"}
            <br />
            <strong>Bio:</strong> {userData.bio || "Not provided"}
            <br />
          </Typography>
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        </div>
      ) : (
        <EditProfileForm
          userData={userData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </CardContent>
  );
};

export default ProfileInfo;
