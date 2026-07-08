"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const techCategories = [
  {
    category: 'Cross-platform App Development',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Flutter', level: 75 },
      { name: 'Dart', level: 75 },
      { name: 'GetX', level: 65 },
      { name: 'Riverpod', level: 60 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    category: 'Native App Development',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Kotlin', level: 55 },
      { name: 'Java', level: 50 },
      { name: 'Android SDK', level: 55 },
      { name: 'Material Design', level: 65 },
    ],
  },
  {
    category: 'Web Development',
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'Next.js', level: 60 },
      { name: 'React', level: 65 },
      { name: 'TypeScript', level: 55 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'Node.js', level: 45 },
      { name: 'HTML/CSS', level: 80 },
    ],
  },
]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and creative tools I use for mobile development and content creation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.3 }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5">
            <CardHeader>
              <CardTitle className="text-center">Additional Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'CapCut',
                  'Filmora',
                  'Adobe Photoshop',
                  'After Effects',
                  'Video Editing',
                  'Content Creation',
                  'Basic Motion Graphics',
                  'UI/UX Design',
                  'Git & GitHub',
                  'Responsive Design',
                  'Problem Solving',
                ].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.03 }}
                    className="px-4 py-2 glass rounded-full text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
