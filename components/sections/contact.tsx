"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageSquare, Github, Linkedin, Send } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adnannahid.dev@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=adnannahid.dev@gmail.com&su=Project%20Inquiry',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+880 1904-229243',
    href: 'https://wa.me/8801904229243',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@nahidhasan360',
    href: 'https://github.com/nahidhasan360',
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Nahid Hasan',
    href: 'https://www.linkedin.com/in/nahid-hasan-89403b3a2',
    color: 'from-blue-500 to-cyan-500',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let&apos;s Build Something{' '}
            <span className="text-gradient">Impactful</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your mobile app vision to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:scale-105 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} p-0.5`}>
                          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                            <method.icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{method.label}</h4>
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        </div>
                        <Send className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I&apos;m currently available for freelance projects and collaborations. 
                  Let&apos;s create something amazing together.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="group"
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/?view=cm&to=adnannahid.dev@gmail.com&su=Project%20Inquiry%20-%20Let%27s%20Work%20Together&body=Hi%20Nahid%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details%3A%0A-%20Project%20Type%3A%20%0A-%20Budget%3A%20%0A-%20Timeline%3A%20%0A-%20Description%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.",
                        "_blank"
                      )
                    }}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                  <a href="https://wa.me/8801904229243" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <a href="https://github.com/nahidhasan360" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/nahid-hasan-89403b3a2" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-20 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground relative z-10"
      >
        <p className="font-semibold text-lg text-foreground mb-2">Nahid Hasan</p>
        <p className="mb-3">Jr. Flutter Developer | Kotlin | Java | Native Mobile App Development</p>
        <p>
          <a href="mailto:adnannahid.dev@gmail.com" className="hover:text-purple-400 transition-colors">
            adnannahid.dev@gmail.com
          </a>
        </p>
      </motion.footer>
    </section>
  )
}
