import React, { useState } from 'react'   
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 

function Login1(props){
    const [customer, setCustomer] = useState({ Email: '', Password: ''});  
    const apiUrl = "http://localhost:44397/api/Account/Login";
    const Login = (e) => {    
        e.preventDefault();
        debugger;
        const data = { Email:customer.Email, Password: customer.Password };
        axios.post(apiUrl, data)
        .then((result) => {    
            debugger;  
            console.log(result.data);   
            const serializedState = JSON.stringify(result.data.UserDetails);  
           var a = localStorage.setItem('myData', serializedState);   
            console.log("A:", a)  
            //const user = result.data.UserDetails;  
            console.log(result.data.message);  
            if (result.data.status === '200')    
                props.history.push('/')    
            else    
            alert('Invalid User'); 
          })       
        };  
        const onChange = (e) => {    
            e.persist();    
            debugger;    
            setCustomer({...customer, [e.target.name]: e.target.value});    
          } 

    return (  
    <div className="container" style={{backgroundColor:'white', width: '50vw', height: '65vh', borderRadius: '8px', marginLeft: '-30%', marginTop: '10%', padding: '0px 50px'}}>  
        <div className="row justify-content-center">  
          <div className="col-xl-10 col-lg-12 col-md-9">  
            <div className="card o-hidden border-0 shadow-lg my-5">  
              <div className="card-body p-0">  
                <div className="row">  
                  {/* <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>   */}
                  <Link to={'/'}><div style={{color:'green', fontSize: '35px', fontWeight: '600', textAlign: 'right', padding: '15px 35px', cursor: 'pointer'}}>x</div> </Link>
                  <div className="col-lg-12" style={{width: '100%', marginTop: '10%'}}>  
                    <div className="p-5" style= {{display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center', width: '100%', paddingTop: '6%'}}> 
                      <div className="text-center"> 
                        <h1 className="h4 text-gray-900 mb-4" style={{marginBottom: '15%', fontSize: '30px', marginTop: '0px'}}>WELCOME BACK!</h1>  
                      </div>  
                      <form onSubmit={Login} className="user col-lg-5" style={{marginTop: '3%'}}>  
                        <div className="form-group">  
                          <input type="email" className="form-control" value={customer.Email} onChange={onChange}  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Email"/>  
                        </div>  
                        <div className="form-group" style={{marginTop: '7%'}}>  
                          <input type="password" className="form-control" value={customer.Password} onChange={onChange}  name="Password" id="DepPasswordartment" placeholder="Password"/>  
                       </div>
                        
                        <div style={{marginTop: '15%', display: 'flex', justifyContent:'center', flexDirection: 'row', alignItems: 'center'}}>
                        <button type="submit" className="btn btn-info mb-1 col-lg-6" block style={{marginRight: '7px', backgroundColor: 'green'}}><span>Login</span></button>
                        
                        <Link to={'/'} type="cancel" className="btn btn-info mb-1 col-lg-6" block style={{backgroundColor: 'green'}}><span>Cancel</span></Link> 
                        </div>
                      </form>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login1;  