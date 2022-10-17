//hooks
import { Route, Routes } from "react-router-dom";

//containers
import Shop from "../shop/Shop.container";
import ProductPage from "../productPage/ProductPage.container";



const ShopRoutes = () => {

  return (
    // 備註:上一層是Route才有辦法這樣render子層Routes
    <Routes>
      <Route index element={<Shop />} />
      <Route path=':productName' element={<ProductPage />} />
    </Routes>
  );
};
 
export default ShopRoutes;