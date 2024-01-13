import React from "react";
import "../Homepage.css";
import logo from "../img/amiphoriyalogo.png";
import facebooklogo from "../img/facebook.png";
import twitterlogo from "../img/twitter.png";
import instalogo from "../img/instagram.png";
import building from "../img/building.png";
import meassage from "../img/message.png";
import phone from "../img/phone.png";

const Homepage = () => {
  return (
    <div>
      <div className="frame1">
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

        <div className="intro">
          <div className="name">
            <h1 className="mainlogo">Purezza</h1>
            <h1 className="mainlogo">Technology</h1>
          </div>

          <div className="para">
            <p>
              Come join us as we celebrate and indulge in the joys of life and
            </p>
            <p>
              competition. This is not just a fest but an expression of
              liveliness
            </p>
            <p>
              and art forms. The biggest celebration of art in Bihar. Amiphoria
            </p>
            <p>
              comes with a promise to break the monotony, to give you an
              <p>
                opportunity to recharge meet and bond with anyone and
                <p>everyone who shares your passion for any kind of art.</p>
              </p>
            </p>
          </div>
          <button className="explorebtn">
            <a href="">Explore</a>
          </button>
        </div>
      </div>
      <div className="frame2">
        <div className="leftbox">
          <h2>Let's keep in touch!</h2>
          <h3>Find more about Purezza on any of these platforms.</h3>
          <div className="logos">
            <div className="sociallogo">
              <a href="">
                <img src={facebooklogo} alt="img" />
              </a>
            </div>
            <div className="sociallogo">
              <a href="">
                <img src={twitterlogo} alt="img" />
              </a>
            </div>
            <div className="sociallogo">
              <a href="">
                <img src={instalogo} alt="img" />
              </a>
            </div>
          </div>
        </div>
        <div className="rightbox">
          <h4>CONTACT</h4>
          <div className="contactbox">
            <img src={building} alt="img" />
            <p>Purezza Technology</p>
          </div>
          <div className="contactbox">
            <img src={meassage} alt="img" />
            <p>info@purezzatechnologies.com</p>
          </div>
          <div className="contactbox">
            <img src={phone} alt="img" />
            <p>+91 81602 82846</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2024 Purezza Technology</p>
    </div>
  );
};

export default Homepage;
