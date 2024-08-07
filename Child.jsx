import React, { useState } from "react";
import Grandchild from "./Grandchild";

const Child = () => {
  const [state, setstate] = useState("");

  const getdatafromchild = (getdata) => {
    setstate(getdata);
  };
  return (
    <div>
      <p>Child</p>
      <h2>
        got a data from child {state.name}-{state.age}
      </h2>
      <Grandchild data={getdatafromchild} />
    </div>
  );
};

export default Child;
