import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
const MainLayout = () => {
  return (
    <>
      <div>Main Layout</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
