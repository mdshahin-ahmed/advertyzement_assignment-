import React from "react";
import { Card } from "react-bootstrap";
import "./User.css";

const User = ({ user }) => {
  const { first_name, last_name, email, avatar } = user;

  return (
    <div className="col-lg-4 mb-5 cardWrap">
      <Card className="shadow" style={{ borderRadius: "20px" }}>
        <div className="cardImageWrap">
          <Card.Img
            style={{ borderRadius: "20px 20px 0px 0px" }}
            variant="top"
            src={avatar}
          />
        </div>
        <Card.Body>
          <Card.Title>{`${first_name} ${last_name}`}</Card.Title>
          <Card.Text>Email: {email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
