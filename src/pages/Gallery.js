import React from "react";
import "../Gallery.css";
import logo from "../img/amiphoriyalogo.png";
import EV1 from "../img/E1.jpg";
import EV2 from "../img/E2.jpg";
import EV3 from "../img/E3.jpg";
import EV4 from "../img/E4.jpg";
import EV5 from "../img/E5.jpg";

const Gallery = () => {
  return (
    <div className="Gallery">
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
      <div className="Galleryimgs">
        <img className="Galleryimg" src={EV1} alt="img" />
        <img className="Galleryimg" src={EV2} alt="img" />
        <img className="Galleryimg" src={EV3} alt="img" />
        <img className="Galleryimg" src={EV4} alt="img" />
        <img className="Galleryimg" src={EV5} alt="img" />
      </div>
      <p className="Gallerycopyright">Copyright © 2024 Purezza Technology</p>
    </div>
  );
};

export default Gallery;
