# Contributing to Brasa Docs

Thank you for your interest in contributing to Brasa documentation! This guide will help you get started.

## Code of Conduct

Be respectful, constructive, and professional in all interactions.

## How to Contribute

### Reporting Issues

If you find errors, broken links, or areas that need improvement:

1. Check if an issue already exists
2. Open a new issue with:
   - Clear description of the problem
   - Page URL or file path
   - Expected vs actual behavior
   - Screenshots if relevant

### Suggesting Improvements

We welcome suggestions for:

- New documentation pages
- Clarifications to existing content
- Additional examples or use cases
- Better explanations of complex topics

Open an issue with the `enhancement` label.

### Submitting Changes

1. **Fork the repository**

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/brasa-docs.git
   cd brasa-docs
   ```

3. **Create a branch**

   ```bash
   git checkout -b docs/your-improvement
   ```

   Branch naming:
   - `docs/` for documentation updates
   - `fix/` for bug fixes
   - `feat/` for new features

4. **Install dependencies**

   ```bash
   pnpm install
   ```

5. **Make your changes**
   - Edit MDX files in `/pages`
   - Follow the style guide below
   - Test locally with `pnpm dev`

6. **Test your changes**

   ```bash
   pnpm lint        # Check for linting errors
   pnpm typecheck   # Check TypeScript types
   pnpm build       # Verify build succeeds
   ```

7. **Commit your changes**

   We use Conventional Commits:

   ```bash
   git commit -m "docs: improve quickstart guide examples"
   git commit -m "fix: correct contract address in integration page"
   ```

   Format: `type(scope): message`

   Types:
   - `docs`: Documentation changes
   - `fix`: Bug fixes
   - `feat`: New features
   - `style`: Code style changes
   - `refactor`: Code refactoring
   - `chore`: Maintenance tasks

8. **Push and create PR**

   ```bash
   git push origin docs/your-improvement
   ```

   Then open a Pull Request on GitHub.

## Writing Documentation

### Style Guide

#### Content

- **Be clear and concise**: Use simple language
- **Be specific**: Provide concrete examples
- **Be accurate**: Test all code examples
- **Be helpful**: Anticipate user questions

#### Formatting

- Use sentence case for headings: "Getting started" not "Getting Started"
- Use code blocks for commands and code
- Include language identifiers in code blocks
- Add alt text to images
- Link to related pages

#### Voice and Tone

- Use "you" to address readers
- Write in active voice
- Be friendly but professional
- Avoid jargon when possible

### MDX Guidelines

#### Front Matter

Every page should have front matter:

```mdx
---
title: Page Title
description: A brief, SEO-friendly description (120-160 chars)
---
```

#### Headings

Use a single `#` h1 as the page title, then `##` h2 and `###` h3 for structure:

```mdx
# Page Title

## Main Section

### Subsection
```

#### Code Blocks

Always specify the language:

````mdx
```typescript
const example = 'code'
```
````

For terminal commands:

````mdx
```bash
pnpm install
```
````

#### Links

Use relative links for internal pages:

```mdx
See [Getting Started](/getting-started/overview)
```

Use full URLs for external links:

```mdx
Visit [GitHub](https://github.com/brasa-finance)
```

#### Custom Components

Use our custom components to enhance content:

**Callouts** for important information:

```mdx
<Callout type="warn">Important warning message</Callout>
```

**Steps** for sequential instructions:

```mdx
<Steps>
  <Step title="First">Do this</Step>
  <Step title="Second">Then this</Step>
</Steps>
```

**Tabs** for alternative approaches:

```mdx
<Tabs>
  <Tab title="Option A">Content A</Tab>
  <Tab title="Option B">Content B</Tab>
</Tabs>
```

**Contract addresses** for on-chain references:

```mdx
<ContractAddress chain="Fogo" address="0x..." label="Contract Name" />
```

### Images and Assets

- Place images in `/public/images/`
- Use descriptive filenames: `staking-flow.png` not `image1.png`
- Optimize images before committing (< 500KB)
- Always include alt text

```mdx
![Description of image](/images/staking-flow.png)
```

## Review Process

After submitting a PR:

1. **Automated checks** run (lint, typecheck, build)
2. **Maintainers review** your changes
3. **Feedback** may be provided
4. **Approval** and merge when ready

Please be patient and responsive to feedback.

## Local Development Tips

### Hot Reload

The dev server hot-reloads on file changes. If it doesn't:

```bash
# Restart the dev server
pnpm dev
```

### Build Errors

If you encounter build errors:

```bash
# Clean and rebuild
rm -rf .next out
pnpm build
```

### Linting Issues

Fix automatically when possible:

```bash
pnpm lint --fix
```

Format code:

```bash
pnpm format
```

## Need Help?

- **Questions**: Open a GitHub Discussion
- **Issues**: Check existing issues or open a new one
- **Chat**: Join our [Discord](https://discord.gg/brasa)

## Recognition

Contributors will be recognized in:

- Git commit history
- Release notes (for significant contributions)
- Special thanks section (coming soon)

Thank you for helping make Brasa documentation better! 🙏
