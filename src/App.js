//hooks
import React from "react";
import { Routes, Route } from "react-router-dom";

//containers
import Home from "./containers/home/Home.container";
import Auth from "./containers/auth/Auth.container";

//high order component
import Navbar from "./hoc/navbar/Navbar.hoc";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
