module.exports = {
  base: '/MinimalUI/',
  title: 'MinimalUI',
  description: 'MinimalUI 是一个基于 Vue 的简约UI库',  //seo
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    logo: '/MinimalUI-logo.png',
    search: false,  //设置nav中的搜索框是否显示
    // navbar: false, //设置nav是否显示
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Get Started', link: '/get-started/' },
    //   { text: 'Install', link: '/install/' },
    // ],
    sidebar: [
      {
        title: '简介',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 是否折叠  可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: '安装',
        path: '/install/',
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: '组件',
        path: '/components/',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          {
            title: 'Button',
            path: '/components/button/'
          },
          {
            title: 'Button Group',
            path: '/components/button-group/'
          },
          {
            title: 'Input',
            path: '/components/input/'
          },
          {
            title: 'Grid',
            path: '/components/grid/'
          },
          {
            title: 'Layout',
            path: '/components/layout/'
          },
          {
            title: 'Toast',
            path: '/components/toast/'
          },
          {
            title: 'Tabs',
            path: '/components/tabs/'
          },
          {
            title: 'Popover',
            path: '/components/popover/'
          },
          {
            title: 'Collapse',
            path: '/components/collapse/'
          },
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}