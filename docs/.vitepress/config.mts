import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Duogradus",
  description: "Sammle Schritte, Tritt gegen Freunde an und steig in deiner Liga auf!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: '/external/idea' },
      { text: 'Internal', link: '/internal' }
    ],

    sidebar: {
      '/external/': [
        {
          text: 'Über das Projekt',
          items: [
            { text: 'Unsere Vision', link: '/external/idea' },
          ]
        },
        {
          text: 'Anforderungen',
          items: [
            { text: 'Anforderungsdokument', link: '/external/requirements' },
          ]
        }
      ],

      '/internal/': [
        {
          text: 'Internal',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SE-TINF22B2/G5-DuoGradus' }
    ]
  }
})
