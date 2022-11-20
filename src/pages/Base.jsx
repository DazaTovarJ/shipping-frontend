import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Toolbar from "../components/ui/Toolbar";

function Base() {
  return (
    <>
      <Toolbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Base;
