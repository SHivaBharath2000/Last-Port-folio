import React from 'react'
import { Link } from 'react-scroll'
import "./topcontent.css"

export default function Topcontent() {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Mr Sivabharath</h1>
            <p>Professional Web and App Developer</p>
            <a href='https://drive.google.com/file/d/13LmQ9Aj_3PxaN5bGUKNzaj_8S9vJkyBR/view' target="_blank">
                <button className='topcontent__download'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
              <button className='topcontent__workbutton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}
