import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Google Project Management",
    issuer: "Professional Certificate",
    description: "Issued by Coursera (May 2026). Competent in initiating, planning and running both traditional and agile projects. Developed by Google with hands-on practice-based assessments."
  },
  {
    title: "Computer Vision",
    issuer: "Kaggle",
    description: "Issued October 23, 2026. Certified proficiency in building and deploying convolutional neural networks and advanced image processing architectures."
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    description: "Issued October 21, 2026. Specialized training covering missing values, categorical variables, XGBoost pipelines, and advanced data leakage prevention strategies."
  },
  {
    title: "Geospatial Analysis",
    issuer: "Kaggle",
    description: "Issued October 25, 2026. Validated skills in spatial data manipulation, coordinate reference systems, and interactive mapping algorithms."
  },
  {
    title: "WordPress Development",
    issuer: "Training Certificate",
    description: "Issued by Ignite & Virtual University (Nov 2019). Completed rigorous site architecture and content management training under the DigiSkills Training Program."
  }
];

const CertCard = ({ cert }) => (
  <Card className="h-full bg-background/40 backdrop-blur-md border-border/40 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
    <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
    <CardHeader>
      <div className="flex items-center gap-3 mb-3">
        <Award className="h-7 w-7 text-primary" />
        <CardTitle className="text-xl">{cert.title}</CardTitle>
      </div>
      <CardDescription className="text-primary font-medium flex items-center gap-1.5">
        <CheckCircle className="w-4 h-4" /> {cert.issuer}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {cert.description}
      </p>
    </CardContent>
  </Card>
);

export default function Certifications() {
  return (
    <section id="certifications" className="container mx-auto px-8 py-24 max-w-screen-2xl">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Verified Credentials</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          Formal training validating project orchestration, machine learning pipelines, and web architecture capabilities.
        </p>
      </div>

      {/* Desktop "Dice 5" Layout */}
      <div className="hidden lg:flex flex-col gap-10 max-w-5xl mx-auto">
        <div className="flex justify-between gap-10 w-full">
          <div className="w-[48%]"><CertCard cert={certifications[0]} /></div>
          <div className="w-[48%]"><CertCard cert={certifications[1]} /></div>
        </div>
        
        <div className="flex justify-center w-full">
          <div className="w-[48%]"><CertCard cert={certifications[2]} /></div>
        </div>
        
        <div className="flex justify-between gap-10 w-full">
          <div className="w-[48%]"><CertCard cert={certifications[3]} /></div>
          <div className="w-[48%]"><CertCard cert={certifications[4]} /></div>
        </div>
      </div>

      {/* Mobile & Tablet Standard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
        {certifications.map((cert, index) => (
          <CertCard key={index} cert={cert} />
        ))}
      </div>
    </section>
  );
}