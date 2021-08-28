import React, {useEffect, useState} from 'react'
import Reservation from "./pages/Reservation"  
import Login from "./pages/Login"  
import Home from "./pages/Home" 
import Register from "./pages/Register"
import MakeOrder from "./pages/MakeOrder"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute"
//import history from './history'

function App() {
  const [name, setName] = useState("");
  //const [token, setToken] = useState();


    useEffect(() => {
      (
        async() =>{
          const response = await fetch ("http://localhost:36540/api/auth/user", {
            headers: {"Content-Type": "application/json"},
            credentials: 'include'
          });
          
          // const content = await response.json();
          // setName(content.name)
        }
        )();
        console.log(name);
    })

    // function PrivateRoute({children, ...rest}){
    //   return(
    //     <Route
    //     {...rest}
    //     render={() => {
    //       return localStorage.getItem('token') || sessionStorage.getItem('token') ? (children) : (<Redirect to = "/login" />);
    //     }}
    //     />
    //   );
    // }

    // if(!token) {
    //   return <Login setToken={setToken} />
    // }

  return (
    <>
      <Router> 
      <Navbar name = {name} setName={setName}/>
      <Route path="/" exact component={()=> <Home name={name} />}/>
      {/* <ProtectedRoute path="/reservation">
        <Reservation />
      </ProtectedRoute> */}
      <Route path="/reservation" component={Reservation}/>
      <Route path="/makeorder" component={MakeOrder} />
      <main className="form-signin">
        <Route path="/login" component={()=><Login setName={setName}/>}/>
        <Route path="/register" component={Register}/>
      </main>
      </Router>
    </>
  );
}

export default App;
