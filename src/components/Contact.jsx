import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "6dce2814-ed1f-4b6d-a294-9a9b917a8d2b", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Aaiz Mohsin Portfolio"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); 
        setTimeout(() => setStatus("idle"), 3000); 
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-8 py-24 max-w-3xl mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect</h2>
        <p className="text-muted-foreground mt-4">
          Currently open for new opportunities. Reach out if you want to build something scalable.
        </p>
      </div>

      <Card className="bg-background/60 backdrop-blur-xl border-border/50">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>I will get back to you within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Name</label>
                <Input 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="bg-background/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Email</label>
                <Input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="bg-background/50" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Message</label>
              <Textarea 
                required 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we collaborate?" 
                className="min-h-[120px] bg-background/50" 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full transition-all" 
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" && "Routing Data..."}
              {status === "success" && "Message Delivered!"}
              {status === "error" && "Error Sending Message"}
              {status === "idle" && "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Upgraded Direct Contact & Social Section */}
      <div className="flex flex-col items-center gap-8 mt-12">
        
        {/* Direct Contact Info (Email & Phone) */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-muted-foreground">
          <a href="mailto:aaiz.mohsin1@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="font-mono text-sm">aaiz.mohsin1@gmail.com</span>
          </a>
          
          {/* REPLACE THE PHONE NUMBERS HERE */}
          <a href="tel:+923000000000" className="flex items-center gap-3 hover:text-primary transition-colors">
            <Phone className="h-5 w-5" />
            <span className="font-mono text-sm">+92 321 1779328</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-2">
          <a href="https://linkedin.com/in/aaiz-mohsin" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="https://github.com/Aaiz-Am17" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}