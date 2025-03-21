import React from 'react';
import { Element } from 'react-scroll';
 import skillingImage from '../../assets/skilling.png';
import { LinearProgress } from '@mui/material';
import './SkillContainer.css'

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillcontainer__image">
      <img src={skillingImage} alt="" />
      </div>
      <div className='skillcontainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillcontainer__skillSet'>
          <h5>HTML</h5>
          <div className='skillcontainer__slider skillcontainer__slider1'>
           <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className='skillcontainer__skillSet'>
          <h5>CSS</h5>
          <div className='skillcontainer__slider skillcontainer__slider2'>
           <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className='skillcontainer__skillSet'>
          <h5>Javascript</h5>
          <div className='skillcontainer__slider skillcontainer__slider3'>
           <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className='skillcontainer__skillSet'>
          <h5>React</h5>
          <div className='skillcontainer__slider skillcontainer__slider4'>
           <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className='skillcontainer__skillSet'>
          <h5>NodeJS</h5>
          <div className='skillcontainer__slider skillcontainer__slider5'>
           <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className='skillcontainer__skillSet'>
          <h5>Mongo DB</h5>
          <div className='skillcontainer__slider skillcontainer__slider6'>
           <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
