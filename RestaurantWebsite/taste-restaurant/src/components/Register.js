import React, { useState } from 'react' 
import { Link } from 'react-router-dom' 
//import {useHistory} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

function Register(){

  const [customerName, setCustomerName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  //const history = useHistory();


  async function signUp()
  {
    let item = {customerName,email,password,confirmPassword,address,phoneNumber}
    console.warn(item)

    let result = await fetch("http://localhost:36540/api/Customer",{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json, charset=UTF-8',
        'Accept': 'application/json, text/plain, */*'
      }
    })

    result = await result.json()
    console.warn("result", result)
    // localStorage.setItem("user-info", JSON.stringify(result))
    // history.push('/account')
  }

    
  return ( 
     <div className="container" style={{backgroundColor:'white', borderRadius: '8px', marginLeft: '-30%', marginTop: '10%', width: '50vw', height: '65vh', padding: '0px 50px' }}>  
        <Link to={'/'}><div style={{color:'green', fontSize: '35px', fontWeight: '600', textAlign: 'right', padding: '15px', cursor: 'pointer'}}>x</div> </Link>
        
          <div className="card o-hidden border-0 shadow-lg my-5" style={{ marginTop: '12%'}}>  
            <div className="card-body p-0">  
              <div className="row">  
                <div className="col-lg-12">  
                  <div className="p-5">  
                    <div className="text-center">  
                      <h1 className="h4 text-gray-900 mb-4" style={{marginBottom: '8%', fontSize: '30px'}} >LET'S CREATE YOUR ACCOUNT!</h1>  
                    </div>  
                    <form className="user" style={{margin: '3%'}}>  
                      <div className="form-group row">

                      <div className= 'row' style={{marginBottom: '3%'}}>
                        <div className="col-sm-6 mb-3 mb-sm-0">  
                          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />  
                        </div> 
                        <div className="col-sm-6">  
                          <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"placeholder="Password" />  
                        </div>  
                      </div> 
                    <div className= 'row' style={{marginBottom: '3%'}}>
                      <div className="col-sm-6">  
                        <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} className="form-control" placeholder="Username" />   
                      </div>
                        <div className="col-sm-6">  
                          <input type="Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm password" />  
                        </div>
                    </div>
                      
                      <div className= 'row'style={{marginBottom: '7%'}}>
                      <div className="col-sm-6 mb-3 mb-sm-0">  
                          <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Address" />  
                        </div>  
                        <div className="col-sm-6">  
                          <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control" placeholder="Phone number" />  
                        </div>
                      </div>
                    </div>  
                    
                    <div className='row' style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2%'}}>
                    <Router>
                    <div className="col-sm-3">
                    <Link to={''}  onClick= {signUp} type="submit" className="btn btn-success  btn-block" style={{backgroundColor: 'green'}}><span>Sign Up</span></Link>
                    </div>
                     
                    <div className="col-sm-3">
                    <Link to={''} type="cancel" className="btn btn-success  btn-block" style={{backgroundColor: 'green'}}><span>Cancel</span></Link>
                    </div>
                    </Router>
                    </div> 
                  </form> 
                  </div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div> 
      )  
}  
      
    export default Register;