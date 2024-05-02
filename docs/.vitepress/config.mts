import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid({
  title: 'Duogradus',
  description:
    'Sammle Schritte, Tritt gegen Freunde an und steig in deiner Liga auf!',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projekt', link: '/project/idea' },
      { text: 'Statusberichte', link: '/reports/reports' },
      { text: 'Development', link: '/development/project-guideline' },
    ],

    sidebar: {
      '/project/': [
        {
          text: 'Über das Projekt',
          items: [
            { text: 'Unsere Vision', link: '/project/idea' },
            {
              text: 'Anforderungen an das Projekt',
              link: '/project/requirements',
            },
            { text: 'Das User Interface', link: '/project/user-interface' },
          ],
        },
      ],

      '/reports/': [
        {
          text: 'Statusberichte',
          items: [
            { text: 'Über Statusberichte', link: '/reports/reports' },
            { text: '2023 - KW41', link: '/reports/2023-kw41.md' },
            { text: '2023 - KW42', link: '/reports/2023-kw42.md' },
            { text: '2023 - KW43', link: '/reports/2023-kw43.md' },
            { text: '2023 - KW44', link: '/reports/2023-kw44.md' },
            { text: '2023 - KW45', link: '/reports/2023-kw45.md' },
            { text: '2023 - KW46', link: '/reports/2023-kw46.md' },
            { text: '2023 - KW47', link: '/reports/2023-kw47.md' },
            { text: '2023 - KW48', link: '/reports/2023-kw48.md' },
            { text: '2024 - KW15', link: '/reports/2024-kw15.md' },
            { text: '2024 - KW16', link: '/reports/2024-kw16.md' },
            { text: '2024 - KW17', link: '/reports/2024-kw17.md' },
          ],
        },
      ],

      '/development': [
        { text: 'Project Guideline', link: '/development/project-guideline' },
        { text: 'API', link: '/development/api' },
        { text: 'Deployment', link: '/development/deployment' },
        {
          text: 'Backend',
          link: '/development/backend/overview',
          items: [
            {
              text: 'Authentication',
              link: '/development/backend/authentication',
            },
            { text: 'Logging', link: '/development/backend/logging' },
            { text: 'Testing', link: '/development/backend/testing' },
          ],
        },
        {
          text: 'Frontend',
          link: '/development/frontend/overview',
          items: [{ text: 'Testing', link: '/development/frontend/testing' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SE-TINF22B2/G5-DuoGradus' },
    ],
  },
});
