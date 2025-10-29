const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate developer and designer with a love for creating intuitive,
              dynamic user experiences. With expertise in modern web technologies, I bring
              ideas to life through clean code and thoughtful design.
            </p>
            <p>
              My approach combines technical proficiency with creative problem-solving,
              ensuring every project not only looks great but performs flawlessly. I'm
              constantly learning and adapting to the ever-evolving web landscape.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
