import React, {useEffect, useState} from 'react'
import MakeReservation from "./pages/MakeReservation"  
import Login from "./pages/Login"  
import Home from "./pages/Home" 
import Register from "./pages/Register"
import MakeOrder from "./pages/MakeOrder"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute"
//import history from './history'

function App(props) {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");


  useEffect(() => {
    (
      async() =>{
        const response = await fetch ("http://localhost:36540/api/auth/user", {
          headers: {"Content-Type": "application/json; charset=utf-8"},
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
      <Navbar name = {name} setName={setName}/>
      <Route path="/" exact component={()=> <Home name={name} />}/>
      {/* <ProtectedRoute path="/reservation">
        <Reservation />
      </ProtectedRoute> */}
      <ProtectedRoute path="/reservation">{(props.name !== "" && (props.token !== "" || props.token != undefined)) ? <MakeReservation setName={setName} /> : <Redirect to= "/login"/>}</ProtectedRoute>
      <ProtectedRoute path="/makeorder">{(props.name !== "" && (props.token !== "" || props.token != undefined)) ? <MakeOrder setName={setName} /> : <Redirect to= "/login"/>}</ProtectedRoute>
       {/* <Route path="/makeorder" component={props.token !== "" ? MakeOrder : Login}/> */}
      <main className="form-signin">
        <Route path="/login" component={()=><Login setName={setName}/>}/>
        <Route path="/register" component={Register}/>  
      </main>
    </>
  );
}

export default App;
