import React, { useState} from 'react'  
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
//  import Login from "../pages/Login"  
//  import Register from "../pages/Register"
import history from '../history';

const Navbar = (props) => {

const pname = props.name;
const setName = ({pname}) => console.log(props.name);
const [clicked, setClicked] = useState(false);
  
const handleLogout = async () => {
    await fetch ("http://localhost:36540/api/auth/logout", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    });
  //const {push} = useHistory();


    props.setName("");
    //push("/login");
    history.push('/login')

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


// const handleClickTest = () => {
//   console.log(props.name);
// }

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
const token = localStorage.getItem('token') || sessionStorage.getItem("token")

  return ( 
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/* <button onClick={handleClickTest}>test</button> */}
        <div className="container" style={{width: '100%'}}>

          {/* Brand and toggle get grouped for better mobile display */}
        <Router>
          <div className="navbar-header">
            <a href="/" className="navbar-brand page-scroll">Taste</a>
            <div onClick= {handleClick} className="navbar-toggle">
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className = {clicked ? 'nav-menu-mobile' : 'nav-menu'} id="bs-example-navbar-collapse-1">
            <ul>
              <li><a href="http://localhost:3000/#about" className="page-scroll nav-links">About</a></li>
              <li><a href="http://localhost:3000/#restaurant-menu" className="page-scroll nav-links">Menu</a></li>
              <li><a href="http://localhost:3000/#portfolio" className="page-scroll nav-links">Gallery</a></li>
              <li><Link to= {token ? "/reservation" : "/login"}className="page-scroll nav-links">Reservation</Link></li>
              <li><a href ="/makeorder" className="page-scroll nav-links">Make An Order</a></li>
              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name ? props.name : "Account"}</Link>
                <div className="dropdown-content">
                { dropdownmenu }
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
              <li><a href="/reservation" className="page-scroll nav-links">Reservation</a></li>
              <li><a href ="/makeorder" className="page-scroll nav-links">Make An Order</a></li>
              <li className="dropdown">
              <Link to="" className="page-scroll">{props.name !== "" ? props.name : "Account"}</Link>
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
