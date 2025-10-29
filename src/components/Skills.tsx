import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Web Vitals, Accessibility",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Design Systems, Prototyping",
  },
  {
    icon: Rocket,
    title: "Modern Tools",
    description: "Git, CI/CD, Testing, Cloud Deployment",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover-lift hover-glow border-border/50 bg-card/50 backdrop-blur-sm group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
