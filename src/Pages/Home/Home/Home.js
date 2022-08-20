import React, { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import User from "../User/User";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
    setLoading(false);
  };

  console.log(users);

  return (
    <div>
      {<Header loadData={loadData}></Header>}

      <div className="mt-5">
        {loading ? (
          <Spinner animation="border" variant="info" />
        ) : (
          <Container>
            <Row>
              {users.map((user) => (
                <User key={user.id} user={user}></User>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Home;
