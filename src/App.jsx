import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AuthBase from "./pages/auth/Base";
import Base from "./pages/Base";
import Home from "./pages/Home";
import "./App.scss";
import UserProfile from "./pages/user/UserProfile";

function App() {
  library.add(far, fas);

  return (
    <HashRouter>
      <Routes>
        <Route path="auth" element={<AuthBase />}>
          {/* /auth/login */}
          <Route path="login" element={<Login />} />
          {/* /auth/register */}
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<Base />}>
          {/* / */}
          <Route index element={<Home />} />
          {/* /shippingStatus */}
          <Route path="shippingStatus" />
        </Route>
        <Route path="profile" element={<UserProfile />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
