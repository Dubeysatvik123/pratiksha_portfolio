"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block mt-16">
      <ul className="flex flex-col gap-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "group flex items-center py-3 transition-all",
                activeSection === id ? "text-primary translate-x-2" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "mr-4 h-px transition-all duration-500",
                  activeSection === id
                    ? "w-12 bg-primary"
                    : "w-6 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground",
                )}
              />
              <span className="text-xs font-bold uppercase tracking-widest leading-none">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
