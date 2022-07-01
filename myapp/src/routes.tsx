import { Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContextProvider";
import HeaderLayout from "./layouts/HeaderLayout";
import AddProduct from "./pages/AddProduct";
import Main from "./pages/Main";

function MainRoutes() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </GlobalContextProvider>
  );
}

export default MainRoutes;
