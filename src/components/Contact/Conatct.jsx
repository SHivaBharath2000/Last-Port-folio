import React from "react";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { Element } from "react-scroll";
import "./Contact.css";

function Contact() {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email: <span>sivabharath990@gmail.com</span>
        </p>
        <p>
          Github Username: <span>https://github.com/SHivaBharath2000</span>
        </p>
        <div className="contact__icons">
          <a href="https://www.linkedin.com/in/sivabharath-m-59401523a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedInIcon  style={{ marginRight: "10px",color:"white",cursor:"pointer" }} />
            </IconButton>
          </a>
          <a href="sivabharath990@gmail.com">
            <IconButton>
              <MailIcon style={{ marginRight: "10px", cursor: "pointer"}} />
            </IconButton>
          </a>
          <a href="https://github.com/SHivaBharath2000" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <GitHubIcon style={{ marginRight: "10px" ,cursor:"pointer"}} />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
}

export default Contact;