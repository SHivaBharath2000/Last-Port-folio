import React from 'react'
import {Link} from "react-scroll"

import "./Header.css"
export const Header = () => {
  return (
    <div  className='header'>
        <div className='header__left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header__right'>
             <Link to="about" smooth={true} duration={500}><h3>About me</h3></Link>  
             <Link to="skills" smooth={true} duration={500}><h3>Skills</h3></Link> 
             <Link to="projects" smooth={true} duration={500}><h3>Projects</h3></Link>
             <Link to="exp" smooth={true} duration={500}><h3>Experience</h3></Link>
             <Link to="contact" smooth={true} duration={500}><h3>contact</h3></Link>
             {/* <Link><h3 className='header__rightButton'>Join with me</h3></Link> */}
        </div>
    </div>
  )
}
