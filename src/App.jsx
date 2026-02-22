import NavbarMain from "./components/navbar/NavbarMain";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="font-inter bg-white selection:bg-indigo-100 selection:text-indigo-700">
      {/* The Navbar stays at the top */}
      <NavbarMain />
      
      {/* The main content follows below */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;