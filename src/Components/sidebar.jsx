import React from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EventIcon from "@mui/icons-material/Event";
import DownloadIcon from "@mui/icons-material/Download";
const SideBar = ()=>{

    const downloadPDF = ()=>{
        const link = document.createElement("a");
        link.href = "../assets/resume.pdf";
        link.download = "../assets/resume.pdf";
        link.click();
    }

    return(
        <>
            <div className="side-bar">
          <div className="main-info">
            <img src="./images/profile-img.jpg" className="profile-photo" />
            <h2 className="name">Anish Khari</h2>
            <span>Full Stack Developer</span>
            <div className="social-links">
              <a target="_blank" href="https://github.com/anishkharii">
                <GitHubIcon />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/anish-khari-992207247">
                <LinkedInIcon />
              </a>
              <a target="_blank" href="https://twitter.com/AnishKhari">
                <XIcon />
              </a>
              <a target="_blank" href="https://www.instagram.com/anish_khari_">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-block">
              <PhoneIphoneIcon
                sx={{ color: "#DB1616" }}
                className="contact-icon"
              />
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 8818046946</p>
              </div>
            </div>
            <div className="contact-block" onClick={() => window.open("mailto:anishkhari91@gmail.com")}>
              <MailIcon sx={{ color: "#5FCDEB" }} className="contact-icon" />
              <div className="contact-text">
                <h3>Email</h3>
                <p>anishkhari91@gmail.com</p>
              </div>
            </div>
            <div className="contact-block">
              <PinDropIcon sx={{ color: "#F66712" }} className="contact-icon" />
              <div className="contact-text">
                <h3>Address</h3>
                <p>Haryana, India</p>
              </div>
            </div>
            <div className="contact-block">
              <EventIcon sx={{ color: "#DB1680" }} className="contact-icon" />
              <div className="contact-text">
                <h3>Date of Birth</h3>
                <p>08 Dec 2002</p>
              </div>
            </div>
          </div>
          <button className="download-btn" onClick={downloadPDF}>
            <span>Download CV</span>
            <DownloadIcon />
          </button>
        </div>
        </>
    )
}

export default SideBar;