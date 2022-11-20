import React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "../components/ui/Toolbar";

function Base() {
  return (
    <>
      <Toolbar />
      <Outlet />
      {/* TODO: Pie de página */}
    </>
  );
}

export default Base;
