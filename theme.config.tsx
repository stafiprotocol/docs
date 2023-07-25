import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: 
    <div className='flex items-center gap-3'>
      <img src='/image/logo.png' alt='StaFi Protocol' className='w-8'/>
      <span className='font-bold text-xl'>StaFi Protocol</span>
    </div>,
  project: {
    link: 'https://github.com/stafiprotocol/docs',
  },
  chat: {
    link: 'https://discord.gg/Up6vdp8fWx',
  },
  docsRepositoryBase: 'https://github.com/stafiprotocol/docs/blob/main',
  footer: {
    text: 'StaFi Protocol ©',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: "%s – StaFi LSD Docs"
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.stafi.io/og.png'
        : `https://docs.stafi.io/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="This documentation aims to provide an introduction to StaFi for general users and also serve as a guide for individuals developing software using StaFi."
        />
        <meta
          name="og:description"
          content="This documentation aims to provide an introduction to StaFi for general users and also serve as a guide for individuals developing software using StaFi."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="docs.stafi.io" />
        <meta name="twitter:url" content="https://docs.stafi.io" />
        <meta
          name="og:title"
          content={title ? title + " – StaFi LSD Docs" : "StaFi LSD Docs"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="StaFi" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
}

export default config
