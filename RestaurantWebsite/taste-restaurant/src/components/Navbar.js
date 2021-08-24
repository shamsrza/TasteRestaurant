import React, { useState} from 'react'  
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
//  import Login from "../pages/Login"  
//  import Register from "../pages/Register"
import history from '../history';



const Navbar = (props) => {

const pname = props.name;
const setName = ({ pname}) => console.log(props.name);
const [clicked, setClicked] = useState(false);
  
const handleLogout = async ()=> {
    await fetch ("http://localhost:36540/api/auth/logout", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    });

    props.setName("");

    history.push('/login')

}

const handleTaste = () =>{
  <Redirect to = "/" />
}

const handleClick = () =>{
  setClicked(!clicked)
}

const menu1 = (
<ul>
  <li><Link to="/login" className="page-scroll" onClick={() => history.push('/login')}>Login</Link></li>
  <li><Link to="/register" className="page-scroll" onClick={() => history.push('/register')}>Sign Up</Link></li>
</ul>
)

const menu2 = (
  <ul>
    <li>
      <Link to="/" className="page-scroll" onClick={handleLogout}>Logout</Link>
    </li>
  </ul>
)

// if(props.name === ""){
//   options = (
//     <>
//     </>
//   )
// }
// else{
// options = (
//   <ul>
//   <li><Link to="" className="page-scroll nav-links">Reservation</Link></li>
//   <li><a href="#order" className="page-scroll nav-links">Make An Order</a></li>
//   </ul>
// )
// }

  return ( 
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container" style={{width: '100%'}}>

          {/* Brand and toggle get grouped for better mobile display */}
        <Router>
          <div className="navbar-header">
            <Link to="/" onClick= {handleTaste} className="navbar-brand page-scroll">Taste</Link>
            <div onClick= {handleClick} className="navbar-toggle">
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className = {clicked ? 'nav-menu-mobile' : 'nav-menu'} id="bs-example-navbar-collapse-1">
            <ul>
              <li><a href="http://localhost:3000/#about" className="page-scroll nav-links">About</a></li>
              <li><a href="http://localhost:3000/#restaurant-menu" className="page-scroll nav-links">Menu</a></li>
              <li><a href="http://localhost:3000/#portfolio" className="page-scroll nav-links">Gallery</a></li>
              {/* {options} */}
              <li><Link to="" className="page-scroll nav-links">Reservation</Link></li>
              <li><a href="http://localhost:3000/makeorder" className="page-scroll nav-links">Make An Order</a></li>
              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name ? props.name : "Account"}</Link>
                <div className="dropdown-content">
                { props.name !== null ? menu2 : menu1 }
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
              <li><a href="http://localhost:3000/#about" className="page-scroll">About</a></li>
              <li><a href="http://localhost:3000/#restaurant-menu" className="page-scroll">Menu</a></li>
              <li><a href="http://localhost:3000/#portfolio" className="page-scroll">Gallery</a></li>
              <li><Link to="" className="page-scroll">Reservation</Link></li>
              <li><a href="http://localhost:3000/makeorder" className="page-scroll">Make An Order</a></li>
              {/* {options} */}
              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name ? props.name : "Account"}</Link>
              <div className="dropdown-content">
              { props.name !== null ? menu2 : menu1 }
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
