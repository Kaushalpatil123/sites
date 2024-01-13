import React from "react";
import "../Services.css";
import logo from "../img/amiphoriyalogo.png";
import WebD from "../img/WebDevelopment.jpg";
import GraphicsD from "../img/GraphicsDesigning.jpg";
import digitalmarketing from "../img/digitalmarketing.jpg";
import Devops from "../img/Devops.png";
import Vapt from "../img/VAPT.jpg";
import CloudDigitalServices from "../img/CloudDigitalServices.jpg";
import Arrow from "../img/arrow.png";

const Services = () => {
  return (
    <div className="mainservice">
      <div className="service">
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
      </div>
      <div className="servicesintro">
        <span>What do we offer?</span>
        <h1 className="servicehead">Our Services</h1>
        <span>DISCOVER BELOW</span>
      </div>
      <div className="servicesbox">
        <div className="serviceimg">
          <img className="servicelogo" src={WebD} alt="img" />
        </div>
        <div className="description">
          <h5>Website Development</h5>
          <div className="servicepara">
            <p>
              At Purezza Technologies, we are your trusted partners in crafting
              exceptional websites. Our friendly team of experts combines
              technical prowess with creative flair to deliver personalized web
              solutions tailored to your unique needs. With our unwavering
              commitment to quality and customer satisfaction, you can trust us
              to bring your digital vision to life. Let’s collaborate and create
              a website that reflects your brand, engages your audience, and
              drives remarkable success online. Get ready to embark on an
              exciting journey with Purezza Technologies – your digital success
              starts here
            </p>
          </div>

          <a href="/Contact">
            <button className="contactbtn">
              <img className="arrow" src={Arrow} alt="" />
              CONTACT US
            </button>
          </a>
        </div>
      </div>

      <div className="servicesbox">
        <div className="description">
          <h5 className="h52">Graphics Designing</h5>
          <div className="servicepara2">
            <p>
              Purezza Technologies: Your trusted partner for captivating graphic
              designs. Our friendly team of talented designers brings your brand
              to life with stunning logos, branding materials, and eye-catching
              visuals. With a commitment to excellence and attention to detail,
              we create designs that resonate with your audience and leave a
              lasting impression. Trust us to elevate your brand with our
              creative brilliance. Let’s embark on a design journey together and
              make your visual identity truly shine.
            </p>
          </div>
          <a href="/Contact">
            <button className="contactbtn2">
              <img className="arrow" src={Arrow} alt="" />
              CONTACT US
            </button>
          </a>
        </div>
        <div className="serviceimg">
          <img className="servicelogo" src={GraphicsD} alt="img" />
        </div>
      </div>

      <div className="servicesbox">
        <div className="serviceimg">
          <img className="servicelogo" src={digitalmarketing} alt="img" />
        </div>
        <div className="description">
          <h5>Digital Marketing</h5>
          <div className="servicepara">
            <p>
              Purezza Technologies: Your friendly digital marketing partner you
              can trust. We combine expertise and creativity to drive your
              online success. From SEO and PPC to social media and content
              marketing, we craft strategies tailored to your goals. Let’s
              amplify your brand’s presence and engage your audience together.
              Trust Purezza Technologies to deliver exceptional results and
              guide you towards digital excellence.
            </p>
          </div>
          <a href="/Contact">
            <button className="contactbtn">
              <img className="arrow" src={Arrow} alt="" />
              CONTACT US
            </button>
          </a>
        </div>
      </div>

      <div className="servicesbox">
        <div className="description">
          <h5 className="h52">DevOps</h5>
          <div className="servicepara2">
            <p>
              Your trusted DevOps companion on the path to success. Our friendly
              team of experts embraces collaboration, automation, and continuous
              delivery to optimize your software development. With meticulous
              attention to detail and a commitment to excellence, we streamline
              processes, enhance efficiency, and drive innovation. Trust us to
              empower your organization with the transformative power of DevOps.
              Let’s embark on a journey of continuous improvement together and
              unlock your software’s full potential.
            </p>
          </div>
          <a href="/Contact">
            <button className="contactbtn2">
              <img className="arrow" src={Arrow} alt="" />
              CONTACT US
            </button>
          </a>
        </div>
        <div className="serviceimg">
          <img className="servicelogo" src={Devops} alt="img" />
        </div>
      </div>

      <div className="servicesbox">
        <div className="serviceimg">
          <img className="servicelogo" src={CloudDigitalServices} alt="img" />
        </div>
        <div className="description">
          <h5>Cloud Services</h5>
          <div className="servicepara">
            <p>
              Your reliable cloud services partner you can count on. Our
              friendly team of experts leverages the power of the cloud to
              transform your business. From seamless migration and scalable
              infrastructure to robust security and cost optimization, we
              deliver tailored solutions with your success in mind. Trust
              Purezza Technologies to elevate your operations, enhance
              flexibility, and drive efficiency. Let’s navigate the cloud
              together and unlock the full potential of your business in the
              digital era.
            </p>
          </div>
          <a href="/Contact">
            <button className="contactbtn">
              <img className="arrow" src={Arrow} alt="" />
              CONTACT US
            </button>
          </a>
        </div>
      </div>

      <div className="servicesbox">
        <div className="description">
          <h5 className="h52">VAPT</h5>
          <div className="servicepara2">
            <p>
              Your trusted guardian of digital security. Our friendly team of
              experts conducts thorough Vulnerability Assessment and Penetration
              Testing (VAPT) to safeguard your valuable assets. With meticulous
              attention to detail and a commitment to your peace of mind, we
              identify and mitigate potential vulnerabilities, ensuring the
              resilience of your systems. Trust Purezza Technologies to fortify
              your defenses against potential threats and protect your digital
              realm. Let’s work together to ensure the utmost security and trust
              in your digital infrastructure.
            </p>
          </div>
          <a href="/Contact">
            <button className="contactbtn2">
              <img className="arrow" src={Arrow} alt="" />
              CONTACT US
            </button>
          </a>
        </div>
        <div className="serviceimg">
          <img className="servicelogo" src={Vapt} alt="img" />
        </div>
      </div>
      <p className="servicecopyright">Copyright © 2024 Purezza Technology</p>
    </div>
  );
};

export default Services;
