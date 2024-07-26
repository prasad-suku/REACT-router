import React, { useEffect, useState } from "react";
import axios from "axios";

function Getdata() {
  const [item, setItem] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setItem(res.data.slice(0, 10)))
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <>
      <h2>Datas succesfully got from sever</h2>

      <input
        type="text"
        placeholder="enter title here"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <br />

      <div>
        {item
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <>
                <h2>{item.title}</h2>
                <br />
                <p>{item.body}</p>
                <br />
                <br />
                <br />
              </>
            );
          })}
      </div>
    </>
  );
}

export default Getdata;
