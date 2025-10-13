import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { Callout, Tabs, Tab, Badge, Steps, Step, ContractAddress } from './components/mdx'

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="#FC502C" />
      <path
        d="M12 28V12h8c3.5 0 6 2 6 5.5 0 2-1 3.5-2.5 4.5 1.8.8 3 2.5 3 4.5 0 3.5-2.5 5.5-6 5.5H12zm4-14v4h4c1.5 0 2.5-.8 2.5-2s-1-2-2.5-2h-4zm0 7v5h4.5c1.8 0 3-1 3-2.5s-1.2-2.5-3-2.5H16z"
        fill="white"
      />
    </svg>
    <span style={{ fontWeight: 700, fontSize: '18px' }}>Brasa</span>
  </div>
)

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: 'https://github.com/brasa-finance',
  },
  docsRepositoryBase: 'https://github.com/brasa-finance/brasa-docs/tree/main',
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
