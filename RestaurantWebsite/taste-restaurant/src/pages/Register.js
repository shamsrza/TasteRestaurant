import React, { useState} from 'react'  
import { Redirect, Link } from 'react-router-dom'; 


const Register = () =>{

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);


  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    await fetch ("http://localhost:36540/api/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    setRedirect(true);
  }

  if(redirect){
    return <Redirect to = "/login" />
  }

  return (
    
<div className ="container" style={{height: "100%", width: "100%", marginTop: "50%", marginLeft: "-40%"}}>
<div className= "row" style={{border: "1px solid green", width: "500px", borderRadius: "3%", }}>
<form onSubmit = {handleSubmit} style={{margin: "100px", width: "60%", textAlign: "center"}}>
    <h1 className="h3 mb-3 fw-normal" style={{marginBottom: "50px"}}>Let's create your profile</h1>
    
    <input className="form-control" placeholder="Username" required
     onChange={e => setName(e.target.value)} style={{marginBottom: "20px"}}/>

      <input type="email" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)} style={{marginBottom: "20px"}}/>

      <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} style={{marginBottom: "30px"}}/>
     
     <button type="submit" className="w-100 btn btn-lg btn-primary" style={{backgroundColor: "green", border: "none", marginRight: "15px"}}>Sign up</button>
     <Link to="/" className="w-100 btn btn-lg btn-primary" style={{backgroundColor: "green", border: "none"}}> Cancel</Link>
  </form>
  </div>
  </div>
  );
};
  
export default Register;  