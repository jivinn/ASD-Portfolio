import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useRef } from "react";

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div>
     <Navbar
     
     homeRef={homeRef}
     aboutRef={aboutRef}
     experienceRef={experienceRef}
     projectRef={projectRef}
     contactRef={contactRef}

     />
    <div ref={homeRef}>
     <Home/>
    </div>
    <div ref={aboutRef}>
     <About/>
    </div>
    <div ref={experienceRef}>
      <Experience/>
    </div>
    <div ref={projectRef}>
     <Project/>
    </div> 
    <div ref={contactRef}>
     <Contact/>
    </div>
     
    </div>
  );
}

export default App;
