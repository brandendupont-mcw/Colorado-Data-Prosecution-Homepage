import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <> 
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
      {siteMetadata.description}
    </p>
    <Hero4 />
          <Hero2 />
      
          <Hero />



    </>
  )
}
