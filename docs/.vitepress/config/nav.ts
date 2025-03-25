import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Home',
    items: [
      { text: 'test', link: '/zh/text', activeMatch: '/test' }
    ],
    activeMatch: '/'
  }
];