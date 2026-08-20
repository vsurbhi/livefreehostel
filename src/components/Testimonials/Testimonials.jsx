// import { TESTIMONIALS } from '../../data/siteData'
// import styles from './Testimonials.module.css'

// export default function Testimonials() {
//   const loopedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS]

//   return (
//     <section className={`section ${styles.section}`} id="testimonials">
//       <div className="container">
//         <div className="section-head">
//           <span className="section-label">Guest Stories</span>
//           <h2>Our community says it best. Read the love.</h2>
//         </div>
//       </div>

//       <div className={styles.carousel} aria-label="Guest review carousel">
//         <div className={styles.track}>
//           {loopedTestimonials.map((t, i) => (
//             <article key={`${t.author}-${i}`} className={styles.card}>
//               <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
//               <p className={styles.text}>"{t.text}"</p>
//               <div className={styles.author}>
//                 <div className={styles.avatar}>{t.author[0]}</div>
//                 <div>
//                   <div className={styles.authorName}>{t.author}</div>
//                   <div className={styles.authorCountry}>{t.country}</div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import { useState } from 'react'
import { TESTIMONIALS } from '../../data/siteData'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  const loopedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Guest Reviews</span>
          <h2>Our community says it best. Read the love.</h2>
        </div>
      </div>

      <div className={styles.carousel} aria-label="Guest review carousel">
        <div className={`${styles.track} ${isPaused ? styles.paused : ''}`}>
          {loopedTestimonials.map((t, i) => (
            <article
              key={`${t.author}-${i}`}
              className={styles.card}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.author[0]}</div>
                <div>
                  <div className={styles.authorName}>{t.author}</div>
                  <div className={styles.authorCountry}>{t.country}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}