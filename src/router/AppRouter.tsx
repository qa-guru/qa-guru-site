import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import IconsStack from "../pages/IconsStack/IconsStack";
import dataIconsStack from "../pages/IconsStack/icons-stack.json";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        path="/icons-stack"
        element={<IconsStack pages={dataIconsStack.pages} />}
      />
    </Routes>
  );
};

export default AppRouter;
