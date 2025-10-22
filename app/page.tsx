"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Jiayi
                  <br />
                  <span className="text-muted-foreground">Wang</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software Engineer specializing in
                  <span className="text-foreground"> distributed systems</span>,<span className="text-foreground"> AI/ML</span>,
                  and
                  <span className="text-foreground"> full-stack development</span> at Amazon AWS.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open to opportunities
                  </div>
                  <div>Irvine, CA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="flex-shrink-0">
                <img
                  src="https://avatars.githubusercontent.com/u/26063944?s=400&u=2da93338fa658090010ac2d37169694183a97f58&v=4"
                  alt="Jiayi Wang"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-border object-cover"
                />
              </div>
              
              <div className="space-y-4 text-center">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Software Engineer</div>
                  <div className="text-muted-foreground">@ Amazon AWS</div>
                  {/* <div className="text-xs text-muted-foreground">2023 — Present</div> */}
                </div>
              </div>

              <div className="space-y-4 text-center">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["React", "TypeScript", "Python", "Go", "AWS", "Java", "AI/ML"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => { sectionsRef.current[1] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Professional Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">Career Journey</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  role: "Software Engineer",
                  company: "Amazon AWS",
                  duration: "Current",
                  description: "Led development of distributed, scalable features for AWS Billing Portal serving 4M+ users. Built AI Agent features with RAG, improving accuracy from 45% to 98%.",
                  tech: ["Java", "Go", "React", "AWS", "RAG", "MCP"],
                  highlight: "4M+ Users Served",
                },
                {
                  role: "Software Engineer",
                  company: "Instagram (Meta)",
                  duration: "",
                  description: "Modernized structured data for SEO, achieving 4% increase and +3.8M DAU gain. Built comparison tools improving developer efficiency by 160%.",
                  tech: ["React", "JavaScript", "Django", "Python", "JSON-LD"],
                  highlight: "4% Growth & +3.8M DAU",
                },
                {
                  role: "Teaching Assistant",
                  company: "UMass Amherst",
                  duration: "",
                  description: "Designed and delivered coursework for 100+ students in C Programming & Linux system programming.",
                  tech: ["C", "Linux", "System Programming"],
                  highlight: "100+ Students Taught",
                },
                {
                  role: "Open Source Contributor",
                  company: "Apache Software Foundation",
                  duration: "Ongoing",
                  description: "Contributed to Apache CarbonData, improving performance 2.2x and supporting 50+ enterprise production environments.",
                  tech: ["Java", "Scala", "Spark", "Hadoop", "Big Data"],
                  highlight: "2.2x Performance Improvement",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group relative p-6 sm:p-8 border border-border/30 rounded-xl hover:border-border/60 transition-all duration-500 hover:shadow-lg bg-gradient-to-r from-transparent to-transparent hover:from-muted/5 hover:to-transparent"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-medium text-foreground group-hover:text-foreground transition-colors duration-300">
                            {job.role}
                          </h3>
                          <div className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {job.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="text-sm text-green-500 font-mono">
                            {job.duration}
                          </div>
                          <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                            {job.highlight}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {job.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/20">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted/30 rounded-full border border-border/30 group-hover:bg-muted/50 group-hover:border-border/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => { sectionsRef.current[2] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
              {[
                {
                  title: "AI-Powered CRM System",
                  excerpt: "Full-stack CRM System for Bay Area Real Estate Brokers with AI-powered lead scoring, automated follow-ups, and MLS integration. Reduced agent effort by 85% through intelligent automation.",
                  date: "Dec 2024 - May 2025",
                  tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "MLS API", "LLM"],
                  status: "In Development",
                  link: null,
                  screenshot: "/CRM_screenshot.png",
                  aspectRatio: "2916/2481", // Portrait orientation
                },
                {
                  title: "EverLove Charity",
                  excerpt: "A comprehensive charity platform designed to connect donors with meaningful causes and facilitate transparent donation processes. Built with modern web technologies to create a seamless giving experience.",
                  date: "2024",
                  tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Web3"],
                  status: "Live",
                  link: "https://www.everlovecharity.com/",
                  screenshot: "/Everlove_screenshot.png",
                  aspectRatio: "2943/1866", // Landscape orientation
                },
                {
                  title: "My2048 – Cyberpunk Puzzle Remaster",
                  excerpt: "Rebuilt the classic 2048 for iOS & macOS with a SpriteKit engine, MVVM data core, and a neon 'hacker' UI. Implemented dynamic board presets that auto-calculate scores, touch/keyboard/trackpad gesture handling, and synchronized animations for spawns, moves, and merges.",
                  date: "Dec 2023 – Present",
                  tech: ["Swift", "SpriteKit", "MVVM", "iOS", "macOS", "Combine"],
                  status: "Live",
                  link: null,
                },
                {
                  title: "PayloadCMS Ecommerce Features",
                  excerpt: "Open source contributions to PayloadCMS, a modern headless CMS built with Node.js and TypeScript. Led development of the latest ecommerce features, enabling seamless online store management and payment integration capabilities.",
                  date: "2024 - Present",
                  tech: ["Node.js", "TypeScript", "React", "MongoDB", "Stripe", "Ecommerce"],
                  status: "Active",
                  link: "https://github.com/payloadcms/payload",
                },
                {
                  title: "Apache CarbonData Contributions",
                  excerpt: "Open source contributions to distributed data analytics platform. Improved performance 2.2x and supported 50+ enterprise production environments with trillions of data scale.",
                  date: "May 2021 - Present",
                  tech: ["Java", "Scala", "Spark", "Hadoop", "Big Data"],
                  status: "Active",
                  link: "https://github.com/apache/carbondata",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                  onClick={() => project.link && window.open(project.link, '_blank')}
                >
                  {project.screenshot && (
                    <div className="mb-6 rounded-lg overflow-hidden border border-border/30 bg-muted/10">
                      <div 
                        className="relative w-full"
                        style={{ 
                          aspectRatio: project.aspectRatio,
                          maxHeight: '400px'
                        }}
                      >
                        <img
                          src={project.screenshot}
                          alt={`${project.title} screenshot`}
                          className="absolute inset-0 w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-full h-full bg-muted/20 flex items-center justify-center text-muted-foreground text-sm">
                                <div class="text-center">
                                  <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-muted/30 flex items-center justify-center">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                  </div>
                                  <div>Screenshot Preview</div>
                                </div>
                              </div>
                            `;
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{project.date}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground border border-border rounded group-hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>{project.link ? 'View on GitHub' : 'View details'}</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => { sectionsRef.current[3] = el }} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about distributed systems, AI/ML, and full-stack development.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:ikblue.002fa7@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">ikblue.002fa7@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="text-sm text-muted-foreground">Phone: 413-275-4341</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@Jeromestein", url: "https://github.com/Jeromestein" },
                  { name: "LinkedIn", handle: "csjiayiwang", url: "https://linkedin.com/in/csjiayiwang" },
                  { name: "Email", handle: "ikblue.002fa7@gmail.com", url: "mailto:ikblue.002fa7@gmail.com" },
                  { name: "Phone", handle: "413-275-4341", url: "tel:413-275-4341" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 break-words">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground break-words overflow-wrap-anywhere">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Jiayi Wang. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
