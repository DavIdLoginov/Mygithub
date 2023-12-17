import { SERVER_BASE_URL } from "./const";

// request for date profile

export const ProfileData = async (setUserData) => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/getUserData`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const userData = await response.json();
    console.log("User data:", userData);
    setUserData(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};


export const updateProfileData = async (updatedData) => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/updateUserData`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(updatedData),
    });

    const updatedUserData = await response.json();
    console.log("Updated user data:", updatedUserData);
    return updatedUserData;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw new Error("Failed to update user data");
  }
};
