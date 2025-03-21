import React from 'react'
import { Link } from 'react-scroll'
import image from "../../assets/My photo.jpeg"
import "./topcontent.css"

export default function Topcontent() {
  return (
    <div className='topcontent'>
        <div>
          <section className='topcontent__container'>
            <h1>Mr Sivabharath</h1>
            <h3> Dedicated Professional Web and App Developer with a passion for creating innovative and user-friendly <br/> full stack applications
                With 2 years hands on experiance in web and app development,I bring a unique perspective<br/>  to my work.including a strong foundation in both front-end and back-end development</h3>
            <a href='https://drive.google.com/file/d/13LmQ9Aj_3PxaN5bGUKNzaj_8S9vJkyBR/view' target="_blank">
                <button className='topcontent__download'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
              <button className='topcontent__workbutton'>My Work</button>
            </Link>
            </section>
            <section className='image-section'>
              <img  src={image}></img>
            </section>
        </div>
    </div>
  )
}
