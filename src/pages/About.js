import React from "react";
import logo from "../img/amiphoriyalogo.png";
import "../Aboutpage.css";
import aboutimg from "../img/aboutimg.jpg";
import M1 from "../img/M1.png";
import M2 from "../img/M2.png";
import M3 from "../img/M3.png";
import M4 from "../img/M4.png";
import M5 from "../img/M1.png";
import M6 from "../img/M2.png";

const About = () => {
  return (
    <div className="aboutpage">
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
      <div className="aboutintro">
        <h1 className="abouthead">Let's know each other.</h1>
        <p className="aboutpara">
          A strong bond is essential before you build a trust over us. So,
        </p>
        <p className="aboutpara">let'sknow each other, better.</p>
      </div>

      <div className="aboutdes">
        <img className="aboutimg" src={aboutimg} alt="img" />
        <div className="aboutparagraph">
          <h6 className="deshead">
            Hello we are,
            <br />
            Purezza technologies.
          </h6>
          <p>
            At Purezza Technologies, we take pride in our extensive experience
            and expertise in the IT field. Our commitment to customer
            satisfaction has earned us a strong reputation and positive reviews
            from our valued clients. We understand the importance of building
            trust, and that's why we prioritize understanding your unique needs
            and delivering tailored solutions. Our team of experts goes the
            extra mile to ensure each project is executed with precision,
            reliability, and excellence.
            <br />
            <br />
            With our finger on the pulse of technology advancements, we provide
            innovative solutions that meet your specific requirements. Our track
            record of success and positive testimonials speak to our dedication
            to delivering exceptional results.
            <br />
            <br />
            When you choose Purezza Technologies as your IT partner, you can
            trust us to deliver professional service, reliability, and
            outstanding solutions. Join the growing number of businesses who
            have placed their trust in us, and experience the peace of mind that
            comes with working with a trusted and dependable IT company.
          </p>
        </div>
      </div>

      <div className="team">
        <h6 className="teamhead">The best team ever!</h6>
        <div className="teammember">
          <div className="member">
            <img src={M1} alt="img" />
            <p className="name">JOHN DOE</p>
            <p className="role">Engineer</p>
          </div>
          <div className="member">
            <img src={M2} alt="img" />
            <p className="name">HISHAM MEGAHED</p>
            <p className="role">Founder</p>
          </div>
          <div className="member">
            <img src={M3} alt="img" />
            <p className="name">BLACK HAMILTON</p>
            <p className="role">Project Manager</p>
          </div>
          <div className="member">
            <img src={M4} alt="img" />
            <p className="name">AHMED SHAWKY</p>
            <p className="role">Web Developer</p>
          </div>
          <div className="member">
            <img src={M5} alt="img" />
            <p className="name">KIARA WEAK</p>
            <p className="role">ASE</p>
          </div>
          <div className="member">
            <img src={M6} alt="img" />
            <p className="name"> KAUSHAL PATIL</p>
            <p className="role">MERN Stack Developer</p>
          </div>
        </div>
      </div>
      <p className="aboutcopyright">Copyright © 2024 Purezza Technology</p>
    </div>
  );
};

export default About;
