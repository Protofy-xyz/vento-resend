import ResourcesPage from '@extensions/resources/adminPages'
import Head from 'next/head'
import { SiteConfig } from 'app/conf'

export default function Page(props:any) {
  const projectName = SiteConfig.projectName

  return (
    <>
      <Head>
        <title>{projectName + " - Resources"}</title>
      </Head>
      <ResourcesPage.resources.component {...props} />
    </>
  )
}