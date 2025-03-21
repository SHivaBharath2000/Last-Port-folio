import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Topcontainer } from "./components/Topcontainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Experiencecontainer from "./components/Experience Container/Experiencecontainer";
import Contact from "./components/Contact/Conatct";
import Skillcontainer from "./components/skillcontainer/Skillcontainer";


function App() {


  return (
    <>
      <div>
        <Header/>
        <Topcontainer/>
        <Skillcontainer/>
        <ProjectContainer/>
        <Experiencecontainer/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
