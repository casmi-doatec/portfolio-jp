"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

const ThreeBackground = dynamic(
  () => import("@/components/three-background").then((mod) => ({ default: mod.ThreeBackground })),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
