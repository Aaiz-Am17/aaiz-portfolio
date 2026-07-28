import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Workforce Commerce",
    role: "AI Intern",
    period: "Jun 2025 - Jul 2025",
    description: "Developed AI-powered chatbots using LangChain and LangGraph for agent-based workflows. Integrated Google Gemini and local LLMs for conversational AI applications."
  },
  {
    company: "Digital Data Systems",
    role: "AI/ML Intern",
    period: "Jun 2024 - Aug 2024",
    description: "Architected a unified OCR pipeline for a production-level ID card scanning solution. Engineered RESTful backend APIs using Flask and Django to bridge computer vision models."
  }
];

const skills = {
  "Programming Languages": ["Python", "C/C++", "SQL (Postgres, MSSQL)", "JavaScript", "HTML/CSS"],
  "Frameworks": ["FastAPI", "React", "Node.js", "MongoDB", "Flask", "Django", "WordPress", "Streamlit"],
  "Libraries": ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "PyTorch"],
  "LLMs & AI Systems": ["OpenAI GPT", "Google Gemini API", "LangChain", "LangGraph", "Ollama", "RAG Pipelines", "Multi-Agent Systems"]
};

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-8 py-24 max-w-screen-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-8">Professional Experience</h2>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-primary font-medium">{exp.company} • {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
            
            {/* Education Block */}
            <Card className="bg-background/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">BSc Artificial Intelligence</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (Reg: 2022002)
                  </CardDescription>
                </CardHeader>
              </Card>
          </div>
        </div>

        {/* Skills Column */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Arsenal</h2>
          <div className="flex flex-col gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <Card key={index} className="bg-background/50 backdrop-blur border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/60 hover:bg-secondary transition-colors text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}