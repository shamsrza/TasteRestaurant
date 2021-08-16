import React, {useEffect, useState} from 'react'  
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
 import Login from "../pages/Login"  
 import Register from "../pages/Register"



const Navbar = (props) =>{

const [clicked, setClicked] = useState(false);

const handleClick = () =>{
  setClicked(!clicked)
}
const logout = async ()=> {
    await fetch ("http://localhost:36540/api/logout", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    });
}
// let menuComp ;
// let menuMob;

// if(props.name === "")
// {
//   menuComp = ()
//   menuMob = ()
// }
// else{
// menuComp = ()

// menuMob = ()
// }


  return ( 
    <div id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container" style={{width: '100%'}}>

          {/* Brand and toggle get grouped for better mobile display */}
        <Router>
          <div className="navbar-header">
            <Link to="/" className="navbar-brand page-scroll" href="#page-top">Taste</Link>
            <div onClick= {handleClick} className="navbar-toggle">
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className = {clicked ? 'nav-menu-mobile' : 'nav-menu'} id="bs-example-navbar-collapse-1">
            <ul>
              <li><a href="#about" className="page-scroll nav-links">About</a></li>
              <li><a href="#restaurant-menu" className="page-scroll nav-links">Menu</a></li>
              <li><a href="#portfolio" className="page-scroll nav-links">Gallery</a></li>
              <li><Link to="" className="page-scroll nav-links">Reservation</Link></li>
              <li><a href="#order" className="page-scroll nav-links">Make An Order</a></li>
              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name ? props.name : "Account"}</Link>
                 <div className="dropdown-content">
                   <ul>
                   <li><Link to={'/login'} className="page-scroll">Login</Link></li>
                   <li><Link to={'/register'}className="page-scroll" onClick ={Register}>Sign Up</Link></li>
                   </ul>
                 </div>
              </li>
            </ul>
          </div>
          </div>
        </Router>  
  
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right" style={{ width: '60%'}}>
            <Router>
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#restaurant-menu" className="page-scroll">Menu</a></li>
              <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
              <li><Link to="" className="page-scroll">Reservation</Link></li>
              <li><a href="#order" className="page-scroll">Make An Order</a></li>

              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name ? props.name : "Account"}</Link>
                 <div className="dropdown-content">
                   <ul>
                   <li><Link to={'/login'} className="page-scroll">Login</Link></li>
                   <li><Link to={'/register'} className="page-scroll">Sign Up</Link></li>
                   </ul>
                 </div>
              </li>
              </Router>
            </ul>
          </div>








          
        </div>
      </div>
  )
}  
  
export default Navbar;  
