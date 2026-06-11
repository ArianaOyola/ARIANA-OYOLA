import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  const [darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    const saved=localStorage.getItem("dark");
    if(saved==="true"){
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  },[]);

  function toggleTheme(){
    const next=!darkMode;
    setDarkMode(next);
    localStorage.setItem("dark",next);
    document.body.classList.toggle("dark");
  }

  return(
    <div className="app">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>
      <Hero/>
      <About/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;