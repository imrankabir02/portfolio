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
    <div className="overflow-x-hidden antialiased bg-neutral-200 text-neutral-800">
      <div className="relative min-h-screen">
        <div className="container relative px-8 mx-auto">
          <Navbar />
          <main className="relative space-y-2 md:space-y-2">
            <Hero className="bg-lime-100"/>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Educations />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App