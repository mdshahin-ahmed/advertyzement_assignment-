import React, { useState } from "react";
import Header from "../Header/Header";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadData = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  };

  console.log(users);

  return (
    <div>
      {/* <button>Click me</button> */}
      {<Header loadData={loadData}></Header>}
    </div>
  );
};

export default Home;
