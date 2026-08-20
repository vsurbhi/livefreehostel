import { motion } from 'framer-motion'
import { ROOMS } from '../../data/siteData'
import styles from './Rooms.module.css'

const LABELS = { green: 'Private', dark: 'Social', warm: 'Explore' }

export default function Rooms() {
  return (
    <section className={`section ${styles.section}`} id="experiences">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Rooms & Experiences</span>
          <h2>Spaces that spark rest, connection & adventure.</h2>
          <p>Whether you want privacy, community, or pure adventure — we have your perfect stay.</p>
        </div>

        <div className={styles.grid}>
          {ROOMS.map((room, i) => (
            <motion.article
              key={room.id}
              className={`${styles.card} ${styles[room.theme]}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.9, 0.4, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Add room image here ↓ */}
              {/* <img src={`/assets/room-${room.id}.jpg`} alt={room.headline} /> */}

              <span className={styles.label}>{LABELS[room.theme]}</span>
              <h3 className={styles.headline}>{room.headline}</h3>
              <p className={styles.sub}>{room.sub}</p>
              <span className={styles.cta}>{room.cta}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
