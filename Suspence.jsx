// import Loginpage from "./Loginpage";

import React, { Suspense, lazy } from "react";
// import Home from "./Home";

const Homecom = lazy(() => import("./Home.jsx"));
function Suspence() {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <h2>Topix</h2>
        <Homecom />
      </Suspense>
    </>
  );
}

export default Suspence;
