// import React, { useState } from 'react' 
// import { Link } from 'react-router-dom' 
// import {useHistory} from 'react-router-dom'
// //import { BrowserRouter as Router } from 'react-router-dom';
//  import axios from "axios"
//  import history from "react-bootstrap"

// function Register(props){

  //  const [name, setName] = useState("")
  //  const [email, setEmail] = useState("")
  //  const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [address, setAddress] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState("")
 //  const history = useHistory();


//   async function signUp()
//   {
//     let item = {customerName,email,password,confirmPassword,address,phoneNumber}
//     console.warn(item)

//     let {result}= axios.post("http://localhost:36540/api/Customer", item)
    
//     localStorage.setItem("user-info", JSON.stringify(result))
//     history.push('/account')
//   }

    
//   return ( 
//      <div className="container" style={{backgroundColor:'white', borderRadius: '8px', marginLeft: '-30%', marginTop: '10%', width: '50vw', height: '65vh', padding: '0px 50px' }}>  
//         <Link to={'/'}><div style={{color:'green', fontSize: '35px', fontWeight: '600', textAlign: 'right', padding: '15px', cursor: 'pointer'}}>x</div> </Link>
        
//           <div className="card o-hidden border-0 shadow-lg my-5" style={{ marginTop: '12%'}}>  
//             <div className="card-body p-0">  
//               <div className="row">  
//                 <div className="col-lg-12">  
//                   <div className="p-5">  
//                     <div className="text-center">  
//                       <h1 className="h4 text-gray-900 mb-4" style={{marginBottom: '8%', fontSize: '30px'}} >LET'S CREATE YOUR ACCOUNT!</h1>  
//                     </div>  
//                     <form className="user" style={{margin: '3%'}}>  
//                       <div className="form-group row">

//                       <div className= 'row' style={{marginBottom: '3%'}}>
//                         <div className="col-sm-6 mb-3 mb-sm-0">  
//                           <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />  
//                         </div> 
//                         <div className="col-sm-6">  
//                           <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"placeholder="Password" />  
//                         </div>  
//                       </div> 
//                     <div className= 'row' style={{marginBottom: '3%'}}>
//                       <div className="col-sm-6">  
//                         <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} className="form-control" placeholder="Username" />   
//                       </div>
//                         <div className="col-sm-6">  
//                           <input type="Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm password" />  
//                         </div>
//                     </div>
                      
//                       <div className= 'row'style={{marginBottom: '7%'}}>
//                       <div className="col-sm-6 mb-3 mb-sm-0">  
//                           <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Address" />  
//                         </div>  
//                         <div className="col-sm-6">  
//                           <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control" placeholder="Phone number" />  
//                         </div>
//                       </div>
//                     </div>  
                    
//                     <div className='row' style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2%'}}>
                    
//                     <div className="col-sm-3">
//                     <Link to={''}  onClick= {signUp} type="submit" className="btn btn-success  btn-block" style={{backgroundColor: 'green'}}><span>Sign Up</span></Link>
//                     </div>
                     
//                     <div className="col-sm-3">
//                     <Link to={''} type="cancel" className="btn btn-success  btn-block" style={{backgroundColor: 'green'}}><span>Cancel</span></Link>
                    
//                     </div>
//                     </div> 
//                   </form> 
//                   </div>  
//                 </div>  
//               </div>  
//             </div>  
//           </div>  
//         </div> 
//       )  
// }  
      
//     export default Register;


import React, { useState} from 'react'  
import { Redirect } from 'react-router-dom'; 


const Register = () =>{

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);


  const submit = async (e) =>
  {
    e.preventDefault();
    await fetch ("http://localhost:36540/api/register", {
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
    <form onSubmit = {submit}>
    <h1 className="h3 mb-3 fw-normal">Please register</h1>
    
    <input className="form-control" placeholder="Username" required
     onChange={e => setName(e.target.value)}/>

      <input type="email" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)}/>

      <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
     
     <button type="submit" className="w-100 btn btn-lg btn-primary">Submit</button>
  </form>
  );
};
  
export default Register;  