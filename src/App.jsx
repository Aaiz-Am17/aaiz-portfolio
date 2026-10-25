import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import DataBackground from "./components/DataBackground";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground relative scroll-smooth overflow-x-hidden">
      
      {/* Global 3D Data Floor (Locked to the screen) */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <DataBackground />
      </div>
      
      <div className="relative z-50">
        <Navbar />
      </div>
      
      <main>
        {/* Top Section: Solid background masks the 3D floor */}
        <div className="relative z-10 bg-background shadow-[0_20px_50px_rgba(0,0,0,0.8)] pb-12 rounded-b-[40px] lg:rounded-b-[80px]">
          <Hero />
        </div>
        
        {/* Middle Sections: Transparent background reveals the 3D floor */}
        <div className="relative z-0 py-20">
          <Projects />
          <Experience />
          <Certifications />
        </div>
        
        {/* Bottom Section: Consolidated solid block to absolutely mask the 3D floor */}
        <div className="relative z-10 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pt-12 rounded-t-[40px] lg:rounded-t-[80px] flex flex-col">
          <Contact />
          
          <footer className="border-t border-border/40 py-6 mt-12 text-center bg-background">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aaiz Mohsin. Architected with React & shadcn/ui.
            </p>
          </footer>
          
          {/* Infinite padding block to absorb scroll-bounce on Mac/Mobile */}
          <div className="h-64 w-full bg-background"></div>
        </div>
      </main>
    </div>
  );
}

export default App;