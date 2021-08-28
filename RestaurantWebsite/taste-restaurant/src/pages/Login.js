import React, { useState, useEffect } from "react";
import { Redirect, Link,useHistory } from "react-router-dom";
//import axios from 'axios'
//import Account from "./Account"
//import {} from 'bootstrap/dist/css/bootstrap.css';

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [test, setTest] = useState("");

  //const pname = props.name;

  const {push} = useHistory();

  useEffect(() => {
      props.setName(test)
      if(test !== ""){
        push("/");
      }
  }, [test])

  

  // const setName = ({ pname }) => console.log(props.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:36540/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const user = await fetch("http://localhost:36540/api/auth/user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then(response => response.json()).then(data => setTest(data.name));
    // const content = await response.json();
    // props.setName(content.name);
  };

  return (
    <div
      className="container"
      style={{
        height: "100%",
        width: "100%",
        marginTop: "50%",
        marginLeft: "-40%",
      }}
    >
      <div
        className="row"
        style={{
          border: "1px solid green",
          width: "500px",
          borderRadius: "3%",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ margin: "100px", width: "60%", textAlign: "center" }}
        >
          <h1 className="h3 mb-3 fw-normal" style={{ marginBottom: "50px" }}>
            Welcome back
          </h1>

          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "20px" }}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "30px" }}
          />

          <button
            type="submit"
            className="w-100 btn btn-lg btn-primary"
            style={{
              backgroundColor: "green",
              border: "none",
              marginRight: "15px",
            }}
          >
            {" "}
            Sign in
          </button>
          <Link
            to="/"
            className="w-100 btn btn-lg btn-primary"
            style={{ backgroundColor: "green", border: "none" }}
          >
            {" "}
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
