import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})
 
export default withNextra({
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  }
})
 
// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })