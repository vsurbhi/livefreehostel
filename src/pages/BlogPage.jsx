import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import blogPosts from '../data/blogPosts.json'
import styles from './BlogPage.module.css'
import SEO from '../components/Seo/Seo'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function BlogPage({ filterFn, title, subtitle, limit }) {
  const [searchParams] = useSearchParams()
  const cityParam = searchParams.get('city')

  const activeFilter = filterFn || (cityParam ? (post) => post.city === cityParam : null)
  const posts = (activeFilter ? blogPosts.filter(activeFilter) : blogPosts).slice(0, limit ?? blogPosts.length)

  const displayTitle = title || (cityParam ? `Stories from ${capitalize(cityParam)}` : 'Stories from the Road')
  const displaySubtitle = subtitle || 'Travel guides, local tips & everything happening around our hostels in Rishikesh, Varanasi & Dehradun.'

    const seoTitle = cityParam
    ? `${capitalize(cityParam)} Travel Blog | LiveFree Hostel`
    : 'Travel Blog | LiveFree Hostel'
  const seoDescription = cityParam
    ? `Travel guides and local tips for ${capitalize(cityParam)} from LiveFree Hostel.`
    : 'Travel guides, local tips & stories from around LiveFree Hostel in Rishikesh, Varanasi & Dehradun.'
  
  return (
    
   
    <div className={styles.page}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={cityParam ? `/blogs?city=${cityParam}` : '/blogs'}
      />
      <section className="section-head">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayTitle}
        </motion.h2>
        <p>{displaySubtitle}</p>
      </section>

      <section className={styles.grid}>
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
          >
            <Link
              to={cityParam ? `/blog/${post.slug}?city=${cityParam}` : `/blog/${post.slug}`}
              className={styles.cardLink}
            >
              {post.cover && (
                <div className={styles.imgWrap}>
                  <img src={post.cover} alt={post.title} loading="lazy" />
                </div>
              )}
              <div className={styles.cardBody}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.readMore}>
                  Read more <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {posts.length === 0 && (
        <p className={styles.empty}>No stories found in this category yet.</p>
      )}
    </div>
    
  )
}