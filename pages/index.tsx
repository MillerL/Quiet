import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout, {siteTitle} from '../components/layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import client from '../lib/sanity'

const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {
  // const {homepageData}  = data
  // console.log({ homepageData});

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main >
        <div >
          <p className='text-bold'>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
          </div>
        </div>
        <Link href={'/posts/first-post'}> <h2>go to first-post </h2></Link>
      </main>
    </Layout>
  )
}


// Create a query called homepageQuery
// const homepageQuery = `*\[_type == "homepage"\][0] {
//   title,
//   subtitle,
//   "ctaUrl": cta {
//     current
//         },
//   image {
//     ...asset->
//   }
// }`;

// export async function getStaticProps() {
//   const homepageData = await client.fetch(homepageQuery);

//   const data = { homepageData };

//   return {
//     props: {
//       data,
//     },
//     revalidate: 1,
//   };
// }
