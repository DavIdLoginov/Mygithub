import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../molecules/AuthButton";
import { TokenFetcher, loginWithGithub } from "../services/AuthService";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam && localStorage.getItem("accessToken") === null) {
      TokenFetcher(codeParam, navigate);
    }
  }, [navigate]);


  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthButton handleClick={loginWithGithub} />
    </div>
  );
}

export default Auth;
