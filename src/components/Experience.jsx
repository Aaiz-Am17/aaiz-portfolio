import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DataTorus from "./DataTorus";

const skills = {
  "Programming Languages": ["Python", "C/C++", "SQL (Postgres, MSSQL)", "JavaScript", "HTML/CSS"],
  "Frameworks": ["FastAPI", "React", "Node.js", "MongoDB", "Flask", "Django", "WordPress", "Streamlit"],
  "Libraries": ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "PyTorch"],
  "LLMs & AI Systems": ["OpenAI GPT", "Google Gemini API", "LangChain", "LangGraph", "Ollama", "RAG Pipelines", "Multi-Agent Systems"]
};

export default function Experience() {
  return (
    <section id="experience" className="relative container mx-auto px-8 py-24 max-w-screen-2xl overflow-hidden">
      {/* 3D Background specifically for this section */}
      <DataTorus />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Experience */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <Card className="bg-background/40 backdrop-blur-md border-border/40 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">AI Intern</CardTitle>
                <p className="text-sm text-primary font-medium">Workforce Commerce • Jun 2025 - Jul 2025</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li>Developed AI-powered chatbots using LangChain and LangGraph for agent-based workflows.</li>
                  <li>Integrated Google Gemini and local LLMs for conversational AI applications.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/40 backdrop-blur-md border-border/40 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">AI/ML Intern</CardTitle>
                <p className="text-sm text-primary font-medium">Digital Data Systems • Jun 2024 - Aug 2024</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li>Architected a unified OCR pipeline for a production-level ID card scanning solution.</li>
                  <li>Engineered RESTful backend APIs using Flask and Django to bridge computer vision models.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/40 backdrop-blur-md border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">BSc Artificial Intelligence</CardTitle>
                <p className="text-sm text-muted-foreground">Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (Reg: 2022002)</p>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Right Column: Technical Arsenal */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Technical Arsenal
          </h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-background/40 backdrop-blur-md border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-secondary/30 text-sm py-1.5 px-3 font-mono hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}