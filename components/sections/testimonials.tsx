"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    feedback: 'Exceptional Flutter developer! Delivered our e-commerce app ahead of schedule with outstanding quality. The app handles thousands of transactions daily without any issues.',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, LogiTech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5,
    feedback: 'The route optimization app exceeded our expectations. Reduced delivery times by 35% and the real-time tracking works flawlessly. Highly professional and responsive.',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Founder, Islamic Apps',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    rating: 5,
    feedback: 'Quranity is a masterpiece! The audio synchronization is perfect, and the offline mode works seamlessly. Users love it and the ratings speak for themselves.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO, DeliverNow',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5,
    feedback: 'Built our entire delivery platform from scratch. The architecture is solid, performance is excellent, and the code quality is top-notch. A true professional.',
  },
  {
    name: 'David Kim',
    role: 'Startup Founder',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
    feedback: 'Transformed our idea into a beautiful, functional app. Great communication, clean code, and delivered exactly what we needed. Will definitely work together again.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Project Lead, FinTech Co',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    rating: 5,
    feedback: 'Impressive technical skills and attention to detail. The payment integration was complex but handled perfectly. App is stable and users love the experience.',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-transform relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16" />
                </div>
                
                <CardContent className="pt-6">
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
