import React from "react";
import Router from "./router/Router";
import { Suspense } from "react";
import ResponsiveAppBar from "./components/Header /Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = (props) => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ResponsiveAppBar />
      <main>
        <Router />
      </main>
      <Footer />
    </Suspense>
  );
};

export default App;
