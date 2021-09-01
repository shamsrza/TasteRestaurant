import React from 'react'
import about from "../img/about.jpg"
import port1 from "../img/portfolio/01-small.jpg"
import port2 from "../img/portfolio/02-small.jpg"
import port3 from "../img/portfolio/03-small.jpg"
import port4 from "../img/portfolio/04-small.jpg"
import port5 from "../img/portfolio/05-small.jpg"
import port6 from "../img/portfolio/06-small.jpg"
import port7 from "../img/portfolio/07-small.jpg"
import port8 from "../img/portfolio/08-small.jpg"
import port9 from "../img/portfolio/09-small.jpg"
import port10 from "../img/portfolio/10-small.jpg"
import port11 from "../img/portfolio/11-small.jpg"
import port12 from "../img/portfolio/12-small.jpg"
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = (props) => {


return ( 
<div>  
   <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Taste</h1>
                  <p>Restaurant / Coffee / Pub</p>
                  <Link to="" className="btn btn-lg page-scroll" style={{backgroundColor: 'green', color: 'white', padding: '12px 30px'}}
                    >Reservation</Link
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
              <li style={{padding: '0 10px', fontSize: "20px"}}>
              <a href= "https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
              </a>
              </li>
              
              <li style={{padding: '0 10px', fontSize: "20px"}}>
              <a href= "https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
              </a>  
              </li>
              <li style={{padding: '0 10px', fontSize: "20px"}}>
              <a href= "https://www.gmail.com/">
              <i className="fab fa-google-plus-g"></i>
              </a>
              </li>
              </Router>
            </ul>
            <div>
              <p>&copy; 2021 Taste. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}  
  
export default Home;  