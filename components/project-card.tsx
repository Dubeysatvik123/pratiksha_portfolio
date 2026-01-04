import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TiltWrapper } from "@/components/tilt-wrapper"

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  github?: string
  link?: string
}

export function ProjectCard({ title, description, tags, github, link }: ProjectProps) {
  return (
    <TiltWrapper intensity={5} className="group/card">
      <div className="group relative grid gap-4 p-6 transition-all rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/5 hover:shadow-2xl hover:shadow-primary/10 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent/50" />
        <div className="z-10 sm:col-span-6 [transform:translateZ(20px)]">
          <h3 className="font-semibold leading-snug text-foreground text-lg group-hover/card:text-primary transition-colors">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                href={link || "#"}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block" />
                <span>
                  {title}
                  <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full bg-primary/10 text-primary border-none hover:bg-primary/20 transition-colors px-3 py-1 text-[10px] font-bold"
              >
                {tag}
              </Badge>
            ))}
          </div>
          {github && (
            <a
              href={github}
              className="mt-4 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-1 h-4 w-4" />
              View Source
            </a>
          )}
        </div>
      </div>
    </TiltWrapper>
  )
}
