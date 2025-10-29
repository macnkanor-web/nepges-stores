const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <p className="hover-lift">
              I'm a 17-year-old passionate developer from Calabar, Cross River State, Nigeria,
              with a love for creating intuitive and dynamic user experiences. As both a frontend
              and backend developer, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="hover-lift" style={{ animationDelay: "0.1s" }}>
              With 2 years of working experience, I've completed numerous bootcamp courses from
              platforms like Coursera and Udemy. I'm currently pursuing a BS.c degree at Miva Open
              University, constantly expanding my knowledge and skills in software engineering.
            </p>
            <p className="hover-lift" style={{ animationDelay: "0.2s" }}>
              My approach combines technical proficiency with creative problem-solving, ensuring
              every project not only looks great but performs flawlessly. I'm always eager to learn
              and adapt to the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
