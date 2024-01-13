import React from "react";
import logo from "../img/amiphoriyalogo.png";
import "../contact.css";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="nav">
        <div className="img">
          <img src={logo} alt="img" />
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Services">Sevices</a>
            </li>
            <li>
              <a href="/Clients">Clients</a>
            </li>
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contactintro">
        <p className="aboutpara"> Let's Talk</p>
        <h1 className="abouthead">Contact</h1>
      </div>
      <div className="contactform">
        <div className="contactinfo">
          <h5 className="contacthead">Do you want to start yor Project?</h5>
          <p className="contacttime">We are 24 x 7 available for you.</p>
          <br />
          <span className="conatctspan">PHONE :-</span>
          <a className="phone" href="">
            +91 81602 82846
          </a>
          <br />
          <br />
          <span className="conatctspan">EMAIL :-</span>
          <a className="email" href="">
            info@purezzatechnologies.com
          </a>
          <br />
          <br />
          <span className="conatctspan">ADDRESS :-</span>
          <div className="address">
            <p>
              Purezza Technologies, 207, Shivam 1, Amba Business Park, Ahmedabad
              Kalol, Highway, Adalaj, Gujarat 382421
            </p>
          </div>
        </div>
        <div className="form">
          <h5 className="formhead">Write A Comment</h5>
          <input type="text" placeholder="Your Name" />
          <br />
          <input type="text" placeholder="Your Email" />
          <br />
          <input type="text" placeholder="Write your comment" />
          <br />
          <button className="formbtn">SEND MESSAGE</button>
        </div>
      </div>

      <p className="aboutcopyright">Copyright © 2024 Purezza Technology</p>
    </div>
  );
};

export default Contact;
