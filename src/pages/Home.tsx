import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"

// Hero Section with Animated Text
const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div ref={textRef} className="text-center space-y-8 opacity-0">
          {/* Main Heading with Scrolling Effect */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/60 animate-gradient">
                Transforming Your
              </span>
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient">
                Ideas into Reality
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
const StatsSection = () => {
  const stats = [
    { value: "+12", label: "YEARS OF", sublabel: "EXPERIENCE" },
    { value: "+46", label: "PROJECTS", sublabel: "COMPLETED" },
    { value: "+20", label: "WORLDWIDE", sublabel: "CLIENTS" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-500">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-muted-foreground">
                {stat.label}
              </div>
              <div className="text-sm md:text-base font-semibold text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Trusted Companies Section
const TrustedCompanies = () => {
  const companies = [
    "Google", "Microsoft", "Apple", "Amazon", "Meta", "Tesla", 
    "Netflix", "Adobe", "Spotify", "Airbnb", "Uber", "Stripe"
  ]

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Relied on by companies near, far, and worldwide
        </h2>
        
        {/* Infinite Scroll Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 mx-4 text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with seamless checkout",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Healthcare Dashboard",
      description: "Patient management system with real-time analytics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["Vue.js", "Python", "AI"],
    },
    {
      title: "Social Media App",
      description: "Connect and share moments with friends worldwide",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["React Native", "Firebase", "GraphQL"],
    },
    {
      title: "Finance Tracker",
      description: "Personal finance management with budget insights",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      tags: ["Next.js", "PostgreSQL", "Chart.js"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Recent Projects and Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Tools & Tech Stack Section
const ToolsSection = () => {
  const tools = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Next.js", icon: "▲" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Figma", icon: "🎯" },
    { name: "Git", icon: "📦" },
    { name: "Python", icon: "🐍" },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Top-Tier Tools for Exceptional Results
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                {tool.icon}
              </div>
              <div className="text-sm font-semibold text-center">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section with Infinite Scroll
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "William M.",
      text: "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
      rating: 5,
    },
    {
      name: "Robert P.",
      text: "Working with John was a pleasure. He transformed our ideas into a polished product with impressive attention to detail in both design and development.",
      rating: 5,
    },
    {
      name: "James K.",
      text: "John's design and development elevated our product, delivering a seamless and intuitive user experience with his technical expertise.",
      rating: 5,
    },
    {
      name: "David L.",
      text: "John's ability to create stunning, functional designs is incredible. He understood our vision and brought it to life with innovative solutions.",
      rating: 5,
    },
    {
      name: "Michael S.",
      text: "John's approach to design and development is thorough, creative, and highly professional. His work has helped our team launch a product.",
      rating: 5,
    },
    {
      name: "John D.",
      text: "John brought a perfect balance of creativity and technical skill to our project. He took our brand's vision and developed a product that resonates.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          What Clients Say About My Work
        </h2>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-6">
        <div className="flex animate-scroll-left gap-6 py-2">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={`left-${index}`}
              className="flex-shrink-0 w-[400px] p-6 bg-background/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all"
            >
              <CardContent className="p-0 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="font-semibold text-lg">{testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex animate-scroll-right gap-6 py-2">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={`right-${index}`}
              className="flex-shrink-0 w-[400px] p-6 bg-background/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all"
            >
              <CardContent className="p-0 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="font-semibold text-lg">{testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Let's collaborate and bring your vision to life with exceptional design
          and development.
        </p>
        <Button size="lg" className="text-lg px-10 py-7 rounded-full group">
          Let's Work Together
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}

// Main Home Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <TrustedCompanies />
      <ProjectsSection />
      <ToolsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}