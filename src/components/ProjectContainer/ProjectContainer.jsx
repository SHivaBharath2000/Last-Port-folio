import React from "react";
import Project from "../Project/Project";
import login from "../../assets/Login page.png";
import market from "../../assets/Rental Equipment.png";
import anime from "../../assets/popular page.png";
import todoImage from "../../assets/62802.jpg";
import { Element } from "react-scroll";
import subscription from "../../assets/Subscription Page.png";
import "./ProjectContainer.css";
function ProjectContainer() {
    const projects = [
        {
          img: subscription,
          title: "Subscription Page",
          desc: "HTML and CSS using to create a subscription page for best user experience",
          link: "https://66099ae91ddf019ecac4b372--rainbow-cat-b43061.netlify.app/#",
        },
        {
          img: anime,
          title: "Anime's Page",
          desc: "HTML CSS, and Js using to create a anime's page ,it shows world popular anime's",
          link: "https://main--peaceful-alpaca-ebb048.netlify.app/",
        },
        {
          title: todoImage,
          desc: "Using DOM manipulation to create the todo list",
          link: "https://662fd20bfc3a6e4eb2c72414--celebrated-bienenstitch-ed95f9.netlify.app/",
        },
        {
          img: login,
          title: "Login page",
          desc: "Using react and nodejs to implement the login page using the jwt token",
          link: "https://wonderful-lolly-b88ae5.netlify.app/login",
        },
        {
          img: market,
          title: "Market Rental place equipement",
          desc: "Develped Full stack application using React ,nodejs and mongo db to implement the payment gateway from stripe and to create the market rental place equipement",
          link: "	https://luminous-haupia-0f3322.netlify.app/",
        },
      ];
      

  return (
    
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some of the projects I have worked on</p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
}

export default ProjectContainer;
