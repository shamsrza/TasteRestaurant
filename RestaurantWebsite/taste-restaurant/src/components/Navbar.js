import React, { useState, useEffect } from 'react'  
import { BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom';
//import MakeOrder from "../pages/MakeOrder" 
//  import Register from "../pages/Register"
import history from '../history';


const Navbar = (props) => {

const [clicked, setClicked] = useState(false);

const {push} = useHistory();
const handleLogout = async () => {
  await fetch ("http://localhost:36540/api/auth/logout", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    credentials: 'include'
  });
//const {push} = useHistory();
window.localStorage.clear();

  props.setName("");
  //push("/login");
  
  push('/login')

}

const handleClick = () =>{
setClicked(!clicked)
}


  let dropdownmenu = (
    <ul>
      <li>
        <a href="/login" className="page-scroll" onClick={() => history.push('/login')}>Login</a>
      </li>
      <li>
        <a href="/register" className="page-scroll" onClick={() => history.push('/register')}>Sign Up</a>
      </li>
    </ul>
    )
    
    if(props.name !== "")
    {
      dropdownmenu = (
      <ul>
        <li>
          <Link to="/" className="page-scroll" onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
      )
    }

    const handleMakeOrder = (e)=>{
      push(props.name !== "" ? "/makeorder" : "/login");
      e.preventDefault();
    }

    const handleReservation = (e)=>{
      push(props.name !== "" ? "/reservation" : "/login");
      e.preventDefault();
    }

    // const handleAbout = (e)=>{
    //   // push("#about");
    //   //<Redirect to="http://localhost:3000/#about"/>;
    //   e.preventDefault();
    // }

    // const handleGallery = (e)=>{
    //   <Redirect to="#portfolio"/>;
    //   e.preventDefault();
    // }

    // const handleRestMenu = (e)=>{
    //   push("#restaurant-menu");
    //   e.preventDefault();
    // }

    // const handleAuthMenu = () =>{
    //   if(props.name !== ""){
    //     if(props.token !== "undefined" || props.token !== ""){
    //       return props.name;
    //     }
    //     else{
    //       return "Account";
    //     } 
    //   }
    //   else{
    //     return "Account";
    //   }
    // }
   
    
  return ( 
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/* <button onClick={handleClickTest}>test</button> */}
        <div className="container" style={{width: '100%'}}>
        <a href="/" className="navbar-brand page-scroll">Taste</a>
          {/* Brand and toggle get grouped for better mobile display */}
          {/* <div className="navbar-header">
            <div onClick= {handleClick} className="navbar-toggle">
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <Router>
            <div className = {clicked ? 'nav-menu-mobile' : 'nav-menu'} id="bs-example-navbar-collapse-1">
            <ul>
              <li><a href="http://localhost:3000/#about" className="page-scroll nav-links">About</a></li>
              <li><a href="http://localhost:3000/#restaurant-menu" className="page-scroll nav-links">Menu</a></li>
              <li><a href="http://localhost:3000/#portfolio" className="page-scroll nav-links">Gallery</a></li>
              <li><Link to= {props.token ? "/reservation" : "/login"}className="page-scroll nav-links">Reservation</Link></li>
              <li><Link to = {props.name !== "" ? "/makeorder" : "/login"} className="page-scroll nav-links" onClick={handleMakeOrder} >Make An Order</Link></li>
              <li className="dropdown">
              <Link to="" className="page-scroll">{(props.name !== "") ? props.name : "Account" }</Link>
                <div className="dropdown-content">
                { dropdownmenu }
                </div>
             </li>
            </ul>
          </div>
          </Router>  
          </div> */}
        
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right" style={{ width: '60%'}}>
            <Router>
              <li><a href="http://localhost:3000/#about" className="page-scroll">About</a></li>
              <li><a href="http://localhost:3000/#restaurant-menu" className="page-scroll">Menu</a></li>
              <li><a href="http://localhost:3000/#portfolio" className="page-scroll">Gallery</a></li>
              <li><a href={(props.name !== "" && props.token !=="" ) ? "/reservation" : "/login"} className="page-scroll nav-links" onClick={handleReservation}>Reservation</a></li>
              <li><a href={(props.name !== "" && props.token !== "" ) ? "/makeorder" : "/login"} className="page-scroll nav-links" onClick={handleMakeOrder} >Make An Order</a></li>
              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name !== "" ? props.name : "Account"} </Link>
              <div className="dropdown-content">
              {dropdownmenu}
              </div>
             </li>
            </Router>
            </ul>
          </div>
        </div>
      </nav>
  )
}  
  
export default Navbar;  
