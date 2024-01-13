import React from "react";
import "../Client.css";
import logo from "../img/amiphoriyalogo.png";
import C1 from "../img/client1.png";
import C2 from "../img/client2.png";
import C3 from "../img/client3.png";
import C4 from "../img/client4.png";
import C5 from "../img/client5.png";
import C6 from "../img/client6.png";
import C7 from "../img/client7.png";
import C8 from "../img/client8.png";
import C9 from "../img/client9.png";

const Clients = () => {
  return (
    <div className="clintmain">
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
      <div className="clientintro">
        <h1 className="clienthead">Our Clients...</h1>
      </div>
      <div className="clients">
        <img className="client" src={C1} alt="img" />
        <img className="client" src={C2} alt="img" />
        <img className="client" src={C3} alt="img" />
        <img className="client" src={C4} alt="img" />
        <img className="client" src={C5} alt="img" />
        <img className="client" src={C6} alt="img" />
        <img className="client" src={C7} alt="img" />
        <img className="client" src={C8} alt="img" />
        <img className="client" src={C9} alt="img" />
      </div>
      <p className="clientcopyright">Copyright © 2024 Purezza Technology</p>
    </div>
  );
};

export default Clients;
