import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { DESTINATIONS } from '../../data/siteData'
import styles from './Destinations.module.css'

export default function Destinations() {
  const navigate = useNavigate()

  return (
    <section className="section" id="destinations">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Our Properties</span>
          <h2>Different cities. One spirit.</h2>
          <p>Each Live Free hostel is shaped by its city — the mountains, the ghats, the forests — and filled with the same warmth.</p>
        </div>

        <div className={styles.grid}>
          {DESTINATIONS.map((dest, i) => {
            return (
              <motion.article
                key={dest.id}
                className={styles.card}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.9, 0.4, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate(dest.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate(dest.path)
                }}
              >
                <div className={styles.imgFiltered}>
                <div
                  className={styles.img}
                  style={{ backgroundImage: `url('${dest.img}')` }}
                />
                </div>
                <div className={styles.shadowLayer} />
                <div className={styles.overlay} />

                <div className={styles.btnRow}>
                  <button
                    className={styles.exploreBtn}
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(dest.path)
                    }}
                  >
                    Explore <ArrowRight size={14} />
                  </button>
                  <button
                    className={styles.bookBtn}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(dest.bookingUrl, '_blank', 'noopener,noreferrer')
                    }}
                  >
                    Book Now
                  </button>
                </div>

                <div className={styles.body}>
                  <span className={styles.tagline}>{dest.tagline}</span>
                  <h3 className={styles.name}>{dest.name}</h3>
                  <p className={styles.desc}>{dest.desc}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}