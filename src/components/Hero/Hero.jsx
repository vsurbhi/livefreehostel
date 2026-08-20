import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { DESTINATIONS } from '../../data/siteData'
import styles from './Hero.module.css'
import heroImg from '../../assets/hero_img.jpeg'

// --- Helpers for default dates ---
const getToday = () => new Date().toISOString().split('T')[0]
const getTomorrow = () => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

// --- Animation config ---
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.2, 0.9, 0.4, 1] },
})

export default function Hero() {
  // --- State with default dates ---
  const [location, setLocation] = useState('')
  const [checkin, setCheckin] = useState(getToday())
  const [checkout, setCheckout] = useState(getTomorrow())

  const checkinRef = useRef(null)
  const checkoutRef = useRef(null)

  // --- Open native date picker programmatically ---
  const openDatePicker = (ref) => {
    const input = ref.current
    if (!input) return
    try {
      input.showPicker()
    } catch {
      input.focus()
      input.click()
    }
  }

  const handleBook = () => {
    if (location) {
      const dest = DESTINATIONS.find(d => d.id === location)
      if (dest?.bookingUrl) {
        window.open(dest.bookingUrl, '_blank', 'noopener,noreferrer')
        return
      }
    }
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFeatures = () =>
    document.getElementById('why-livefree')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <img src={heroImg} alt="LiveFree Hostel" className={styles.bgImg} />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.span className={styles.eyebrow} {...fadeUp(0.1)}>
          Live Free Hostel
        </motion.span>

        <motion.h1 className={styles.headline} {...fadeUp(0.22)}>
          Your basecamp for freedom
        </motion.h1>

        <motion.p className={styles.subline} {...fadeUp(0.34)}>
          Cozy stays, welcoming faces, and unforgettable memories across Rishikesh, Varanasi & Dehradun.
        </motion.p>

        {/* Booking Panel */}
        <motion.div className={styles.bookingPanel} {...fadeUp(0.46)}>
          <div className={styles.bookingField}>
            <label className={styles.bookingLabel}>
              <MapPin size={13} /> Location
            </label>
            <select
              className={styles.bookingInput}
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              <option value="">Select property</option>
              <option value="rishikesh">Rishikesh</option>
              <option value="dehradun">Dehradun</option>
              <option value="varanasi">Varanasi</option>
            </select>
          </div>

          <div className={styles.bookingDivider} />

          {/* Check-in – wrapper opens the picker */}
          <div className={styles.bookingField}>
            <label className={styles.bookingLabel}>Check-in</label>
            <div
              className={styles.dateWrapper}
              onClick={() => openDatePicker(checkinRef)}
            >
              <input
                ref={checkinRef}
                type="date"
                className={styles.bookingInput}
                value={checkin}
                onChange={e => setCheckin(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.bookingDivider} />

          {/* Check-out – wrapper opens the picker */}
          <div className={styles.bookingField}>
            <label className={styles.bookingLabel}>Check-out</label>
            <div
              className={styles.dateWrapper}
              onClick={() => openDatePicker(checkoutRef)}
            >
              <input
                ref={checkoutRef}
                type="date"
                className={styles.bookingInput}
                value={checkout}
                onChange={e => setCheckout(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.bookingBtn} onClick={handleBook}>Book Now</button>
        </motion.div>
      </div>
    </section>
  )
}