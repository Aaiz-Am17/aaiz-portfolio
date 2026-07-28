import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

// Custom SVGs replacing the removed Lucide brand icons
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
  return (
    <section id="contact" className="container mx-auto px-8 py-24 max-w-3xl mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect</h2>
        <p className="text-muted-foreground mt-4">
          Currently open for new opportunities. Reach out if you want to build something scalable.
        </p>
      </div>

      <Card className="bg-background/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>I will get back to you within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Name</label>
              <Input placeholder="John Doe" className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Email</label>
              <Input type="email" placeholder="john@example.com" className="bg-background/50" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Message</label>
            <Textarea placeholder="How can we collaborate?" className="min-h-[120px] bg-background/50" />
          </div>
          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-6 mt-12">
        <a href="mailto:aaiz.mohsin1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com/in/aaiz-mohsin" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <LinkedinIcon className="h-6 w-6" />
        </a>
        <a href="https://github.com/Aaiz-Am17" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <GithubIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}