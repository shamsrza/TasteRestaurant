import React, { useState} from 'react'  
import { Redirect } from 'react-router-dom'; 
//import axios from 'axios'
//import Account from "./Account"
//import {} from 'bootstrap/dist/css/bootstrap.css';

const Login = (props) =>{

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

   const pname = props.name;

   const setName = ({ pname }) => console.log(props.name);

  const handleSubmit = async (e) =>
  {
      e.preventDefault();
      const response = await fetch("http://localhost:36540/api/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      }) 
    })

     const content = await response.json();

    setRedirect(true);
    props.setName(content.name);
  }

  if(redirect){
    return <Redirect to = "/" />
  }

  return ( 
  <form onSubmit={handleSubmit} id="sign">    
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input type="email" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)} />

      <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
     
     <button type="submit" className="w-100 btn btn-lg btn-primary"> Sign in</button>
  </form>
  );
};
  
export default Login;  