import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Experience from './Components/Experience'
import Skills from "./Components/Skills"
import Educations from "./Components/Educations"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-200 selection:bg-pink-500 selection:text-white">
      {/* 90's retro background with multiple layers */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1]">
        {/* Base gradient with retro colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-indigo-800 to-cyan-700">
          {/* Memphis-style geometric patterns */}
          <div className="absolute inset-0">
            {/* Zigzag pattern */}
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#FF69B4,#FF69B4_1px,transparent_1px,transparent_10px)]"></div>
            
            {/* Dots pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD700_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* Squiggly lines */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-[repeating-linear-gradient(90deg,#00FFFF,#00FFFF_2px,transparent_2px,transparent_20px)]"></div>
            </div>
          </div>

          {/* Neon glow effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,105,180,0.3),rgba(147,51,234,0.3),rgba(59,130,246,0.3),rgba(0,0,0,0))]"></div>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[linear-gradient(0deg,transparent_calc(100%_-_1px),#ffffff_calc(100%_-_1px)),linear-gradient(90deg,transparent_calc(100%_-_1px),#ffffff_calc(100%_-_1px))] bg-[size:30px_30px]"></div>
          </div>
        </div>
      </div>

      {/* Content wrapper with glass effect */}
      <div className="relative min-h-screen">
        {/* Retro decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          {/* Abstract shapes */}
          <div className="absolute w-40 h-40 rounded-full top-1/4 -left-20 bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute rounded-full top-3/4 -right-20 w-60 h-60 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 blur-xl animate-pulse"></div>
        </div>

        {/* Main content */}
        <div className="container relative px-8 mx-auto">
          <Navbar />
          <main className="relative space-y-24 md:space-y-32">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Educations />
          </main>
          <Footer />
        </div>

        {/* Retro scroll progress bar */}
        <div className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" 
             style={{ width: '100%', transform: 'scaleX(var(--scroll-progress, 0))', transformOrigin: 'left' }}>
        </div>
      </div>
    </div>
  )
}

export default App