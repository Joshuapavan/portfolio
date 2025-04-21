import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Websites from './components/Websites'
import Preloader from './components/Preloader'
import CCLogo from "../src/assets/company_logos/cognitive_clouds_logo.png"
import MagicLogo from "../src/assets/company_logos/magic_edtech_logo.jpeg"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const techStack = [
    {
      name: 'Java',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
    },
    {
      name: 'Spring Boot',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg'
    },
    {
      name: 'Ruby on Rails',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-plain.svg'
    },
    {
      name: 'React',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express',
      logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
      className: 'invert brightness-0'
    },
    {
      name: 'Flutter',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
    },
    {
      name: 'Kotlin',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    },
    {
      name: 'Docker',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
    },
    {
      name: 'MySQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'Dart',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg'
    },
    {
      name: 'Android',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg'
    },
    {
      name: 'Linux',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'
    }
  ]

  const experiences = [
    {
      date: "Sept 2024 - Present",
      role: "Senior Software Engineer",
      company: "Magic EdTech",
      logo: MagicLogo,
      description: "Currently contributing as a Lead Software Engineer, leveraging extensive experience in full-stack development and system architecture.",
      technologies: [
        'Rails', 'Flutter', 'Dart', 'React', 'PostgreSQL', 
        'MySQL', 'Docker', 'Express', 'Node.js', 'Tailwind CSS'
      ]
    },
    {
      date: "Feb 2022 - Sept 2024",
      role: "Software Engineer",
      company: "CognitiveClouds",
      logo: CCLogo,
      description: "As a versatile Software Engineer, I seamlessly transitioned across multiple dynamic projects, taking on diverse roles that showcased my expertise. From writing automation test scripts using Selenium to Backend API development and Ensuring safe deployment of latest builds, I played a pivotal role in ensuring the success and efficiency of each project. While excelling in Frameworks such as Rails, SpringBoot, ReactJS. Expanding my skill set and demonstrating a commitment to continuous learning and adaptability.",
      technologies: [
        'Spring Boot', 'Rails', 'PostgreSQL', 'MySQL', 
        'React', 'Java', 'Git'
      ]
    }
  ]

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.utils.toArray('section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          }
        )
      })
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <>
            <Navigation />
            <Hero />
            <About experiences={experiences} />
            <Skills techStack={techStack} />
            <Projects />
            <Websites/>
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
