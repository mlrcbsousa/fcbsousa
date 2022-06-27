import { UserConfig, MarkdownOptions, defineConfig } from 'vitepress';
import { itemsFromFolder } from '../../lib/utils'

const blogItems = itemsFromFolder('blog');

const markdown: MarkdownOptions = {
  lineNumbers: true,
}

const config: UserConfig = {
  lang: 'en-UK',
  title: 'Francisco B. Sousa',
  description: 'description.',
  titleTemplate: 'titleTemplate',
  markdown,
  lastUpdated: true,
  themeConfig: {
    // logo: '/.vitepress/assets/logo.svg',
    nav: [
      { text: 'About', link: '/about' },
      // {
      //   text: '🔍',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
    ],
    sidebar: {
      // example: [
      //   {
      //     text: 'Another sidebar',
      //     collapsible: true,
      //     items: []
      //   }
      // ],
      // Has to be last so that it doesn't override pathed sidebars
      "/": [
        {
          text: 'Blog',
          collapsible: false,
          items: blogItems
        }
      ],
    },
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/francisco-b-sousa-5204a712b/' },
    ],
  }
}

export default defineConfig(config)
