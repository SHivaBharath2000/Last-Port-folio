import React, { useState } from 'react';
import './project.css';

export default function Project({ img, title, desc, link }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="project"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} />
      </a>
      {show && (
        <div className='project__content'>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
}
