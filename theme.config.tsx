import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { Callout, Tabs, Tab, Badge, Steps, Step, ContractAddress } from './components/mdx'

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/Logo-md-orange.svg" alt="Brasa" style={{ height: 28 }} />
  </div>
)

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: 'https://github.com/firstset/brasa-docs',
  },
  docsRepositoryBase: 'https://github.com/firstset/brasa-docs/tree/main',
  footer: {
    content: (
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
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} Brasa. All rights reserved.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a
              href="https://github.com/brasa-finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/brasafinance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a href="https://app.brasa.finance" target="_blank" rel="noopener noreferrer">
              App
            </a>
            <a href="/legal/terms">Terms</a>
            <a href="/legal/privacy">Privacy</a>
          </div>
        </div>
      </div>
    ),
  },
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const url =
      process.env.NEXT_PUBLIC_SITE_URL +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#FC502C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </>
    )
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  editLink: {
    content: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  gitTimestamp: ({ timestamp }: { timestamp: Date }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  faviconGlyph: '🔥',
  components: {
    Callout,
    Tabs,
    Tab,
    Badge,
    Steps,
    Step,
    ContractAddress,
  },
} as any

export default config
