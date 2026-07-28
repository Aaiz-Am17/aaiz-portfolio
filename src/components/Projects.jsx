import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MapMate: Vision-Based Navigation",
    description: "A visual SLAM-based offline navigation and 3D mapping system for GPS-denied environments utilizing camera-driven scene understanding and depth estimation.",
    tags: ["Python", "OpenCV", "SfM", "Google Maps SDK"],
    github: "#",
  },
  {
    title: "MSSQL Gemini Agent Chatbot",
    description: "LLM-powered SQL chatbot enabling natural language analytics over structured databases. Built with agentic workflows and strict read-only SQL enforcement.",
    tags: ["FastAPI", "LangChain", "LangGraph", "MSSQL", "Gemini"],
    github: "#",
  },
  {
    title: "AI Attendance System",
    description: "Automated logging architecture utilizing YOLO for real-time face detection and classification, eliminating manual tracking errors with 95%+ accuracy.",
    tags: ["Python", "YOLO", "Streamlit", "Pandas"],
    github: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-8 py-24 max-w-screen-2xl">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A selection of my recent engineering work, spanning from multi-agent LLM systems to on-device computer vision pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-background/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="pt-3 text-sm leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                 <a href={project.github} target="_blank" rel="noreferrer">
                   <Github className="w-4 h-4 mr-2"/> View Source Code
                 </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}