import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Custom SVG replacing the removed Lucide brand icon
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

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
                   <GithubIcon className="w-4 h-4 mr-2"/> View Source Code
                 </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}