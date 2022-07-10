import { Box, Container } from "@mui/material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";

type tLayoutPageProps = {
  [key: string]: any;
};

export const LayoutPage: FC<tLayoutPageProps> = ({ children }) => {
  const [showSidebar, setSidebar] = useState(false);
  const toggleSIdebar = () => setSidebar((prev) => !prev);

  return (
    <Box sx={{ width: 1, height: "100vh" }} className="LayoutPage">
      <Box
        display="grid"
        gridTemplateColumns={`${showSidebar ? "auto" : "64px"} 1fr`}
        gridTemplateRows="auto 1fr"
        height={"100%"}
      >
        <Box gridColumn={"1/-1"}>
          <Header />
        </Box>

        <Box gridColumn={"1"}>
          <SideBar closeSidebar={toggleSIdebar} showSidebar={showSidebar} />
        </Box>

        <Box gridColumn={"2"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
