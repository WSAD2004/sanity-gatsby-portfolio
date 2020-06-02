export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed5d220eeb7936f4db2e13a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1g5bgiim',
                  apiId: '1a78eafa-6c38-45bc-aaf6-6d0dbbb60bf4'
                },
                {
                  buildHookId: '5ed5d220cde94aa3ce71a192',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5bos6nzf',
                  apiId: '29f494ab-5c3f-4548-ad6a-d04cf0386ecf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WSAD2004/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5bos6nzf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
