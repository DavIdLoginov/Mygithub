import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import NavigationLink from "../molecules/NavigationLink";

const Header = () => {
  const links = [
    {
      link: "/profile",
      name: "Профиль",
    },
    {
      link: "/repositories",
      name: "Репозитории",
    },
    {
      link: "/other-users",
      name: "Другие пользователи",
    },
  ];

  return (
    <>
      {localStorage.getItem("accessToken") && (
        <AppBar position="static">
          <Toolbar variant="dense" color="dark">
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
            >
              Logo
            </Typography>
            {links.map((linkItem, index) => (
              <NavigationLink
                key={index}
                link={linkItem.link}
                name={linkItem.name}
              />
            ))}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
