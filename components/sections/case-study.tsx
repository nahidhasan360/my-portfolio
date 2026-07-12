"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, TrendingUp, Zap, Shield, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">{caseStudyData.overview}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="https://play.google.com/store/apps/details?id=com.quranityllc.quranity&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="text-base h-12 px-6">
                      <Play className="mr-2 h-5 w-5 fill-current" />
                      Get it on Google Play
                    </Button>
                  </a>
                  <a href="https://apps.apple.com/us/app/quranity/id6764633566" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="text-base h-12 px-6">
                      <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 384 512">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                      Download on App Store
                    </Button>
                  </a>
                </div>
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
