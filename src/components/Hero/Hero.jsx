import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { DESTINATIONS } from '../../data/siteData'
import { goToBooking } from '../../utils/booking'
import styles from './Hero.module.css'
import heroImg from '../../assets/hero_img.webp'

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
  const [locationError, setLocationError] = useState(false)

  const checkinRef = useRef(null)
  const checkoutRef = useRef(null)
  const locationRef = useRef(null)

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
    if (!location) {
      setLocationError(true)
      locationRef.current?.focus()
      return
    }
    setLocationError(false)

    const dest = DESTINATIONS.find(d => d.id === location)
    if (dest?.bookingUrl && dest?.hotelCode) {
      goToBooking({
        bookingUrl: dest.bookingUrl,
        hotelCode: dest.hotelCode,
        checkin,
        checkout,
      })
    }
  }

  const scrollToFeatures = () =>
    document.getElementById('why-livefree')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <img src={heroImg} alt="LiveFree Hostels" className={styles.bgImg} />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.span className={styles.eyebrow} {...fadeUp(0.1)}>
          LiveFree Hostels
        </motion.span>

        <motion.h1 className={styles.headline} {...fadeUp(0.22)}>
          Your basecamp for freedom
        </motion.h1>

        <motion.p className={styles.subline} {...fadeUp(0.34)}>
          Cozy stays, welcoming faces, and unforgettable memories across Rishikesh, Varanasi & Dehradun.
        </motion.p>

        {/* Booking Panel */}
        <motion.form
          className={styles.bookingPanel}
          onSubmit={e => { e.preventDefault(); handleBook() }}
          {...fadeUp(0.46)}
        >
          <div className={`${styles.bookingField} ${locationError ? styles.fieldInvalid : ''}`}>
            <label className={styles.bookingLabel} htmlFor="hero-location">
              <MapPin size={13} /> Location
            </label>
            <select
              id="hero-location"
              ref={locationRef}
              className={`${styles.bookingInput} ${locationError ? styles.inputError : ''}`}
              value={location}
              onChange={e => { setLocation(e.target.value); setLocationError(false) }}
              aria-invalid={locationError}
              aria-describedby={locationError ? 'location-error' : undefined}
            >
              <option value="">Select property</option>
              <option value="rishikesh">Rishikesh</option>
              <option value="dehradun">Dehradun</option>
              <option value="varanasi">Varanasi</option>
            </select>
            {locationError && (
              <span id="location-error" className={styles.bookingError} role="alert">Please select a property</span>
            )}
          </div>

          <div className={styles.bookingDivider} />

          {/* Check-in – wrapper opens the picker */}
          <div className={styles.bookingField}>
            <label className={styles.bookingLabel} htmlFor="hero-checkin">Check-in</label>
            <div
              className={styles.dateWrapper}
              onClick={() => openDatePicker(checkinRef)}
            >
              <input
                id="hero-checkin"
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
            <label className={styles.bookingLabel} htmlFor="hero-checkout">Check-out</label>
            <div
              className={styles.dateWrapper}
              onClick={() => openDatePicker(checkoutRef)}
            >
              <input
                id="hero-checkout"
                ref={checkoutRef}
                type="date"
                className={styles.bookingInput}
                value={checkout}
                onChange={e => setCheckout(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className={styles.bookingBtn}>Book Now</button>
        </motion.form>
      </div>
    </section>
  )
}