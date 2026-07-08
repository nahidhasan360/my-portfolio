"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto z-10 w-full"
      >
        {/* Mobile: profile on top, text below | Desktop: side by side */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left w-full">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs">Available for Projects</span>
            </motion.div>

            {/* Small Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-purple-400 font-semibold mb-2 uppercase tracking-wider text-xs"
            >
              Jr. Flutter Developer
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            >
              Nahid Hasan
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I am a passionate Flutter Developer with over a year of experience building beautiful, high-performance cross-platform applications. I specialize in creating clean architectures, smooth UI/UX, and also have experience in native Android development using Kotlin and Java.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <a href="#projects">
                <Button size="sm" className="group text-xs sm:text-sm">
                  View Projects
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="sm" variant="glass" className="text-xs sm:text-sm">
                  <Mail className="mr-1.5 h-3.5 w-3.5" />
                  Contact
                </Button>
              </a>
              <a href="https://wa.me/8801904229243" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <a href="https://github.com/nahidhasan360" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 w-8 h-8">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/nahid-hasan-89403b3a2" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 w-8 h-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center w-full"
          >
            {/* Decorative blobs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-2xl"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl"
              />
            </div>

            {/* Image Container */}
            <div className="relative z-10 w-full">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] aspect-square mx-auto">

                {/* Profile Image */}
                <Image
                  src="/hero-illustration-transparent.png"
                  alt="Developer at Desk Illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Decorative Shapes */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 opacity-80"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 -right-5 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 border-4 border-green-500 rounded-lg rotate-45 opacity-60"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
