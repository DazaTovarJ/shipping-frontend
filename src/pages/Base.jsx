import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Toolbar from "../components/ui/Toolbar";
import Cloud from "../components/ui/Cloud";


function Base() {
  return (
    <>
      <Toolbar />
      <Cloud />
      <Outlet />
      <Footer />

    </>
  );
}

export default Base;
