import { BASE_URL, CLIENT_ID, SERVER_BASE_URL } from "./const";

// authorization request

export const TokenFetcher = async (codeParam, navigate) => {
  try {
    const response = await fetch(
      `${SERVER_BASE_URL}/getAccessToken?code=${codeParam}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem("accessToken", data.access_token);
      navigate("/profile");
    }
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

export const loginWithGithub = () => {
  window.location.assign(
    `${BASE_URL}/login/oauth/authorize?client_id=${CLIENT_ID}`
  );
};
