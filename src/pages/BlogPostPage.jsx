import SEO from '../components/Seo/Seo'
import { useEffect, useMemo } from 'react'
import { useParams, useSearchParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import blogPosts from '../data/blogPosts.json'
import styles from './BlogPostPage.module.css'


// Add this helper near the top of the file, outside the component
function getRandomPosts(posts, count) {
  const shuffled = [...posts].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')
  const post = blogPosts.find((p) => p.slug === slug)

  const backTo = city ? `/blogs?city=${city}` : '/blogs'

  if (!post) return <Navigate to={backTo} replace />

  // Same-city posts (excludes current post)
 const relatedPool = blogPosts.filter((p) => p.slug !== slug && (!city || p.city === city))
const related = useMemo(() => getRandomPosts(relatedPool, 3), [slug, city])

const relatedSlugs = new Set(related.map((r) => r.slug))

const moreStoriesPool = blogPosts.filter((p) => p.slug !== slug && !relatedSlugs.has(p.slug))
const moreStories = useMemo(() => getRandomPosts(moreStoriesPool, 3), [slug, city, related])
// helmet data
 
  return (
    <>
    <SEO
        title={`${post.title} | LiveFree Hostel Blog`}
        description={post.excerpt?.slice(0, 155) || `Read ${post.title} on the LiveFree Hostel blog.`}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
      />
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to={backTo} className={styles.back}>
          <ArrowLeft size={16} /> All posts
        </Link>

        <h1>{post.title}</h1>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedHeading}>Related Posts: </h2>
            <div className={styles.relatedList}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={city ? `/blog/${r.slug}?city=${city}` : `/blog/${r.slug}`}
                  className={styles.relatedItem}
                >
                  {r.cover && (
                    <img src={r.cover} alt={r.title} loading="lazy" className={styles.relatedImg} />
                  )}
                  <h3 className={styles.relatedTitle}>{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {moreStories.length > 0 && (
          <div className={styles.moreStories}>
            <h3 className={styles.moreStoriesHeading}>More Stories</h3>
            <div className={styles.moreStoriesGrid}>
              {moreStories.map((m) => (
                <Link
                  key={m.slug}
                  to={`/blog/${m.slug}`}
                  className={styles.moreStoriesCard}
                >
                  {m.cover && <img src={m.cover} alt={m.title} loading="lazy" />}
                  <div className={styles.moreStoriesCardBody}>
                    <span className={styles.moreStoriesTitle}>{m.title}</span>
                    {m.excerpt && <p className={styles.moreStoriesExcerpt}>{m.excerpt}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}