import React from "react";
import Project from "../Project/Project";
import login from "../../assets/Login page.png";
import market from "../../assets/Rental Equipment.png";
import anime from "../../assets/popular page.png";
import todoImage from "../../assets/todo.png";

import hospitalImage from "../../assets/hospitalImage.png";

import { Element } from "react-scroll";
import subscription from "../../assets/Subscription Page.png";
import "./ProjectContainer.css";

function ProjectContainer() {
  const projects = [
    {
      img: todoImage,
      title: "Todo App", 
      desc: "Using react and node.js and mongo db using full stack development to implement the todo app",
      link: "https://fluffy-hotteok-3ca7e0.netlify.app/",
      front: "https://github.com/SHivaBharath2000/TodoFrontEnd.git",
      back: "https://github.com/SHivaBharath2000/TodoFront.git",
    },

    {
      img: login,
      title: "Login page",
      desc: "Using React and Node.js to implement the login page using JWT token",
      link: "https://wonderful-lolly-b88ae5.netlify.app/login",
      front: "https://github.com/SHivaBharath2000/day38frontend.git",
      back: "hhttps://github.com/SHivaBharath2000/deployBackned.git",
    },
    {
      img: hospitalImage,
      title: "Hospital Management System",
      desc: "Using React and Node.js to implement the Hospital Management System",
      link: "https://super-pothos-8d0945.netlify.app/",
      front:"https://github.com/SHivaBharath2000/Hospital-FrontEnd.git",
      back:"https://github.com/SHivaBharath2000/HospitalBackend.git"
    },
    {
      img: market,
      title: "Market Rental place equipment",
      desc: "Developed Full stack application using React, Node.js, and MongoDB to implement the payment gateway from Stripe and to create the market rental place equipment",
      link: "https://luminous-haupia-0f3322.netlify.app/",
      front: "https://github.com/SHivaBharath2000/market-rental-place-Front-end.git",
      back: "https://github.com/SHivaBharath2000/market-rental-place-Back-end-.git",
    },
    {
      img: anime,
      title: "Anime's Page",
      desc: "HTML, CSS, and JavaScript used to create an anime's page. It shows world popular anime's",
      link: "https://main--peaceful-alpaca-ebb048.netlify.app/",
      front:"https://github.com/SHivaBharath2000/asynctask1/tree/main/bikes"
    },
    {
      img: subscription,
      title: "Subscription Page",
      desc: "HTML and CSS used to create a subscription page for the best user experience",
      link: "https://66099ae91ddf019ecac4b372--rainbow-cat-b43061.netlify.app/#",
      front:"https://github.com/SHivaBharath2000/reacttask1.git"
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
            front={project.front}
            back={project.back}
          />
        ))}
      </div>
    </Element>
  );
}

export default ProjectContainer;