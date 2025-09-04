import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, MessageCircle, Twitter, Award, Users, Code2, BookOpen, Calendar, Download, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingActions } from "@/components/floating-actions"
import { EnhancedCard } from "@/components/enhanced-card"

const featuredProjects = [
  {
    id: 4,
    name: "Ethereum Certification System",
    description: "Decentralized application for certification of courses with blockchain verification",
    type: "dApp",
    image: "/images/certificados.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certification-system-iPsXlnI93GmBO6jVZx1mUlXQQJZl55.mp4",
    link: "certificados.aragua.org",
    repo: "github.com/ethereumaragua/certificados",
    tags: ["Solidity", "Education", "Certificates", "dApp"],
    highlight: "🏆 Featured Project",
  },
  {
    id: 6,
    name: "UBI Burner",
    description: "Universal Basic Income deflationary tool",
    type: "DeFi Tool",
    image: "/images/ubiburner.jpg",
    link: "ubiburner.netlify.app",
    repo: "github.com/santanaruben/ubiburner",
    tags: ["Solidity", "UBI", "DeFi", "Economics"],
    highlight: "🔥 Featured Project",
  },
]

const projects: Array<{
  id: number
  name: string
  description: string
  type: string
  link?: string
  repo?: string
  tags: string[]
  image: string
}> = [
  {
    id: 0,
    name: "ETH Aragua Landing",
    description: "Ethereum Aragua community page",
    type: "Community Platform",
    link: "aragua.org",
    repo: "github.com/ethereumaragua/landing",
    tags: ["Next.js", "Community", "Web3"],
    image: "/images/etharagua.jpg",
  },
  {
    id: 1,
    name: "Blog Platform",
    description: "Ethereum Aragua Blog with educational content and privacy articles",
    type: "Content Platform",
    link: "blog.aragua.org",
    repo: "github.com/ethereumaragua/blog",
    tags: ["Blog", "Content", "Web3"],
    image: "/images/blog.jpg",
  },
  {
    id: 2,
    name: "ETH Venezuela Landing",
    description: "Ethereum Venezuela community page",
    type: "Community Platform",
    link: "ethvenezuela.org",
    repo: "github.com/ethvenezuela/landing",
    tags: ["Next.js", "Community", "Web3"],
    image: "/images/eth-venezuela.png",
  },
  {
    id: 3,
    name: "Faucet",
    description:
      "An EVM faucet site made with solidity, next, typescript, and tailwind to withdraw funds from a selected chain.",
    type: "DeFi Tool",
    link: "faucet.aragua.org",
    repo: "github.com/ethereumaragua/faucet",
    tags: ["Solidity", "Next.js", "TypeScript", "DeFi"],
    image: "/images/faucet.jpg",
  },
  {
    id: 4,
    name: "Ethereum Certification System",
    description: "Decentralized application for certification of courses",
    type: "dApp",
    link: "certificados.aragua.org",
    repo: "github.com/ethereumaragua/certificados",
    tags: ["Solidity", "Education", "Certificates", "dApp"],
    image: "/images/certificados.jpg",
  },
  {
    id: 5,
    name: "PlayerBlocks",
    description: "Play to Earn community",
    type: "Gaming Platform",
    link: "playerblocks.netlify.app",
    repo: "github.com/santanaruben/playerblocks",
    tags: ["Gaming", "P2E", "Community"],
    image: "/images/playerblocks.jpg",
  },
  {
    id: 6,
    name: "UBI Burner",
    description: "Universal Basic Income deflationary tool",
    type: "DeFi Tool",
    link: "ubiburner.netlify.app",
    repo: "github.com/santanaruben/ubiburner",
    tags: ["Solidity", "UBI", "DeFi", "Economics"],
    image: "/images/ubiburner.jpg",
  },
  {
    id: 7,
    name: "Vouch Market",
    description: "Validate profiles in Proof Of Humanity and get rewarded",
    type: "dApp",
    link: "vouchmarket.netlify.app",
    repo: "github.com/santanaruben/vouchmarket",
    tags: ["Solidity", "Identity", "DAO", "Rewards"],
    image: "/images/vouchmarket.jpg",
  },
  {
    id: 8,
    name: "CryptoJustice",
    description: "System for Legal Procedures using Ethereum and React",
    type: "Legal Tech",
    link: undefined,
    repo: "github.com/santanaruben/cryptojustice",
    tags: ["Solidity", "Legal", "React", "Justice"],
    image: "/images/cryptojustice.jpg",
  },
  {
    id: 9,
    name: "Toll Road System",
    description: "Ethereum regulated system of toll roads on which vehicles pay to drive on them",
    type: "Smart Contract",
    link: "git.academy.b9lab.com/ETH-SUB-exam-projects/rubensantana-code",
    repo: "github.com/santanaruben/TollRoadSystem",
    tags: ["Solidity", "Transportation", "Payments"],
    image: "/images/tollroad-system.jpg",
  },
  {
    id: 10,
    name: "Ethereum Rock Paper Scissors Game",
    description:
      "Classic game where the players bet an ETH amount, then each player submits their move, and the contract rewards the winner with the Ether wagered",
    type: "Gaming dApp",
    link: undefined,
    repo: "github.com/santanaruben/rockPaperScissors",
    tags: ["Solidity", "Gaming", "Betting"],
    image: "/images/rockpaperscissors.png",
  },
  {
    id: 11,
    name: "Descentralized Library",
    description:
      "Ethereum library system where users can have book's ownership and transfer their books (ERC-721) to the library and to other users",
    type: "NFT Platform",
    link: undefined,
    repo: "github.com/santanaruben/ethereum/tree/master/projects/biblioteca",
    tags: ["Solidity", "ERC-721", "NFT", "Library"],
    image: "/images/library-system.jpg",
  },
  {
    id: 12,
    name: "Descentralized Store",
    description: "Ethereum Store system, using an ERC-20 as the coin necesary to make transactions",
    type: "eCommerce dApp",
    link: undefined,
    repo: "github.com/santanaruben/store",
    tags: ["Solidity", "ERC-20", "eCommerce"],
    image: "/images/store-system.png",
  },
  {
    id: 13,
    name: "Armani Engineering Corp",
    description: "Industrial automation and AI services company website",
    type: "Business Website",
    image: "/images/armani-engr.jpg",
    link: "armani-engr.com",
    repo: undefined,
    tags: ["eCommerce", "Business", "Automation", "AI"],
  },
  {
    id: 14,
    name: "Miranda Designs",
    description: "Engineering design and renewable energy services company",
    type: "Corporate Site",
    image: "/images/designsmiranda.jpg",
    link: "designsmiranda.com",
    repo: undefined,
    tags: ["Business", "Design", "Engineering", "Solar"],
  },
  {
    id: 15,
    name: "Business Website",
    description: "Enterprise website for electrical services",
    type: "Corporate Site",
    link: "sautek.net",
    repo: undefined,
    tags: ["Business", "Electrical", "Services"],
    image: "/images/sautek.jpg",
  },
  {
    id: 16,
    name: "Splitter System",
    description: "Amount splitter application for ethereum",
    type: "DeFi Tool",
    link: undefined,
    repo: "github.com/santanaruben/splitter",
    tags: ["Solidity", "DeFi", "Payments"],
    image: "/images/splitter-system.png",
  },
  {
    id: 17,
    name: "Remittance System",
    description: "Remittance application for ethereum",
    type: "FinTech dApp",
    link: undefined,
    repo: "github.com/santanaruben/remittance",
    tags: ["Solidity", "Remittance", "FinTech"],
    image: "/images/remittance.jpg",
  },
  {
    id: 18,
    name: "Corporate Shortener",
    description: "A corporate link shortener with statistics page, and traffic location",
    type: "Utility Tool",
    link: undefined,
    repo: undefined,
    tags: ["Analytics", "URL", "Statistics"],
    image: "/images/armani-shortener.png",
  },
  {
    id: 19,
    name: "Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    type: "AI Platform",
    link: "forprompts.vercel.app",
    repo: "github.com/santanaruben/project_promptopia",
    tags: ["AI", "Prompts", "Community", "Next.js"],
    image: "/images/promptopia.jpg",
  },
  {
    id: 20,
    name: "Cars Showcase",
    description:
      "A site made with next, typescript, and tailwind that manages the data of a car rental or a car sales store.",
    type: "Business Platform",
    link: "carscabinet.vercel.app",
    repo: "github.com/santanaruben/cars_showcase",
    tags: ["Next.js", "TypeScript", "Tailwind", "Business"],
    image: "/images/cars-showcase.png",
  },
]

const skills = [
  { category: "Blockchain", items: ["Solidity", "Web3.js", "Ethers.js", "Viem.js", "Hardhat", "Foundry", "Truffle"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "Shadcn/ui"] },
  { category: "Backend", items: ["Node.js", "Express", "API Development", "Database Design"] },
  { category: "Web3 Tools", items: ["Wagmi", "RainbowKit", "Scaffold-ETH", "The Graph"] },
  { category: "Standards", items: ["ERC-20", "ERC-721", "ERC-1155", "DeFi Protocols", "DAO Governance"] },
]

const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "B9LAB Certified",
    description: "Ethereum Developer Certification from London's premier blockchain academy",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Leader",
    description: "Core ETH Venezuela & Co-founder ETH Aragua, reaching communities and developers",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Open Source Contributor",
    description: "Multiple projects built with opensource principles, and contributing to Web3 education",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation and Theme Toggle */}
      <Navigation />
      <ScrollToTop />
      <FloatingActions />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="fade" delay={200}>
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-emerald-500/20 hover:ring-emerald-500/40 transition-all duration-300">
                <Image
                  src="/images/ruben-profile.png"
                  alt="Ruben Santana - Blockchain Developer"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 text-balance bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Ruben Santana
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 lg:mb-6 text-balance">
                Smart Contract Engineer & Computer Science Professor
              </p>
              <p className="text-base sm:text-lg lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-pretty">
                Experienced EVM developer and educator. Certified blockchain specialist building open-source solutions and contributing to
                the decentralized ecosystem. Core Member ETH Venezuela & Co-founder ETH Aragua.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-300"
              >
                <Link href="#featured">View Featured Work</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:border-emerald-300 hover:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link 
                  href="/docs/CV_Ruben_Santana_2025_en.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:border-emerald-300 hover:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <div className="flex justify-center gap-4 sm:gap-6">
              <Link
                href="https://t.me/rubensantana"
                className="text-muted-foreground hover:text-emerald-600 hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/0xrubens"
                className="text-muted-foreground hover:text-emerald-600 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rubensantana/"
                className="text-muted-foreground hover:text-emerald-600 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/santanaruben"
                className="text-muted-foreground hover:text-emerald-600 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50 dark:bg-emerald-950/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Achievements</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="text-center p-6 border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-emerald-600 hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Showcasing my most impactful work in blockchain development, community building, and business solutions.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 200}>
                <EnhancedCard project={project} featured={true} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Insights on blockchain development, Web3 education, and the future of decentralized technology.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="/images/tornado.png"
                  alt="Privacy and Tornado Cash"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 2024</span>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                  Privacy in DeFi: The Tornado Cash Case
                </CardTitle>
                <CardDescription>
                  Exploring the implications of privacy tools in decentralized finance and regulatory challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild className="hover:border-emerald-300 hover:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400">
                  <Link href="https://blog.aragua.org/blogs/la-privacidad-como-un-derecho-fundamental-el-caso-tornado-cash-y-las-sanciones-de-la-ofac" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="/images/jardin-infinito.jpg"
                  alt="The Infinite Garden"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2025</span>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                  The Infinite Garden
                </CardTitle>
                <CardDescription>
                  A metaphor capturing Ethereum's essence: A garden is never something you finish, but something you
                  always begin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild className="hover:border-emerald-300 hover:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400">
                  <Link
                    href="https://blog.aragua.org/blogs/el-jardin-infinito"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="/images/seminario-blockchain.jpg"
                  alt="Blockchain Seminar 2025: Onboarding"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2025</span>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                  Blockchain Seminar 2025: Onboarding
                </CardTitle>
                <CardDescription>
                  A comprehensive journey introducing blockchain technology and practical applications. The event
                  brought together professors and tech enthusiasts in a learning, networking, and professional
                  development space focused on Web3 initiation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild className="hover:border-emerald-300 hover:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400">
                  <Link
                    href="https://blog.aragua.org/blogs/seminario-blockchain-2025-onboarding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="https://blog.aragua.org" target="_blank" rel="noopener noreferrer">
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Backend, Smart Contract Engineer</h4>
                  <p className="text-sm text-muted-foreground">HODL Markets • 2025 - Present</p>
                  <p className="text-sm">
                    Specialized development of secure smart contracts and DeFi protocols. Conducting security reviews
                    and optimizing code for efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Professor, Blockchain Certificate Program</h4>
                  <p className="text-sm text-muted-foreground">UCAB • 2024</p>
                  <p className="text-sm">Leading Solidity training courses and Web3 development methodologies.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Professor, Ethereum Developer Pack</h4>
                  <p className="text-sm text-muted-foreground">ETHKIPU • 2024</p>
                  <p className="text-sm">Teaching advanced Solidity programming and security principles.</p>
                </div>
                <div>
                  <h4 className="font-semibold">SAP Development Analyst</h4>
                  <p className="text-sm text-muted-foreground">ArcelorMittal • 2016-2018</p>
                  <p className="text-sm">
                    Integrating systems, analyzing, programming, and testing SAP and Oracle applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Professor, Computer Science</h4>
                  <p className="text-sm text-muted-foreground">UPTA • 2013 - Present</p>
                  <p className="text-sm">
                    Managing computer projects, teaching algorithms, programming, and blockchain development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Ethereum Developer Certification</h4>
                  <p className="text-sm text-muted-foreground">B9LAB Academy, London • 2019-2020</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600">Master in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">UPTA, Venezuela • 2018-2020</p>
                  <p className="text-sm text-emerald-600/80 font-medium">Advanced studies in computational systems and software engineering</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600">Engineering in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">UPTA, Venezuela • 2008-2013</p>
                  <p className="text-sm text-emerald-600/80 font-medium">Comprehensive foundation in computer science and engineering principles</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-4">Some Projects</h2>
            <p className="text-center text-muted-foreground mb-12">
              Portfolio of blockchain applications, business solutions, and community platforms.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={(index % 6) * 100}>
                <EnhancedCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              Interested in blockchain development, Web3 education, or collaboration opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-emerald-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Telegram</h4>
                      <Link
                        href="https://t.me/rubensantana"
                        className="text-emerald-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @rubensantana
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 text-emerald-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <Link
                        href="https://www.linkedin.com/in/rubensantana/"
                        className="text-emerald-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect with me
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <Twitter className="w-6 h-6 text-emerald-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Twitter</h4>
                      <Link
                        href="https://x.com/0xrubens"
                        className="text-emerald-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check my timeline
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <Github className="w-6 h-6 text-emerald-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <Link
                        href="https://github.com/santanaruben"
                        className="text-emerald-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See my repos
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Ruben Santana. Building the Web3 through open-source development and education.</p>
        </div>
      </footer>
    </div>
  )
}
