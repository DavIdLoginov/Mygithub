import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const EditProfileForm = ({ userData, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState({
    name: userData.name || "",
    login: userData.login || "",
    email: userData.email || "",
    company: userData.company || "",
    location: userData.location || "",
    bio: userData.bio || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <form>
      <TextField
        label="Name"
        name="name"
        value={editedData.name}
        onChange={handleInputChange}
      />
      <TextField
        label="Login"
        name="login"
        value={editedData.login}
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        name="email"
        value={editedData.email}
        onChange={handleInputChange}
      />
      <TextField
        label="Company"
        name="company"
        value={editedData.company}
        onChange={handleInputChange}
      />
      <TextField
        label="Location"
        name="location"
        value={editedData.location}
        onChange={handleInputChange}
      />
      <TextField
        label="Bio"
        name="bio"
        value={editedData.bio}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
      <Button variant="contained" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default EditProfileForm;
