import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 
    <div className='flex items-center gap-3'>
      <img src='/image/logo.png' alt='StaFi Protocol' className='w-8'/>
      <span className='font-bold text-xl'>StaFi Protocol</span>
    </div>,
  project: {
    link: 'https://github.com/',
  },
  chat: {
    link: 'https://discord.gg/Up6vdp8fWx',
  },
  docsRepositoryBase: 'https://github.com/signalxu/stafi-doc/blob/main',
  footer: {
    text: 'StaFi Protocol ©',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
}

export default config
