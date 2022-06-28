import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Main from "./pages/Main";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
