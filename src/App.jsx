import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Educations from "./Components/Educations";
import Contact from "./Components/Contact";
import Boot from "./Components/Boot";
import { lazy, Suspense } from "react";
import { useAmbient, useReveal, useScrollProgress, useBoot } from "./hooks";
import { useRouteTracker } from "./route";

// heavy three.js world — its own chunk, loaded after first paint
const SeaWorld = lazy(() => import("./Components/three/SeaWorld"));
// the saga chart — mini-map in the corner, full 3D map on demand
const SagaMap = lazy(() => import("./Components/SagaMap"));

const App = () => {
  useAmbient();
  useReveal();
  useRouteTracker();
  const progress = useScrollProgress();
  const booting = useBoot();

  return (
    <div className="relative min-h-screen font-sans text-parch-light antialiased selection:text-sea-900">
      {/* Grand Line background layers */}
      <div className="scene" aria-hidden="true" />
      {/* persistent full-page WebGL sea (behind everything) */}
      <Suspense fallback={null}>
        <SeaWorld />
      </Suspense>
      {/* readability veil over the sea so parchment + text stay crisp */}
      <div className="sea-veil" aria-hidden="true" />
      <div className="compass-rose" aria-hidden="true" />
      <div className="aurora" aria-hidden="true" />
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

      <Suspense fallback={null}>
        <SagaMap />
      </Suspense>
    </div>
  );
};

export default App;
