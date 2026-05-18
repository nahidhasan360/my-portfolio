import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScroll } from '@/components/smooth-scroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nahid Hasan | Jr. Flutter Developer & Content Creator',
  description: 'Jr. Flutter Developer with 10 months experience. Content Creator since 2019 with 5+ years in video editing, mobile app development, and web technologies.',
  keywords: ['Flutter Developer', 'Content Creator', 'Video Editor', 'Mobile App Development', 'Kotlin Developer', 'Nahid Hasan', 'YouTube Creator'],
  authors: [{ name: 'Nahid Hasan' }],
  openGraph: {
    title: 'Nahid Hasan - Jr. Flutter Developer & Content Creator',
    description: 'Flutter Developer | Content Creator since 2019 | Video Editor',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
