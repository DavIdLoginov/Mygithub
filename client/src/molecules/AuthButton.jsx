import React from "react";
import { Button } from "@mui/material"; 

function AuthButton({ handleClick }) {
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Login with Github
    </Button>
  );
}

export default AuthButton;
