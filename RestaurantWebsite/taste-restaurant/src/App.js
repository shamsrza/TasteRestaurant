import React, {useEffect, useState} from 'react'
//import axios from 'axios'; 
// import about from "./img/about.jpg"
// import port1 from "./img/portfolio/01-small.jpg"
// import port2 from "./img/portfolio/02-small.jpg"
// import port3 from "./img/portfolio/03-small.jpg"
// import port4 from "./img/portfolio/04-small.jpg"
// import port5 from "./img/portfolio/05-small.jpg"
// import port6 from "./img/portfolio/06-small.jpg"
// import port7 from "./img/portfolio/07-small.jpg"
// import port8 from "./img/portfolio/08-small.jpg"
// import port9 from "./img/portfolio/09-small.jpg"
// import port10 from "./img/portfolio/10-small.jpg"
// import port11 from "./img/portfolio/11-small.jpg"
// import port12 from "./img/portfolio/12-small.jpg"
import Reservation from "./pages/Reservation"  
import Login from "./pages/Login"  
import Home from "./pages/Home" 
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import history from './history'

function App() {

  const [name, setName] = useState('');
    useEffect(() => {
        (
            async() =>{
               const response = await fetch ("http://localhost:36540/api/auth/user", {
                    headers: {"Content-Type": "application/json"},
                    credentials: 'include'
                });

                const content = await response.json();
                setName(content.name)
            }
        )();
    })

  return (
    <>
      <Router>
      <Navbar name = {name} setName={setName}/>  
      <Route path="/" exact component={()=> <Home name={name} />}/>
      <Route path="/reservation" component={Reservation}/>
      <main className="form-signin">
        <Route path="/login" component={()=> <Login setName={setName}/>}/>
        <Route path="/register" component={Register}/>
      </main>
      </Router>
    </>
  );
}

export default App;
