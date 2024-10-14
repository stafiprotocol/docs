export default{
  index: {
    type: 'page',
    title: 'StaFi Docs',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  stake: {
    type: 'page',
    title: 'Stake Guide'
  },
  lsaas: {
    type: 'page',
    title: 'LSaaS Guide'
  },
  website: {
    type: 'page',
    title: 'Website↗',
    href: 'https://stafi.io',
    newWindow: true
  },
  app:{
    type: 'menu',
    title: 'App',
    items: {
      stakeapp: {
        title: 'rToken App↗',
        href: 'https://app.stafi.io',
        newWindow: true
      },
      lsaasapp: {
        title: 'LSaaS App↗',
        href: 'https://stack-app.stafi.io/',
        newWindow: true
      }
    }
  }
}