"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Smartphone, Play } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Quranity',
    subtitle: 'AI Powered Islamic App',
    description: 'Modern Islamic platform combining cinematic storytelling, Qur\'anic learning tools, educational Shorts, and Qalam AI for a meaningful spiritual experience',
    logo: '/quranity.png',
    features: ['Cinematic Islamic Stories', 'Qur\'an Reading Tools', 'Educational Shorts', 'Qalam AI Q&A', 'Distraction-Free UI'],
    tech: ['Flutter', 'Dart', 'GetX', 'Firebase', 'AI Integration', 'Video Streaming', 'SQLite'],
    architecture: 'Clean Architecture with GetX State Management',
    performance: 'Immersive experience with calm, intentional design',
    links: {
      github: 'https://github.com/nahidhasan360/quranity_app_v1',
      playStore: 'https://play.google.com/store/apps/details?id=com.quranityllc.quranity&pcampaignid=web_share',
    }
  },
  {
    title: 'Right Route',
    subtitle: '',
    description: 'Advanced delivery route optimization using Google Maps and OpenStreetMap integration',
    logo: '/right-route.png',
    features: ['Real-time Tracking', 'Route Optimization', 'Multi-stop Planning', 'ETA Calculation'],
    tech: ['Flutter', 'GetX', 'Google Maps API', 'OpenStreetMap', 'Firebase'],
    architecture: 'MVVM with GetX State Management',
    performance: 'Real-time updates with <500ms latency',
    links: {
      github: 'https://github.com/nahidhasan360/Right_route_v5',
    }
  },
  {
    title: 'Cupid AI',
    subtitle: 'AI Powered Dating App',
    description: 'Smart dating application powered by AI for intelligent matching, personalized recommendations, and meaningful connections',
    logo: '/cupid_ai.png',
    features: ['AI Smart Matching', 'Personalized Recommendations', 'Real-time Chat', 'Profile Discovery', 'Push Notifications'],
    tech: ['Flutter', 'GetX', 'Firebase', 'AI/ML Integration', 'WebSocket', 'Cloud Storage'],
    architecture: 'Clean Architecture with GetX State Management',
    performance: '<100ms message delivery, smooth animations',
    links: {
      github: 'https://github.com/nahidhasan360/Ai-dating-App',
    }
  },
  {
    title: 'Chat Application',
    subtitle: '',
    description: 'Real-time messaging app with end-to-end encryption and media sharing',
    logo: 'chat',
    features: ['Real-time Messaging', 'Media Sharing', 'Group Chats', 'Voice Messages'],
    tech: ['Flutter', 'GetX', 'Firebase', 'WebSocket', 'Cloud Storage'],
    architecture: 'Real-time Architecture with GetX State Management',
    performance: '<100ms message delivery',
    links: {
      github: 'https://github.com/nahidhasan360/Ai-dating-App',
    }
  },
  {
    title: 'TikTok Downloader',
    subtitle: 'Share & Auto Download',
    description: 'Download TikTok videos without watermark. Share directly from TikTok app — auto redirects and starts downloading instantly with one tap.',
    logo: '⬇️',
    features: ['Share Intent Integration', 'Auto Redirect from TikTok', 'One-tap Download', 'No Watermark', 'Auto Download Start'],
    tech: ['Flutter', 'GetX', 'Android Intent', 'REST API', 'Local Storage'],
    architecture: 'Clean Architecture with GetX State Management',
    performance: 'Instant redirect, fast download speed',
    links: {
      github: 'https://github.com/nahidhasan360/video_downloader',
    }
  },
  {
    title: 'Smart Alarm',
    subtitle: 'Location-Aware Alarm App',
    description: 'A smart alarm app that detects your current location and displays it as a readable address on the home screen. Set alarms with date & time, manage them with toggle on/off, swipe-to-delete, and get notified right on time.',
    logo: 'alarm',
    features: [
      'Live Location Detection',
      'Address Display on Home',
      'Date & Time Alarm Picker',
      'Alarm List View',
      'Toggle On/Off',
      'Swipe to Delete',
      'Exact Time Notifications',
    ],
    tech: ['Flutter', 'GetX', 'Local Notifications', 'Geolocator', 'Geocoding', 'SQLite'],
    architecture: 'Clean Architecture with GetX State Management',
    performance: 'Precise alarm firing with background service',
    links: {
      github: 'https://github.com/nahidhasan360/SmartAlarm',
    }
  },
]

export function FeaturedApps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready mobile applications built with modern architecture and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:glow-purple flex flex-col">
                <div className="relative h-64 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.logo && project.logo.startsWith('/') ? (
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={120}
                        height={120}
                        className="object-cover shadow-lg"
                      />
                    ) : project.logo === 'chat' ? (
                      <div className="relative flex items-center justify-center">
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12C8 9.79 9.79 8 12 8H52C54.21 8 56 9.79 56 12V40C56 42.21 54.21 44 52 44H36L24 56V44H12C9.79 44 8 42.21 8 40V12Z" fill="white" fillOpacity="0.95"/>
                            <circle cx="22" cy="26" r="3" fill="#7C3AED"/>
                            <circle cx="32" cy="26" r="3" fill="#7C3AED"/>
                            <circle cx="42" cy="26" r="3" fill="#7C3AED"/>
                          </svg>
                        </div>
                      </div>
                    ) : project.logo === 'alarm' ? (
                      <div className="relative flex items-center justify-center">
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-2xl">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="34" r="20" fill="white" fillOpacity="0.95"/>
                            <path d="M32 20V34L40 38" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 18L20 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M50 18L44 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M24 8C24 8 28 6 32 6C36 6 40 8 40 8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <circle cx="32" cy="34" r="2.5" fill="#EA580C"/>
                          </svg>
                        </div>
                      </div>
                    ) : project.logo ? (
                      <span className="text-8xl">{project.logo}</span>
                    ) : (
                      <Smartphone className="w-32 h-32 text-white/40" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.subtitle && (
                    <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider -mt-1">
                      {project.subtitle}
                    </p>
                  )}
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col flex-1">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full glass"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Architecture</h4>
                    <p className="text-sm">{project.architecture}</p>
                  </div>

                  {/* Performance */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Performance</h4>
                    <p className="text-sm">{project.performance}</p>
                  </div>

                  {/* Links - pushed to bottom */}
                  <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {(project.links as any).playStore && (
                      <a href={(project.links as any).playStore} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline">
                          <Play className="mr-2 h-4 w-4 fill-current" />
                          Play Store
                        </Button>
                      </a>
                    )}
                    {project.links.github && project.links.github !== '#' ? (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </a>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
