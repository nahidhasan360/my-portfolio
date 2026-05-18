"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    year: '2024-2025',
    title: 'Jr. Flutter Developer',
    company: 'Spark Tech Agency',
    type: '1 Year Experience',
    location: 'Bangladesh',
    description: 'Working as a Junior Flutter Developer at Spark Tech Agency, building production-ready mobile applications with modern architecture and best practices.',
    achievements: [
      '1 year of professional Flutter development',
      'Built multiple client projects with Flutter & GetX',
      'Collaborated with team on large-scale applications',
      'Implemented Firebase, REST APIs, and third-party integrations',
    ],
  },
  {
    year: '2024',
    title: 'Flutter Developer',
    company: 'Freelance',
    type: 'Mobile Development',
    location: 'Remote',
    description: 'Building mobile applications with Flutter and native Android development with Kotlin. Creating production-ready apps for clients.',
    achievements: [
      '10 months of hands-on Flutter development',
      'Built 8+ mobile applications',
      'Implemented Firebase and REST API integrations',
    ],
  },
  {
    year: '2024',
    title: 'Native Android Development',
    company: 'Freelance',
    type: 'Kotlin & Java',
    location: 'Bangladesh',
    description: 'Developed native Android applications using Kotlin and Java, following Material Design guidelines and modern architecture patterns.',
    achievements: [
      'Built native Android apps with Kotlin',
      'Implemented MVVM architecture',
      'Integrated third-party APIs and SDKs',
    ],
  },
  {
    year: '2023-2024',
    title: 'Web Development',
    company: 'Freelance',
    type: 'WordPress & Web Technologies',
    location: 'Remote',
    description: 'Developed and maintained WordPress websites and web applications. Created responsive designs and custom themes.',
    achievements: [
      'Created 10+ WordPress websites',
      'Customized themes and plugins',
      'Improved site performance and SEO',
    ],
  },
  {
    year: '2019-Present',
    title: 'Content Creator & Video Editor',
    company: 'Self-Employed',
    type: '5+ Years Experience',
    location: 'Bangladesh',
    description: 'Professional content creator since 2019. Specialized in video editing, social media content, and tech-related content creation.',
    achievements: [
      '5+ years of content creation experience',
      'Edited 100+ videos for various platforms',
      'Grew social media presence organically',
    ],
  },
  {
    year: '2019-2023',
    title: 'Video Editing & Production',
    company: 'Freelance',
    type: 'Content Creation',
    location: 'Bangladesh',
    description: 'Created engaging video content for YouTube, social media, and clients. Mastered Adobe Premiere Pro and other editing tools.',
    achievements: [
      'Produced content for multiple platforms',
      'Developed unique editing style',
      'Built portfolio of 100+ edited videos',
    ],
  },
  {
    year: '2019',
    title: 'Started Content Creation Journey',
    company: 'Personal',
    type: 'Beginning',
    location: 'Bangladesh',
    description: 'Began journey in content creation and video editing. Learned fundamentals of video production, editing, and storytelling.',
    achievements: [
      'Learned video editing from scratch',
      'Created first YouTube videos',
      'Built foundation in content creation',
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of building impactful mobile applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass flex items-center justify-center border-2 border-purple-500 z-10">
                    <span className="text-sm font-bold text-gradient">{exp.year}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          {exp.company && (
                            <p className="text-sm font-semibold text-cyan-400 mb-1">{exp.company}</p>
                          )}
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400 mt-1">✓</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
