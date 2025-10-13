# Brasa Docs

Official documentation for Brasa LST (Liquid Staking Token) protocol on Fogo.

🔗 **Live Site**: [docs.brasa.finance](https://docs.brasa.finance)

## About

Brasa is a liquid staking protocol that allows users to stake tokens while maintaining liquidity. This repository contains the full documentation site built with Next.js and Nextra.

## Tech Stack

- **Framework**: Next.js 14
- **Documentation**: Nextra (Docs Theme)
- **Styling**: Tailwind CSS (via Nextra)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/brasa-finance/brasa-docs.git
cd brasa-docs

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

## Project Structure

```
brasa-docs/
├── .github/          # GitHub Actions workflows
├── .husky/           # Git hooks
├── components/       # React components
│   └── mdx/         # Custom MDX components
├── pages/           # Documentation pages (MDX)
│   ├── getting-started/
│   ├── concepts/
│   ├── integrate/
│   ├── validators/
│   ├── security/
│   ├── changelog/
│   └── legal/
├── public/          # Static assets
│   ├── fonts/      # Self-hosted fonts
│   ├── og/         # Open Graph images
│   └── ...
├── styles/          # Global styles
├── next.config.mjs  # Next.js configuration
├── theme.config.tsx # Nextra theme configuration
└── tsconfig.json    # TypeScript configuration
```

## Writing Documentation

### Creating a New Page

1. Create a new `.mdx` file in the appropriate directory under `/pages`
2. Add front-matter with `title` and `description`
3. Update the `_meta.json` file in the directory to add the page to navigation

Example:

```mdx
---
title: My New Page
description: A brief description of this page
---

# My New Page

Content goes here...
```

### Using Custom Components

We provide several custom MDX components:

#### Callout

```mdx
<Callout type="info">This is an informational callout.</Callout>
```

Types: `info`, `warn`, `success`, `danger`

#### Tabs

````mdx
<Tabs>
  <Tab title="JavaScript">```js console.log('Hello') ```</Tab>
  <Tab title="TypeScript">```ts console.log('Hello') ```</Tab>
</Tabs>
````

#### Steps

```mdx
<Steps>
  <Step title="First Step">Do this first</Step>
  <Step title="Second Step">Then do this</Step>
</Steps>
```

#### Badge

```mdx
<Badge tone="success">New</Badge>
```

Tones: `neutral`, `success`, `warning`, `critical`

#### Contract Address

```mdx
<ContractAddress chain="Fogo" address="0x1234..." label="Brasa Staking Contract" />
```

## Deployment

### Vercel Setup

1. Import the repository in Vercel
2. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL`: https://docs.brasa.finance
3. Deploy!

### Custom Domain

To set up the custom domain `docs.brasa.finance`:

1. In Vercel project settings, add the domain
2. Get the CNAME target from Vercel
3. In your DNS provider, add:
   ```
   CNAME docs → [vercel-cname-target]
   ```
4. Wait for DNS propagation and SSL certificate issuance

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to the documentation.

## Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for git hooks
- **Commitlint** for conventional commits

Pre-commit hooks automatically run linting and formatting.

## CI/CD

GitHub Actions runs on every PR and push to `main`:

- ✅ Linting (ESLint)
- ✅ Type checking (TypeScript)
- ✅ Format checking (Prettier)
- ✅ Build verification
- ✅ Link checking

## Assets

### Fonts

Self-hosted Inter fonts are located in `/public/fonts/`. Download from [Google Fonts](https://fonts.google.com/specimen/Inter) or [Inter GitHub](https://github.com/rsms/inter).

Required files:

- `inter-regular.woff2`
- `inter-semibold.woff2`
- `inter-bold.woff2`

### Open Graph Images

OG images (1200x630px) should be placed in `/public/og/`. These are used for social media previews.

## License

This documentation is open source under the MIT License.

## Support

- **Documentation Issues**: [GitHub Issues](https://github.com/brasa-finance/brasa-docs/issues)
- **Protocol Questions**: [Discord](https://discord.gg/brasa)
- **Email**: [support@brasa.finance](mailto:support@brasa.finance)

---

Built with ❤️ by the Brasa team.
