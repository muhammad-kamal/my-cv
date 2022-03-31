import React, { useState, useEffect } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./_contact.css";
import "animate.css";

function Contact() {
  const [val, setVal] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 2100) {
      setVal(true);
    }
  });

  useEffect(() => {
    if (val) {
      document.getElementById("TL").classList.add("animate__zoomInLeft");
      document.getElementById("TR").classList.add("animate__zoomInRight");
      document.getElementById("BL").classList.add("animate__zoomInUp");
      document.getElementById("BR").classList.add("animate__zoomInUp");
      document.getElementById("Licons").classList.add("animate__wobble");
    }
  }, [val]);

  return (
    <div id="Contact" className="contact">
      <div className="h1 fitContent  title">CONTACT</div>
      <div className="container d-flex justify-content-center flex-wrap">
        <div id="TL" className="keepIn fw-bold animate__animated animate__slow">
          KEEP IN TOUCH
        </div>
        <div
          id="TR"
          className="contactInfo lead animate__animated  animate__slow"
        >
          <div className="d-flex">
            <HomeIcon className="contacticon" />
            <div className="p-2">Address : Damascus - Elzahera Eljadeda</div>
          </div>
          <div className="d-flex">
           <LocalPhoneIcon className="contacticon" />
            <div className="p-2">PHONE : +963941837617</div>
          </div>
          <div className="d-flex">
            <MailIcon className="contacticon" />
            <div className="p-2">Email : Muhammad.Kamal.RA@gmail.com</div>
          </div>
        </div>
        <div
          id="BL"
          className="contactSend m-3 animate__animated  animate__slow"
        >
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your E-mail Adress" />
            <input type="text" placeholder="Subject" />
          </form>
        </div>
        <div
          id="BR"
          className="contactMsg m-3 animate__animated  animate__slow"
        >
          <form>
            <input type="text" placeholder="Please type your text" />
            <input type="button" className="fw-bold" value="SEND" />
          </form>
        </div>
        <div className="contactLinks d-flex justify-content-center">
          <ul id="Licons" className="list-unstyled d-flex animate__animated ">
            <li>
              <a href="https://www.linkedin.com/in/muhammad-kamal-al-quwatli-3b6111226/">
                  <LinkedInIcon className="last" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mhamad.kamal.980/">
                <FacebookOutlinedIcon className="last" />
              </a>
            </li>
            <li>
              <a href=" https://github.com/muhammad-kamal/My-Projects">
              <GitHubIcon className="last" />
              </a>
            </li>
            <li>
              <a href="mailto : Muhammad.Kamal.RA@gmail.com">
                 <MailIcon className="last" />
              </a>
            </li>
          </ul>
        </div>
        <div className="allrights">
          POWERED BY <span>KAMAL</span> WITH ALL LOVE
        </div>
      </div>
    </div>
  );
}

export default Contact;
