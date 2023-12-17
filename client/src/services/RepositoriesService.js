import { API_BASE_URL } from "./const";

// request for repositories

export const getRepositories = async (type, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/repos?type=${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const repositories = await response.json();
    return repositories;
  } catch (error) {
    console.error(`Error fetching ${type} repositories:`, error);
    return [];
  }
};
