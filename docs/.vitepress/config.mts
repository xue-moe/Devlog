import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
import { writeFileSync } from 'fs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devlog",
  description: "XUEの開発ログ",
  base: '',
  buildEnd: async () => {
    writeFileSync('./docs/.vitepress/dist/CNAME', 'devlog.xue.com')
  },
  dir: 'docs',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/xue-moe/Devlog/edit/main/docs/:path',
      text: '在 Github 上编辑此页面'
    }
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    jp: {
      label: '日本语',
      lang: 'ja',
      link: '/jp/'
    }
  },
  vite:{
    plugins: [pagefindPlugin(
      { customSearchQuery: chineseSearchOptimize, }
    )]
  },
  paths() {
    return [
      { params: { pkg: 'foo' }},
      { params: { pkg: 'bar' }}
    ]
  }
})
