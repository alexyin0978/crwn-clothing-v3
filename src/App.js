//hooks
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//containers
import Home from "./containers/home/Home.container";
import Auth from "./containers/auth/Auth.container";
import Shop from "./containers/shop/Shop.container";
import BackStage from "./containers/backStage/BackStage.container";
import BackStageItemEdit from "./containers/backStageItemEdit/BackStageItemEdit.container";
import NotFound from './containers/notFound/NotFound.container';

//high order component
import Navbar from "./hoc/navbar/Navbar.hoc";

function App() {

  const location = useLocation();

  const itemId = location.state && location.state.itemId;

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop" element={<Shop />} />

        {/* 後台管理 */}
        <Route path="back-stage/" element={<BackStage path='back-stage'/>}>
          { itemId && <Route path=":itemId" element={<BackStageItemEdit path='back-stage'/>} /> }
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
