// import './App.css';
import React from 'react';
//import Modal from './components/Modal';
import about from "./img/about.jpg";
import port1 from "./img/portfolio/01-small.jpg";
import port2 from "./img/portfolio/02-small.jpg";
import port3 from "./img/portfolio/03-small.jpg";
import port4 from "./img/portfolio/04-small.jpg";
import port5 from "./img/portfolio/05-small.jpg";
import port6 from "./img/portfolio/06-small.jpg";
import port7 from "./img/portfolio/07-small.jpg";
import port8 from "./img/portfolio/08-small.jpg";
import port9 from "./img/portfolio/09-small.jpg";
import port10 from "./img/portfolio/10-small.jpg";
import port11 from "./img/portfolio/11-small.jpg";
import port12 from "./img/portfolio/12-small.jpg";
import Login from "./components/Login";  
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App(closeModal) {

  return (
    <>
      {/* <!-- Navigation--> */}
      <div id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container" style={{width: '100%'}}>
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span> <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">Taste</a>
          </div>
  
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right" style={{ width: '60%'}}>
            <Router> 
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#restaurant-menu" className="page-scroll">Menu</a></li>
              <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
              <li><a href="#team" className="page-scroll">Reservation</a></li>
              <li><a href="#order" className="page-scroll">Make An Order</a></li>
              <li><Link to={'/Login'} className="page-scroll">Login</Link></li>
              <li><Link to={'/Register'} className="page-scroll">Sign Up</Link></li>
              <Switch>
                <Route path='/Login' component={Login} />
                <Route path='/Register' component={Register} />
              </Switch>
              {/* <Switch>
                <Route path='/Dashboard' component={Dashboard} />
              </Switch>   */}
              {/* <li> <a onClick={() => {setOpenModal(true);}} className="page-scroll" style={{cursor: 'pointer'}}> Sign In</a> </li> */}
              {/* {openModal &&  <AppContainer><AccountBox closeModal={setOpenModal}/><GlobalStyle /></AppContainer>} */}
              </Router> 
            </ul>
            
          </div>
        </div>
      </div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Taste</h1>
                  <p>Restaurant / Coffee / Pub</p>
                  <a href="#team" className="btn btn-lg page-scroll" style={{backgroundColor: 'green', color: 'white', padding: '12px 30px'}}
                    >Reservation</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About Section --> */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-img">
                <img src={about} className="img-responsive" alt= ""/>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Our Restaurant</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
                  bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam
                  commodo nibh.
                </p>
                <h3>Awarded Chefs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
                  bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Restaurant Menu Section --> */}
      <div id="restaurant-menu">
        <div className="section-title text-center center">
          <div className="overlay">
            <h2>Menu</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">Breakfast & Starters</h2>
                <hr />
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$35</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">Main Course</h2>
                <hr />
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$45</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">Dinner</h2>
                <hr />
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$45</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$350</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam..
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">Coffee & Drinks</h2>
                <hr />
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$35</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">Delicious Dish</div>
                  <div className="menu-item-price">$30</div>
                  <div className="menu-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                    sed dapibus leo nec ornare diam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Section --> */}
      <div id="portfolio">
        <div className="section-title text-center center">
          <div className="overlay">
            <h2>Gallery</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.
            </p>
          </div>
        </div>
        <div className="container">
          {/* <div className="row">
            <div className="categories">
              <ul className="cat">
                <li>
                  <ol className="type">
                    <li><a href="#" data-filter="*" className="active">All</a></li>
                    <li><a href="#" data-filter=".breakfast">Breakfast</a></li>
                    <li><a href="#" data-filter=".lunch">Lunch</a></li>
                    <li><a href="#" data-filter=".dinner">Dinner</a></li>
                  </ol>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div> */}
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/01-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port1}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 dinner">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/02-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port2}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/03-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port3}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/04-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port4}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 dinner">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/05-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port5}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 lunch">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/06-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port6}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 lunch">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/07-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port7}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/08-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port8}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 dinner">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/09-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port9}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 lunch">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/10-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port10}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 lunch">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/11-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port11}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="./img/portfolio/12-large.jpg"
                      title="Dish Name"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dish Name</h4>
                      </div>
                      <img
                        src={port12}
                        className="img-responsive"
                        alt="Project Title"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reservation Section --> */}
      <div id="team" className="text-center">
        <div className="overlay">
          <div className="container" id="reservation-form">
            <div className="col-lg-6">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6><span>Contact Us</span></h6>
                  <h2>
                    Here You Can Make A Reservation Or Just walkin to our cafe
                  </h2>
                </div>
                <p>
                  Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
                  eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
                  porta ut.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-phone"></i>
                      <h4>Phone Numbers</h4>
                      {/* <span
                        ><a href="#"> 080-090-0990</a>
                        <br />
                        <a href="#">080-090-0880</a>
                      </span> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="message">
                      <i className="fa fa-envelope"></i>
                      <h4>Emails</h4>
                      {/* <span
                        ><a href="#">hello@company.com</a><br /><a href="#"
                          >info@company.com</a
                        ></span
                      > */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Table Reservation</h4>
                      <p style={{color: 'black', paddingBottom: '15px', fontSize: '12px', fontWeight:'800', fontStyle: 'italic' }}>Before setting reservation please make sure that you signed in.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Customer's Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Reservation Number"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="text"
                          id="phone"
                          placeholder="Phone Number*"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <select
                          defaultValue="number-guests"
                          name="number-guests"
                          id="number-guests"
                        >
                          <option defaultValue="number-guests">Number Of Guests</option>
                          <option name="1" id="1">1</option>
                          <option name="2" id="2">2</option>
                          <option name="3" id="3">3</option>
                          <option name="4" id="4">4</option>
                          <option name="5" id="5">4+</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                            name="date"
                            id="date"
                            type="date"
                            className="form-control"
                            placeholder="Choose time"
                          />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                        name="time"
                        id="time"
                        type="time"
                        className="form-control"
                      />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button-icon"
                        >
                          Make A Reservation
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Order Section --> */}
      <div id="order" className="text-center">
        <div className="container">
          <div className="section-title text-center">
            <h2>Make an Order</h2>
            <hr />
            <p>
              Before setting order please make sure that you signed in.
            </p>
          </div>
        </div>
      </div>
  
      {/* <!-- Footer --> */}
      <div id="footer">
        <div className="container text-center" style={{paddingBottom: '50px'}}>
          <div className="col-md-4">
            <h3>Address</h3>
            <div className="contact-item">
              <p>4321 California St,</p>
              <p>San Francisco, CA 12345</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Opening Hours</h3>
            <div className="contact-item">
              <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
              <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Social Media</h3>
            <ul style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Router>
              <li style={{padding: '0 10px'}}>
              <Link to={'https://www.facebook.com/'}>
                <i className="fa fa-facebook"></i>
              </Link>
              </li>
              
              <li style={{padding: '0 10px'}}>
              <Link to={'https://www.twitter.com/'}>
                <i className="fa fa-twitter"></i>
              </Link>  
              </li>
              <li style={{padding: '0 10px'}}>
              <Link to={'https://www.gmail.com/'}>
                <i className="fa fa-google-plus"></i>
              </Link>
              </li>
              </Router>
            </ul>
            <div>
              <p>&copy; 2021 Taste. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
