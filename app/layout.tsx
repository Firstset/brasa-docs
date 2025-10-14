import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

import 'nextra-theme-docs/style.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.brasa.finance'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Brasa Docs',
    template: '%s | Brasa Docs',
  },
  description: 'Brasa LST documentation site',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FC502C',
}

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/Logo-md-orange.svg" alt="Brasa" style={{ height: 28 }} />
  </div>
)

const navbar = (
  <Navbar logo={<Logo />} projectLink="https://github.com/firstset/brasa-docs" />
)

const footer = (
  <Footer>
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <p style={{ margin: 0 }}>© 2025 Brasa Finance. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://brasa.finance" target="_blank" rel="noopener noreferrer">
            Website
          </a>
          <a
            href="https://twitter.com/brasafinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://github.com/brasa-finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/legal/terms">Terms</Link>
        </div>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={inter.className}>
      <Head
        color={{
          hue: 14,
          saturation: 100,
          lightness: 47,
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/firstset/brasa-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
