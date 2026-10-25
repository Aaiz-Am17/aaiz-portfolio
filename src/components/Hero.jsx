import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";
import profilePic from "../assets/profile.jpeg";
import AiNetwork from "./AiNetwork";

export default function Hero() {
  return (
    <section id="about" className="container mx-auto px-8 py-24 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mt-12">
      {/* Left Text Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm mb-6">
          <Cpu className="w-4 h-4 mr-2 animate-pulse" />
          BSc Artificial Intelligence @ GIKI
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500 pointer-events-none">
          Architecting <span className="text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Intelligence</span> <br />
          & Scalable Systems.
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed pointer-events-none">
          I am an AI Engineer based in Lahore, specializing in agentic orchestration, computer vision, and machine learning pipelines. I build intelligent, structured applications that solve complex real-world problems.
        </p>
        
        <div className="flex gap-4">
          <Button size="lg" className="shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-105" asChild>
            <a href="#projects">
              View Architecture <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-background/50 backdrop-blur" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Right Content (3D Engine + Profile Picture) */}
      <div className="flex-1 flex justify-center lg:justify-end relative w-full h-[400px] lg:h-[500px]">
        
        {/* The 3D Canvas sits at the very back (z-0) */}
        <AiNetwork />
        
        {/* Profile Picture floats in the front (z-10) with pointer-events-none so mouse passes through to 3D object */}
        <div className="absolute m-auto inset-0 flex items-center justify-center lg:justify-end z-10 pointer-events-none">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br from-primary/40 via-background to-border backdrop-blur-sm shadow-2xl">
            <img 
              src={profilePic} 
              alt="Aaiz Mohsin" 
              className="w-full h-full object-cover rounded-full border-4 border-background grayscale-[20%] contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}