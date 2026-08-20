import { Moon, Users, Smile, Sparkles, ShieldCheck, Ban } from 'lucide-react'
import { motion } from 'framer-motion'
import { GUIDELINES } from '../../data/siteData'
import styles from './Guidelines.module.css'

const ICON_MAP = { Moon, Users, Smile, Sparkles, ShieldCheck, Ban }

export default function Guidelines() {
  return (
    <section className={`section ${styles.section}`} id="guidelines">
      <div className="container">
        <div className={styles.inner}>
          {/* Left copy */}
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-label">House Guidelines</span>
            <h2>Simple rules for a calm, joyful stay.</h2>
            <p>Our community thrives on mutual respect. These gentle guidelines keep the vibes good for everyone — guests, staff, and neighbours alike.</p>
            <a className="btn btn-ghost" href="#contact">Get in Touch</a>
          </motion.div>

          {/* Rules grid */}
          <div className={styles.grid}>
            {GUIDELINES.map((g, i) => {
              const Icon = ICON_MAP[g.icon]
              return (
                <motion.div
                  key={g.title}
                  className={styles.item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0.9, 0.4, 1] }}
                  viewport={{ once: true }}
                >
                  <div className={styles.itemHead}>
                    <div className={styles.iconBox}>
                      {Icon && <Icon size={18} strokeWidth={1.8} />}
                    </div>
                    <span className={styles.itemTitle}>{g.title}</span>
                  </div>
                  <p className={styles.itemDesc}>{g.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
