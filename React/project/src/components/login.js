import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import loginimg from "./loginimg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, usernameupdate] = useState("");
  const [passwordlogin, passwordupdate] = useState("");
  const usenavigate = useNavigate();
  const proceedLogin = (e) => {
    console.log("h");
    e.preventDefault();
    if (validate()) {
      let item = { username, passwordlogin };
      console.log(item);
      axios
        .post("http://localhost:3001/user/login", {
          username: username,
          password: passwordlogin,
        })
        .then(function (response) {
          console.log(response);
          toast.success("login successfully");
          usenavigate("/home");
        })
        .catch(function (error) {
          console.log(error);
          toast.error("failed:", error.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("please set the usename");
    }
    if (passwordlogin === "" || passwordlogin === null) {
      result = false;
      toast.warning("please set the password");
    }
    return result;
  };
  return (
    <>
      <div style={{ marginTop: "130px" }} className="container">
        <section className="d-flex justify-content-between">
          <div className="left_side" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8">Sign In</h3>
            <Form onSubmit={proceedLogin}>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    usernameupdate(e.target.value);
                  }}
                  className="mb-3 mt-3"
                  value={username}
                  type="text"
                  placeholder="Enter name"
                  autoComplete={false}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    passwordupdate(e.target.value);
                  }}
                  className="mb-3"
                  value={passwordlogin}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button className="col-lg-8" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="right_side">
            <div className="image">
              <img
                style={{ marginTop: 0, maxWidth: 480 }}
                src={loginimg}
                alt="image"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
