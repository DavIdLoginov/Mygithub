import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationLink = ({ link, name }) => {
  return (
    <Button color="inherit" component={Link} to={link}>
      {name}
    </Button>
  );
};

export default NavigationLink;