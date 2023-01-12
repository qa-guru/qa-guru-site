import React, { Suspense } from "react";
import AppRouter from "../router/AppRouter";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <main>
        <AppRouter />
      </main>
    </Suspense>
  );
};

export default App;
