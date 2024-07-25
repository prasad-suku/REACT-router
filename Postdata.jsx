import axios from "axios";
import React, { useState } from "react";

function Postdata() {
  const [value, setValue] = useState(["hello", "im prasad", "whre r you"]);
  const [data, setData] = useState({
    email: "",
    name: "",
  });

  let postdatotoapi = () => {
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: { userdata: { email: data.email, name: data.name } },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <button onClick={postdatotoapi}> Add item</button>
    </div>
  );
}

export default Postdata;
