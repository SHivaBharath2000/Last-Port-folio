import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import "./Experiencecontainer.css"
function Experiencecontainer() {
  return (
    <Element className='experiencecontainer' id="exp">
        <h1>Experience</h1>
        <div className='experienceaInfo'>
            <ExperienceBox number="2Years" title ="trainee developer"/>
            <ExperienceBox number="4+Projects" title =" No code platform" style={{backgroundColor:"#f64C08"}}/>
            <ExperienceBox number="2+Projects" title ="Front end development"/>
            <ExperienceBox number="2+Projects" title ="Full stack development"/>
        </div>
    </Element>
  )
}

export default Experiencecontainer