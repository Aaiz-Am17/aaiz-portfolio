import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

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
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/Aaiz-Am17" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}