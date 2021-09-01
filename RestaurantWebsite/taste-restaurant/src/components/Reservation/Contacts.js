import React from 'react'
import { Link } from 'react-router-dom';

export default function Contacts() {
    return (
    <div className="col-lg-12">
      <div className="left-text-content" >
        <div className="section-heading">
          <h6><span>Contact Us</span></h6>
          <h2>Here You Can <br/> Make A Reservation <br/>Or Just walkin to our cafe
          </h2>
        </div>
        <p>
          Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
          eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
          portaut.
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
    )
}
