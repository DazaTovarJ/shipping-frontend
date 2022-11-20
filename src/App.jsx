import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Toolbar from "./components/ui/Toolbar";
import "./assets/styles/custom.scss";
import Login from "./components/form/Login";

function App() {
  library.add(far, fas);

  return (
    <div>
      <Toolbar />
      <Login />
    </div>
  );
}

export default App;
