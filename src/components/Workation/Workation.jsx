import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Coffee, Heart, Laptop2, MessageCircle, Moon, PartyPopper, Sun, Wifi } from 'lucide-react'
import { DESTINATIONS } from '../../data/siteData'
import { goToBooking } from '../../utils/booking'
import styles from './Workation.module.css'
import { CgStories } from 'react-icons/cg'
import workationImg from '../../assets/image_efaab999.webp'

const stays = [
  'Live Free Rishikesh',
  'Live Free Varanasi',
  'Live Free Dehradun',
]

const badges = [
  { label: 'Inhouse Cafe', icon: Coffee, className: 'badgeWifi' },
  { label: 'Free Wifi', icon: Wifi, className: 'badgeCafe' },
  { label: 'Sleep Well', icon: Moon, className: 'badgeSun' },
  { label: 'Swap Stories', icon: Heart, className: 'badgeLaptop' },
  { label: 'Lots of fun', icon: PartyPopper, className: 'badgeFun' },
]

// --- Helpers for default dates ---
const getToday = () => new Date().toISOString().split('T')[0]
const getTomorrow = () => {
  const d = new Date()
  d.setDate(d.getDate() + 7)
  return d.toISOString().split('T')[0]
}

export default function Workation() {
  const [stay, setStay] = useState('')
  const [checkIn, setCheckIn] = useState(getToday())
  const [checkOut, setCheckOut] = useState(getTomorrow())
  const [stayError, setStayError] = useState(false)

  const checkInRef = useRef(null)
  const checkOutRef = useRef(null)
  const stayRef = useRef(null)

  // --- Auto-update checkout when check-in changes ---
  useEffect(() => {
    if (checkIn) {
      const d = new Date(checkIn)
      d.setDate(d.getDate() + 1)
      const nextDay = d.toISOString().split('T')[0]
      // Only update if checkout is empty or earlier than nextDay
      if (!checkOut || checkOut <= checkIn) {
        setCheckOut(nextDay)
      }
    }
  }, [checkIn])

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
    if (!stay) {
      setStayError(true)
      stayRef.current?.focus()
      return
    }
    setStayError(false)

    const dest = DESTINATIONS.find(d => stay.toLowerCase().includes(d.id.toLowerCase()))
    if (dest?.bookingUrl && dest?.hotelCode) {
      goToBooking({
        bookingUrl: dest.bookingUrl,
        hotelCode: dest.hotelCode,
        checkin: checkIn,
        checkout: checkOut,
      })
    }
  }

  return (
    <section id="workation" className={styles.section}>
      <div className="container">
        <div className="section-head">
          <span className="section-label">Workations</span>
        </div>

        <div className={styles.inner}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          >
            <h2>Escape the office<br></br>Keep the Wi-Fi</h2>

            <h3>Enjoy 15–25% off when you book for 7+ nights.</h3>
            <p>
              Upgrade your office chair to a hammock, your commute to a sunrise
              hike, and your lunch desk to a rooftop with mountain views. Our
              Workation Package gives remote workers everything they need to
              stay productive and actually enjoy where they are.
            </p>

            <div className={styles.whyBox}>
              <h4>Why Here?</h4>
              <p>
                Start your day tirelessly. Take your lunch break on a hiking
                trail. Finish your workday with a cold beer and a sunset you
                didn't have to scroll past.
              </p>
              <p>This isn't a vacation — it's your life, just with better scenery.</p>
            </div>

            <form
              className={styles.bookingCard}
              onSubmit={(e) => { e.preventDefault(); handleBook() }}
            >
              <div className={styles.fieldsRow}>
                <div className={`${styles.field} ${stayError ? styles.fieldInvalid : ''}`}>
                  <label htmlFor="stay-select">Select your stay</label>
                  <div className={styles.selectWrap}>
                    <select
                      id="stay-select"
                      ref={stayRef}
                      value={stay}
                      onChange={(e) => { setStay(e.target.value); setStayError(false) }}
                      aria-invalid={stayError}
                      aria-describedby={stayError ? 'stay-error' : undefined}
                    >
                      <option value="" disabled>
                      choose a property
                      </option>
                      {stays.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className={styles.selectChevron} />
                  </div>
                  {stayError && (
                    <span id="stay-error" className={styles.fieldError} role="alert">Please choose a property</span>
                  )}
                </div>

                {/* Check-in – wrapper opens the picker */}
                <div className={styles.field}>
                  <label htmlFor="check-in">Check-in</label>
                  <div
                    className={styles.dateWrapper}
                    onClick={() => openDatePicker(checkInRef)}
                  >
                    <input
                      ref={checkInRef}
                      id="check-in"
                      type="date"
                      className={styles.dateInput}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>

                {/* Check-out – wrapper opens the picker */}
                <div className={styles.field}>
                  <label htmlFor="check-out">Check-out</label>
                  <div
                    className={styles.dateWrapper}
                    onClick={() => openDatePicker(checkOutRef)}
                  >
                    <input
                      ref={checkOutRef}
                      id="check-out"
                      type="date"
                      className={styles.dateInput}
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className={styles.ctaBtn}>
                Book now
              </button>
            </form>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.9, 0.4, 1] }}
          >
            <div className={styles.photoWrap}>
              <span className={styles.glow} aria-hidden="true" />

              <div className={styles.photoCircle}>
                <div className={styles.photoCircle}>
                  <img
                    src={workationImg}
                    alt="Two remote workers collaborating on a laptop"
                  />
                </div>
              </div>

              {badges.map(({ label, icon: Icon, className }, i) => (
                <span key={i} className={`${styles.badge} ${styles[className]}`}>
                  <span className={styles.badgeIcon}>
                    <Icon size={15} />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg width="34" height="80" viewBox="0 0 34 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 80V0" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="17" cy="14" rx="9" ry="13" fill="currentColor" />
      <ellipse cx="6" cy="32" rx="8" ry="11" fill="currentColor" transform="rotate(-25 6 32)" />
      <ellipse cx="28" cy="32" rx="8" ry="11" fill="currentColor" transform="rotate(25 28 32)" />
      <ellipse cx="6" cy="54" rx="8" ry="11" fill="currentColor" transform="rotate(-25 6 54)" />
      <ellipse cx="28" cy="54" rx="8" ry="11" fill="currentColor" transform="rotate(25 28 54)" />
      <ellipse cx="17" cy="72" rx="7" ry="9" fill="currentColor" />
    </svg>
  )
}