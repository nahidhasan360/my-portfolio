"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, TrendingUp, Zap, Shield } from 'lucide-react'

const caseStudyData = {
  title: 'Quranity - Modern Islamic Digital Experience',
  overview: 'Quranity helps Muslims reconnect with Islamic knowledge through cinematic storytelling, Qur\'anic learning tools, educational Shorts, and Qalam AI. A unified platform designed to create a calmer digital space centered around reflection, learning, and spiritual growth for today\'s generation.',
  problem: [
    'Muslims face endless scrolling and constant digital distractions',
    'Islamic content often lacks emotional engagement and modern presentation',
    'Scattered resources - users need multiple apps for different Islamic content',
    'Traditional Islamic apps don\'t resonate with modern generation',
  ],
  solution: [
    'Created unified platform combining stories, Qur\'an, Shorts, and AI in one app',
    'Designed calm, distraction-free interface with intentional user experience',
    'Built cinematic storytelling engine for immersive Islamic narratives',
    'Integrated Qalam AI for educational Q&A and personalized learning',
  ],
  challenges: [
    {
      title: 'Cinematic Storytelling',
      description: 'Created immersive video experience with smooth playback, seamless transitions, and emotionally engaging Islamic narratives',
      icon: Zap,
    },
    {
      title: 'Unified Experience',
      description: 'Integrated multiple content types (Stories, Qur\'an, Shorts, AI) into one cohesive, distraction-free platform',
      icon: TrendingUp,
    },
    {
      title: 'Calm Interface Design',
      description: 'Built intentional UI prioritizing reflection over endless scrolling, with modern aesthetics respecting Islamic values',
      icon: Shield,
    },
  ],
  architecture: {
    pattern: 'Clean Architecture with Modern State Management',
    layers: ['Presentation Layer (Cinematic UI)', 'Domain Layer (Content & AI Logic)', 'Data Layer (Multi-source Integration)'],
    stateManagement: 'Reactive state management for seamless experience',
    database: 'Hybrid storage: SQLite + Cloud for offline-first approach',
  },
  apiIntegration: [
    'Qalam AI integration for educational Q&A',
    'Video streaming service for cinematic stories',
    'Qur\'an API for reading and learning tools',
    'Firebase for analytics and content delivery',
    'Custom backend for Shorts and content management',
  ],
  performance: [
    'Smooth video playback with adaptive streaming',
    'Instant content loading with smart caching',
    'Minimal battery consumption during extended use',
    'Optimized for low-end devices',
    'Distraction-free, intentional user flow',
  ],
  deployment: [
    'Continuous content updates via Firebase',
    'A/B testing for user experience optimization',
    'Automated quality checks for Islamic content accuracy',
    'Beta testing with Muslim community feedback',
    'Regular updates guided by Islamic values',
  ],
  impact: [
    'Helping Muslims reconnect with faith',
    'Modern Islamic digital experience',
    'Educational & reflective platform',
    'Built with sincerity & respect',
  ],
}

export function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="case-study" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Deep Dive: <span className="text-gradient">Case Study</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A detailed look at the engineering process behind a production app
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">{caseStudyData.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{caseStudyData.overview}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-400">Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {caseStudyData.problem.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {caseStudyData.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {caseStudyData.challenges.map((challenge, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <challenge.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="font-semibold">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">App Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Pattern</h4>
                  <p className="text-muted-foreground">{caseStudyData.architecture.pattern}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Architecture Layers</h4>
                  <div className="space-y-2">
                    {caseStudyData.architecture.layers.map((layer, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-muted-foreground">{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">State Management</h4>
                    <p className="text-muted-foreground">{caseStudyData.architecture.stateManagement}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Database</h4>
                    <p className="text-muted-foreground">{caseStudyData.architecture.database}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* API Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {caseStudyData.apiIntegration.map((api, i) => (
                    <div key={i} className="flex items-center gap-2 glass p-3 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{api}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance & Deployment */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseStudyData.performance.map((metric, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-cyan-400">▸</span>
                        <span className="text-muted-foreground">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Deployment Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseStudyData.deployment.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-purple-400">▸</span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl">Final Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {caseStudyData.impact.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">
                        {item.split(' ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
