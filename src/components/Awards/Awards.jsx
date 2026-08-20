// import { motion } from 'framer-motion'
// import { AWARDS } from '../../data/siteData'
// import styles from './Awards.module.css'

// export default function Awards() {
//   return (
//     <section className={`section ${styles.section}`} id="awards">
//       <div className="container">
//         <div className="section-head">
//           <span className="section-label">Recognition</span>
//           <h2>Award‑winning hospitality, every year.</h2>
//         </div>

//         <div className={styles.marqueeWrap}>
//           <div className={styles.grid}>
//             {AWARDS.map((a, i) => (
//               <motion.div
//                 key={`${a.platform}-${a.property}`}
//                 className={`${styles.card} ${styles[a.theme]}`}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.45, delay: i * 0.08 }}
//                 viewport={{ once: true }}
//               >
//                 <span className={styles.emoji}>{a.emoji}</span>
//                 <p className={styles.platform}>{a.platform}</p>
//                 <p className={styles.year}>{a.year}</p>
//                 <p className={styles.property}>{a.property}</p>
//               </motion.div>
//             ))}

//             {/* Duplicate set — needed for seamless infinite loop */}
//             {AWARDS.map((a, i) => (
//               <div
//                 key={`dup-${a.platform}-${a.property}`}
//                 className={`${styles.card} ${styles[a.theme]}`}
//                 aria-hidden="true"
//               >
//                 <span className={styles.emoji}>{a.emoji}</span>
//                 <p className={styles.platform}>{a.platform}</p>
//                 <p className={styles.year}>{a.year}</p>
//                 <p className={styles.property}>{a.property}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { AWARDS } from '../../data/siteData'
import styles from './Awards.module.css'

export default function Awards() {
  // Duplicate the list 3 times to ensure seamless looping
  const marqueeItems = [...AWARDS, ...AWARDS, ...AWARDS]

  return (
    <section className={`section ${styles.section}`} id="awards">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Recognition</span>
          <h2>Award‑winning hospitality, every year.</h2>
        </div>

        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {marqueeItems.map((a, i) => (
              <motion.div
                key={`${a.platform}-${a.property}-${i}`}
                className={`${styles.card} ${styles[a.theme]}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (i % AWARDS.length) * 0.08 }}
                viewport={{ once: true }}
              >
                {a.image ? (
                  <img
                    src={a.image}
                    alt={a.platform}
                    className={styles.badgeImg}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.emoji}>{a.emoji}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}