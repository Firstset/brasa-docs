import React from 'react'
import type { ComponentProps } from 'react'
import { LastUpdated, Link, Navbar } from 'nextra-theme-docs'

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/Logo-md-orange.svg" alt="Brasa" style={{ height: 28 }} />
  </div>
)

type LayoutProps = ComponentProps<(typeof import('nextra-theme-docs'))['Layout']>

const themeConfig = {
  navbar: <Navbar logo={<Logo />} projectLink="https://github.com/firstset/brasa-docs" />,
  docsRepositoryBase: 'https://github.com/firstset/brasa-docs/tree/main',
  footer: (
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
          <Link
            href="https://github.com/brasa-finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/brasafinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://app.brasa.finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/legal/privacy">Privacy</Link>
        </div>
      </div>
    </div>
  ),
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  editLink: 'Edit this page on GitHub →',
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: 'Back to top',
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  lastUpdated: <LastUpdated>Last updated on</LastUpdated>,
} satisfies Partial<Omit<LayoutProps, 'children' | 'pageMap'>>

export default themeConfig
export { Logo }
