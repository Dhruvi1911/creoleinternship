import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import regimg from "./regimg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const usenavigate = useNavigate();
  const ISValidate = () => {
    let isprocessed = true;

    if (name === null || name === " ") {
      isprocessed = false;
      toast.error("please set the usename");
    }
    if (email === null || email === " ") {
      isprocessed = false;
      toast.error("please set the email");
    }
    if (password === null || password === " ") {
      isprocessed = false;
      toast.error("please set the password");
    }
    if (number === null || number === " ") {
      isprocessed = false;
      toast.error("please set the phone number");
    }
    if (role === null || role === " ") {
      isprocessed = false;
      toast.error("please set the role");
    }

    return isprocessed;
  };

  function handlesubmit(e) {
    if (ISValidate()) {
      e.preventDefault();

      axios
        .post("http://localhost:3001/user/register", {
          username: name,
          email: email,
          password: password,
          phoneNumber: number,
          role: role,
        })
        .then(function (response) {
          console.log(response);
          toast.success("registartion successfully");
          usenavigate("/login");
        })
        .catch(function (error) {
          console.log(error);
          toast.error("failed registration");
        });
    }
  }

  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_side" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8">Sign up</h3>
            <Form onSubmit={handlesubmit}>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="mb-3 mt-3"
                  value={name}
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="mb-3"
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="mb-3"
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  className="mb-3"
                  value={number}
                  type="number"
                  placeholder="Phone number"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  className="mb-3"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  type="text"
                  value={role}
                  placeholder="Role"
                />
              </Form.Group>

              <Button className="col-lg-8" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              {" "}
              Already have an Account?
              <span>
                &nbsp; <a hreft="/">Signin</a>
              </span>
            </p>
          </div>
          <div className="right_side">
            <div className="image">
              <img src={regimg} alt="image" style={{ maxWidth: 480 }} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
