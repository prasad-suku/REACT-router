import axios from "axios";
import React, { useEffect, useState } from "react";

function Postdata() {
  const [items, setitems] = useState("");
  // const [put, setput] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setitems(res.data.slice(0, 15));
      console.log(items);
    });
  }, []);
  return (
    <>
      <h2>User data's</h2>
      <br />
      <br />
      <h2> POST ITEM</h2>
      {/* <input type="text" value={put} onChange={(e) => setput(e.target.value)} /> */}
      <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <h3>User ID: {item.userId}</h3>
              <h3>Body: {item.body}</h3>
              <h3>Title: {item.title}</h3>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Postdata;
