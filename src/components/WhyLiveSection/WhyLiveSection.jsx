import { useState, useEffect, useRef } from 'react'
import { Coffee, MapPin, Sofa, PartyPopper, Sunset, PawPrint, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FEATURES } from '../../data/siteData'
import styles from './WhyLiveSection.module.css'



const ICON_MAP = { MapPin, Coffee, Sofa, PartyPopper, Sunset, PawPrint }
const FEATURE_IMAGES = [
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/6+scrolls/Prime+Location.png',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/6+scrolls/Inclusivity.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/6+scrolls/Built+for+Digital+Nomads.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/6+scrolls/The+Live+Free+Caf%C3%A9.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/6+scrolls/Your+Space%2C+Your+Vibe.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/6+scrolls/Unforgettable+Hostel+Events.jpg',
]

// Keep these breakpoints in sync with WhyLiveSection.module.css
function getVisibleCount(width) {
  if (width <= 640) return 1
  if (width <= 900) return 2
  if (width <= 1180) return 3
  return 3
}

// How far down (in px) to shift the desktop arrows below the image's exact
// vertical center. Increase this number to push the buttons further down.
const BUTTON_Y_OFFSET = 170

function useVisibleCount() {
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' ? getVisibleCount(window.innerWidth) : 3
  )

  useEffect(() => {
    let frame = null
    const handleResize = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setVisible(getVisibleCount(window.innerWidth))
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return visible
}

export default function WhyLiveSection() {
  const VISIBLE = useVisibleCount()
  const [start, setStart] = useState(0)
  const [dir, setDir] = useState(1)
  const [imgCenterY, setImgCenterY] = useState(null)
  const firstImgRef = useRef(null)

  const maxStart = Math.max(0, FEATURES.length - VISIBLE)

  // Keep start in range whenever VISIBLE changes (e.g. resizing from desktop to mobile)
  useEffect(() => {
    setStart(s => Math.min(s, maxStart))
  }, [maxStart])

  // Track the FIRST card's image height live (during drag-resize too) so the
  // desktop arrows always sit at the image's vertical center — not the full
  // card's center, which shifts up/down as description text re-wraps.
  useEffect(() => {
    const el = firstImgRef.current
    if (!el) return

    const update = () => setImgCenterY(el.offsetHeight / 2)
    update()

    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [start, VISIBLE])

  const prev = () => {
    setDir(-1)
    setStart(s => Math.max(0, s - 1))
  }
  const next = () => {
    setDir(1)
    setStart(s => Math.min(maxStart, s + 1))
  }

  const visible = FEATURES.slice(start, start + VISIBLE)
  const dotCount = maxStart + 1

  const NavButtons = ({ className }) => (
    <div className={className}>
      <button className={styles.navBtn} onClick={prev} disabled={start === 0} aria-label="Previous">
        <ChevronLeft size={20} />
      </button>
      <button className={styles.navBtn} onClick={next} disabled={start >= maxStart} aria-label="Next">
        <ChevronRight size={20} />
      </button>
    </div>
  )

  return (
    <section className={`section ${styles.section}`} id="why-livefree">
      <div className="container">
        <div className={styles.header}>
          <div className="section-head" style={{ textAlign: 'center', marginBottom: 0 }}>
            <span className="section-label">Why Live Free</span>
            <h2>Designed for travelers seeking warmth, style & connection.</h2>
          </div>
        </div>

        <div className={styles.carouselWrap}>
          {/* Desktop arrows: locked to the image's vertical center via JS measurement,
              so they stay perfectly aligned no matter how much the card text wraps
              during resize/drag on any device. */}
          <div
            className={styles.navBtnsDesktop}
            style={imgCenterY ? { top: `${imgCenterY + BUTTON_Y_OFFSET}px` } : undefined}
          >
            <button className={styles.navBtn} onClick={prev} disabled={start === 0} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button className={styles.navBtn} onClick={next} disabled={start >= maxStart} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className={styles.carousel}>
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((f, i) => {
                const Icon = ICON_MAP[f.icon]
                const imgIdx = FEATURES.indexOf(f)
                return (
                  <motion.article
                    key={f.id}
                    className={styles.card}
                    initial={{ opacity: 0, x: dir * 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -dir * 80 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.2, 0.9, 0.4, 1] }}
                  >
                    <div
                      ref={i === 0 ? firstImgRef : null}
                      className={styles.cardImg}
                      style={{ backgroundImage: `url('${FEATURE_IMAGES[imgIdx]}')` }}
                    />
                    <div className={styles.cardBody}>
                      {/* <div className={styles.iconWrap}>
                        {Icon && <Icon size={22} strokeWidth={1.8} />}
                      </div> */}
                      <h3 className={styles.title}>{f.title}</h3>
                      <p className={styles.desc}>{f.desc}</p>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Compact arrows: shown centered below carousel on tablet/mobile so they never sit on top of cards */}
        <NavButtons className={styles.navBtnsCompact} />

        <div className={styles.dots}>
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === start ? styles.dotActive : ''}`}
              onClick={() => { setDir(i > start ? 1 : -1); setStart(i) }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}