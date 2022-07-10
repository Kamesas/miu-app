import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

type tHeaderProps = {};

export const Header: FC<tHeaderProps> = () => {
  return (
    <AppBar className="Header" position="sticky">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Material UI app
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
