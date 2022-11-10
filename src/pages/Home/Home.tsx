import React, { lazy } from "react";

const Promo = lazy(() => import("../../components/Promo/Promo"));

const Home: React.FC = (props) => {
  return (
    <>
      <Promo />
    </>
  );
};

export default Home;
