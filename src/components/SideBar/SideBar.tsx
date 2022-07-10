import {
  Box,
  Button,
  Divider,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

type tSideBarProps = {
  closeSidebar: () => void;
  showSidebar: boolean;
};

export const SideBar: FC<tSideBarProps> = ({ closeSidebar, showSidebar }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Box
      sx={{
        maxWidth: (theme) =>
          showSidebar ? 360 : theme.mixins.toolbar.minHeight,
        transition: "max-width .5s",
        bgcolor: "background.paper",
        height: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        borderRight: ({ palette }) => "1px solid" + palette.primary.main,
        // backgroundColor: "primary.main",
      }}
    >
      <Button onClick={closeSidebar}>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <Icon>{showSidebar ? "chevron_left" : "chevron_right"}</Icon>
        </ListItemIcon>
      </Button>
      <Divider />

      <List component="nav" sx={{ p: 0 }}>
        {routes.map((item, i) => {
          return (
            <NavLink key={i} to={`/${item.url}`}>
              <ListItemButton
              // selected={selectedIndex === i}
              // onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>

                <ListItemText
                  primary={item.title}
                  sx={{
                    textTransform: "uppercase",
                    color: "black",
                    textDecoration: "none",
                    visibility: showSidebar ? "visible" : "hidden",
                  }}
                />
              </ListItemButton>
            </NavLink>
          );
        })}
      </List>

      <Divider />

      <List
        component="nav"
        aria-label="secondary mailbox folder"
        sx={{ mt: "auto" }}
      >
        <ListItemButton
        // selected={selectedIndex === 2}
        // onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <Icon>account_circle</Icon>
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{ visibility: showSidebar ? "visible" : "hidden" }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};
