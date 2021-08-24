import React from 'react'
import {Link } from 'react-router-dom';
import Input from "../controls/Input";

function Reservation(){

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [redirect, setRedirect] = useState(false);

  const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

return (

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
              <span
                ><Link to=""> 080-090-0990</Link>
                <br />
                <Link to="">080-090-0880</Link>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="message">
              <i className="fa fa-envelope"></i>
              <h4>Emails</h4>
              <span
                ><Link to=""> hello@company.com</Link>
                <br />
                <Link to=""> info@company.com</Link
                ></span
              >
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
                  value= {generateOrderNumber}
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
                  id="message"
                  placeholder="Message"
                  style={{ height: "70px"}}
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

  )
}

export default Reservation;