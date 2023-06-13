import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Layout from "./layout/Layout";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Layout />
      <div>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
