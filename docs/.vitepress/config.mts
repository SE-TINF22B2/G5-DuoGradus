import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Duogradus",
  description: "Sammle Schritte, Tritt gegen Freunde an und steig in deiner Liga auf!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projekt', link: '/project/idea' },
      { text: 'Guidelines', link: '/guidelines/project-guideline' },
      { text: 'Development', link: '/development/overview',  }
    ],

    sidebar: {
      '/project/': [
        {
          text: 'Über das Projekt',
          items: [
            { text: 'Unsere Vision', link: '/project/idea' },
            { text: 'Anforderungen an das Projekt', link: '/project/requirements' },
            { text: 'Das User Interface', link: '/project/user-interface' },
          ]
        },
      ],

      '/guidelines/': [
        {
          text: 'Guidelines',
          items: [
            { text: 'Project Guideline', link: '/guidelines/project-guideline' },
            { text: 'API', link: '/guidelines/api' },
            { text: 'Backend Guideline', link: '/guidelines/backend' },
            { text: 'Frontend Guideline', link: '/guidelines/frontend' }
          ]
        }
      ],
      '/development': [
        { text: 'Authentication', link: '/development/authentication' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SE-TINF22B2/G5-DuoGradus' }
    ]
  }
})
