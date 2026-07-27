import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-8 mx-auto">
        {/* Left Side: Logo & Name */}
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight">Aaiz Mohsin.</span>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}