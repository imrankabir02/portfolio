import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Experience from './Components/Experience';
import Skills from "./Components/Skills";
import Educations from "./Components/Educations";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-teal-600">
      {/* Full-screen dark background with gradient effect */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-950 z-[-1]">
        {/* Gradient overlay on top of the solid dark background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main container for the content */}
      <div className="container relative px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Educations />
        <Footer />
      </div>
    </div>
  )
}

export default App
