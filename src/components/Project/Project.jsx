import React, { useState } from "react";
import "./Project.css";

export default function Project({ img, title, desc, link, front, back }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="project"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {show ? "" : <img src={img} alt={title} />}
      </a>
      {show && (
        <div className="project__content">
          <h2>{title}</h2>
          <br />
          <p>{desc}</p>
          <div className="project__link">
            <a href={front} target="_blank" rel="noopener noreferrer">
              <button className="project__button">
                <i className="fa-brands fa-github"></i>Front End
              </button>
            </a>
            <a href={back} target="_blank" rel="noopener noreferrer">
              {back ? (
                <button className="project__button">
                  <i className="fa-brands fa-github"></i>Back End
                </button>
              ) : (
                ""
              )}
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="project__button">
                  <i style={{ marginRight: "5px" }} className="fa-solid fa-arrow-up-right-from-square"></i> Visit
                </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
