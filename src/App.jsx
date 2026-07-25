import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Educations from "./Components/Educations";
import Contact from "./Components/Contact";
import Boot from "./Components/Boot";
import { useAmbient, useReveal, useScrollProgress, useBoot } from "./hooks";

const App = () => {
  useAmbient();
  useReveal();
  const progress = useScrollProgress();
  const booting = useBoot();

  return (
    <div className="relative min-h-screen font-sans text-parch-light antialiased selection:text-sea-900">
      {/* Grand Line background layers */}
      <div className="scene" aria-hidden="true" />
      <div className="map-grain" aria-hidden="true" />
      <div className="compass-rose" aria-hidden="true" />
      <div className="aurora" aria-hidden="true" />
      <div className="waves" aria-hidden="true">
        <span className="w1" />
        <span className="w2" />
        <span className="w3" />
      </div>
      <div className="vignette" aria-hidden="true" />

      {booting && <Boot />}

      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Educations />
        <Contact />
      </main>
    </div>
  );
};

export default App;
