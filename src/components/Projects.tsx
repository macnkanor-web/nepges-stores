import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and beautiful design.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demo: "https://github.com/macnkanor-web/portfolio-web",
    github: "https://github.com/macnkanor-web/portfolio-web",
  },
  {
    title: "Task Manager Web App",
    description: "Full-featured task management application with user authentication, real-time updates, and intuitive interface.",
    image: project2,
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Date of Birth Calculator",
    description: "Interactive calculator that computes age, zodiac signs, and fun birthday facts from a given date of birth.",
    image: project3,
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift hover-glow border-border/50 bg-card/50 backdrop-blur-sm group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
