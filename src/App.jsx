import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground relative scroll-smooth">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="border-t border-border/40 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aaiz Mohsin. Architected with React & shadcn/ui.
        </p>
      </footer>
    </div>
  );
}

export default App;