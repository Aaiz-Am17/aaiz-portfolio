import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="container mx-auto px-8 py-24 flex flex-col items-center text-center max-w-4xl mt-12">
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 cursor-default">
        <Terminal className="w-4 h-4 mr-2" />
        BSc Artificial Intelligence | GIKI
      </div>
      
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6">
        Architecting <span className="text-primary">Intelligence</span> <br />
        & Scalable Systems.
      </h1>
      
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
        I am an AI Engineer based in Lahore, specializing in agentic orchestration, computer vision, and machine learning pipelines. I build intelligent, structured applications that solve complex real-world problems.
      </p>
      
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href="#projects">
            View Architecture <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
}