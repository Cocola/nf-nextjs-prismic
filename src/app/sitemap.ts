import { MetadataRoute } from 'next'
import { createClient } from '@/prismicio'


const baseUrl = process.env.SITE_URL || 'https://www.nicolas-fiascaro.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  // Fetch dynamic pages from Prismic

  // const prismicPages = await client.getByType('page')
  // const pages = prismicPages.results.map((page) => {
  //   return (
  //     {
  //       url: page.uid === 'home' ? baseUrl : `${baseUrl}${page.url}`,
  //       lastModified: page.last_publication_date,
  //       alternates: {
  //         languages: {
  //           us: `${baseUrl}${page.url}`,
  //           fr: page.uid === 'home' ? baseUrl : `${baseUrl}/${page.alternate_languages[0].lang}/${page.alternate_languages[0].uid}`
  //         }
  //       }
  //     }
  //   )
  // })

  // const prismicProjects = await client.getByType('project')
  // const projects = prismicProjects.results.map((project) => {
  //   return (
  //     {
  //       url: `${baseUrl}${project.url}`,
  //       lastModified: project.last_publication_date,
  //       alternates: {
  //         languages: {
  //           us: `${baseUrl}${project.url}`,
  //           fr: `${baseUrl}/${project.alternate_languages[0].lang}/${project.alternate_languages[0].uid}`
  //         }
  //       }
  //     }
  //   )
  // })

  const prismicAll = await client.dangerouslyGetAll()
  const prismicAllFr = await client.dangerouslyGetAll({lang: 'fr-fr'})


  const allPages = prismicAll.filter(el => el.uid !== 'home').map((page) => {
    return (
      {
        url: page.uid === 'home' ? baseUrl: `${baseUrl}${page.url}`,
        lastModified: page.last_publication_date.replace('0000','00:00'),
      }
    )
  })
  const allPagesFr = prismicAllFr.filter(el => el.uid !== 'home').map((page) => {
    return (
        {
          url: `${baseUrl}${page.url}`,
          lastModified: page.last_publication_date.replace('0000','00:00'),
        }
    )
  })

  const homePage : MetadataRoute.Sitemap= [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/en-us`,
      lastModified: new Date().toISOString()
    }
  ]

  return [...homePage, ...allPages,...allPagesFr]
}