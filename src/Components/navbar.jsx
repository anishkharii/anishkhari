import React, { useEffect } from "react";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import WorkIcon from "@mui/icons-material/Work";
import QrCodeIcon from "@mui/icons-material/QrCode";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavbar } from "../Contexts/navbarContext";
import { useTheme } from "../Contexts/themeContext";
const NavBar = (props)=>{
    const {activeMenu, handleActiveMenu} = useNavbar();
    const {theme, toggleTheme} = useTheme();
    useEffect(()=>{
      if(props.active){
        handleActiveMenu(props.active);
      }
    },[])
    return (
        <>
            <div className="navbar">
          <ul className="navbar-top">
            <li className={`navbar-link ${activeMenu === "about-me" ? "navbar-link-active" : ""}`} onClick={() => handleActiveMenu("about-me")}>
              <Person2RoundedIcon />
              <span>About Me</span>
            </li>
            <li className={`navbar-link ${activeMenu === "skills" ? "navbar-link-active" : ""}`} onClick={() => handleActiveMenu("skills")}>
              <SportsMartialArtsIcon />
              <span>Skills</span>
            </li>
            <li className={`navbar-link ${activeMenu === "works" ? "navbar-link-active" : ""}`} onClick={() => handleActiveMenu("works")}>
              <WorkIcon />
              <span>Works</span>
            </li>

            <li className={`navbar-link ${activeMenu === "contact" ? "navbar-link-active" : ""}`} onClick={() => handleActiveMenu("contact")}>
              <SendRoundedIcon />
              <span>Contact</span>
            </li>
          </ul>
          <ul className="navbar-bottom">
            <li className="navbar-link" onClick={toggleTheme} onMouseDown={(e) => e.preventDefault()} style={{userSelect: "none"}}>
            {
              theme === "dark" ? (
                <>

                <WbSunnyIcon />
              <span>Light</span>
                </>
              ) : (
                <>
                <DarkModeIcon />
              <span>Dark</span>
                </> 
              )
            }
              
            </li>
            <li className="navbar-link">
              <QrCodeIcon />
              <span>Share</span>
            </li>
          </ul>
        </div>
        </>
    )
}

export default NavBar;