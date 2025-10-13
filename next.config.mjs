import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: false,
  search: {
    codeblocks: true,
  },
  codeHighlight: true,
  mdxOptions: {
    rehypePlugins: [],
  },
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  trailingSlash: true,
  // Explicitly set the project root for file tracing
  outputFileTracingRoot: import.meta.dirname,
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.brasa.finance',
  },
  // Page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
