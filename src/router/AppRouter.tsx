import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../shared/ui/Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
