module.exports = {
  title: 'MinimalUI',
  description: 'MinimalUI 是一个基于 Vue 的简约UI库',  //seo
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    logo: '/MinimalUI-logo.png',
    search: false,
    // navbar: false,
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
        children: [
          {
            title: 'Button',
            path: '/button/'
          }
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}