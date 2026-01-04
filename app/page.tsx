import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { ThreeCanvas } from "@/components/three-canvas"

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-x-hidden">
      <ThreeCanvas />

      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary),transparent_100%)] opacity-[0.02]" />

      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Pratiksha Patel
            </h1>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              Full Stack Developer · <span className="text-accent">Frontend Specialist</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground/90">
              Crafting immersive digital experiences that blend{" "}
              <span className="text-foreground font-medium">technical precision</span> with{" "}
              <span className="text-foreground font-medium">creative design</span>.
            </p>
            <Nav />
          </Reveal>
          <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
            <li>
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>
        </header>

        {/* Right Column: Scrollable Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <Reveal delay={100}>
            <section id="about" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  I'm a 2027 graduate developer passionate about crafting accessible, pixel-perfect user interfaces that
                  blend thoughtful design with robust engineering. My favorite work lies at the intersection of design
                  and development, creating experiences that not only look great but are meticulously built for
                  performance and usability.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  With a strong focus on frontend development, I love building clean UI and performant web apps. I
                  specialize in the modern web stack, turning complex problems into intuitive digital solutions.
                </p>
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "Three.js", "Git"].map(
                      (skill, i) => (
                        <Reveal key={skill} delay={i * 50}>
                          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 hover:scale-110 transition-all cursor-default block">
                            {skill}
                          </span>
                        </Reveal>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <section id="experience" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Experience</h2>
              </div>
              <div className="space-y-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                    2024 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                          Full Stack Developer Intern · TechCorp
                        </span>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      Building and maintaining critical components used to construct modern web platforms. Collaborating
                      with cross-functional teams to implement accessible and performant UI features.
                    </p>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-8">Achievements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Hackathon Winner", value: "2024" },
                      { label: "AWS Certified", value: "Practitioner" },
                    ].map((ach) => (
                      <div
                        key={ach.label}
                        className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 shadow-sm"
                      >
                        <div className="text-xs font-bold uppercase tracking-tighter text-primary">{ach.value}</div>
                        <div className="text-sm font-semibold text-foreground">{ach.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={300}>
            <section id="projects" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
              </div>
              <div className="group/list flex flex-col gap-12">
                <ProjectCard
                  title="Project One: AI Task Manager"
                  description="A sophisticated task management application powered by AI to prioritize and categorize your daily workflow automatically."
                  tags={["React", "Next.js", "OpenAI", "Tailwind CSS"]}
                  link="#"
                />
                <ProjectCard
                  title="Project Two: E-commerce Dashboard"
                  description="Real-time analytics dashboard for e-commerce store owners featuring interactive charts and inventory management."
                  tags={["TypeScript", "Recharts", "Prisma", "PostgreSQL"]}
                  link="#"
                />
                <ProjectCard
                  title="Project Three: Social Connect"
                  description="A clean, minimal social networking platform focused on developer communities and collaboration."
                  tags={["React", "Node.js", "Socket.io", "MongoDB"]}
                  link="#"
                />
              </div>
            </section>
          </Reveal>

          <Reveal delay={400}>
            <section id="contact" className="scroll-mt-16 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Contact</h2>
              </div>
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently looking for new opportunities and would love to hear from you. Whether you have a
                  question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="group" asChild>
                    <a href="mailto:hello@example.com">
                      Say Hello
                      <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="outline" className="group bg-transparent" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                      View Resume
                      <FileText className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    </a>
                  </Button>
                </div>

                <footer className="mt-24 pt-12 border-t text-sm text-muted-foreground">
                  <p>
                    Built with <span className="text-foreground">Next.js</span> and{" "}
                    <span className="text-foreground">Tailwind CSS</span>. Designed with a focus on typography and
                    readability.
                  </p>
                  <p className="mt-2">© 2025 Pratiksha Patel. All rights reserved.</p>
                </footer>
              </div>
            </section>
          </Reveal>
        </main>
      </div>
    </div>
  )
}
