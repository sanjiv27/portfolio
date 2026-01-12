"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GitHubContributions = dynamic(() => import("@/components/github-contributions").then(mod => mod.GitHubContributions), { ssr: false });
const TechStack = dynamic(() => import("@/components/tech-stack").then(mod => mod.TechStack), { ssr: false });
const TimelineItem = dynamic(() => import("@/components/resume-card").then(mod => mod.TimelineItem), { ssr: false });
const ContactOrbiting = dynamic(() => import("@/components/contact-orbiting").then(mod => mod.ContactOrbiting), { ssr: false });

const BlurFade = dynamic(() => import("@/components/magicui/blur-fade").then(mod => mod.default), { ssr: false });
const BlurFadeText = dynamic(() => import("@/components/magicui/blur-fade-text").then(mod => mod.default), { ssr: false });
const ProjectCard = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), { ssr: false });
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <section id="hero" className="mb-section-lg">
        <div className="w-full space-y-content-lg px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center md:items-start">
            {/* Avatar - shows first on mobile, right on desktop */}
            <BlurFade delay={BLUR_FADE_DELAY * 2} className="md:order-2">
              <div 
                className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-border shadow-xl cursor-pointer group"
                onClick={() => setShowProfileModal(true)}
              >
                <img 
                  src={DATA.avatarUrl} 
                  alt={DATA.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </BlurFade>
            
            {/* Text content - shows second on mobile, left on desktop */}
            <div className="flex-col flex flex-1 space-y-3 items-center md:items-start text-center md:text-left md:order-1 w-full">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 3}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none w-full"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}.`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm text-muted-foreground md:text-base">
                  Pronounced /sun-jeev/ — currently in{" "}
                  <a 
                    href="https://en.wikipedia.org/wiki/Amherst,_Massachusetts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-primary/80 underline decoration-primary/40 underline-offset-2 hover:decoration-primary/60 transition-all duration-200"
                  >
                    Amherst, MA
                  </a>
                  .
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mb-section-lg">
        <div className="space-y-content-md">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">About</h2>
              <button
                onClick={() => setAboutExpanded(!aboutExpanded)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-full transition-all duration-200"
              >
                {aboutExpanded ? "Hide" : "Read more"}
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </BlurFade>
          
          <AnimatePresence>
            {aboutExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-content-sm">
                  <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {DATA.summary}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>


      <section id="work" className="mb-section-lg">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="divide-y divide-border/30">
          {DATA.technicalExperience.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 18 + id * 0.02}>
                <TimelineItem
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                bullets={work.bullets}
                  isLast={id === DATA.technicalExperience.length - 1}
              />
            </BlurFade>
          ))}
          </div>
        </div>
      </section>

      <section id="education" className="mb-section-lg">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="divide-y divide-border/30">
          {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 20 + id * 0.02}>
                <TimelineItem
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                  href={education.href}
                period={`${education.start} - ${education.end}`}
                  isLast={id === DATA.education.length - 1}
              />
            </BlurFade>
          ))}
        </div>
        </div>
      </section>

      <section id="tech-stack" className="mb-section-lg">
        <TechStack delay={BLUR_FADE_DELAY * 21} />
      </section>

      <section id="projects" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          
          {/* All Projects */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 23 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="github" className="mb-section-lg">
        <GitHubContributions username="sanjiv27" delay={BLUR_FADE_DELAY * 24} />
      </section>

      <ContactOrbiting delay={BLUR_FADE_DELAY * 36} />

      {/* Profile Photo Modal */}
      <AnimatePresence>
        {showProfileModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowProfileModal(false)}
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={DATA.avatarUrl} 
                alt={DATA.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
