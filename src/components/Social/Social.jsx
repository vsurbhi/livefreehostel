import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SOCIAL_IMGS } from '../../data/siteData'
import styles from './Social.module.css'
import fallbackImg from '../../assets/hero_img.webp'

export default function Social() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [slideDirection, setSlideDirection] = useState('next')

  const total = SOCIAL_IMGS.length
  // Render one extra image so a slice of it peeks out on the right
  const renderCount = 5

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
      if (e.key === 'ArrowLeft') scroll(-1)
      if (e.key === 'ArrowRight') scroll(1)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const scroll = (dir) => {
    setSlideDirection(dir === 1 ? 'next' : 'prev')
    setCurrentIndex((prev) => {
      let next = prev + dir
      if (next < 0) next = total - 1
      if (next >= total) next = 0
      return next
    })
  }

const visibleImages = Array.from({ length: renderCount }, (_, offset) => {
  const index = (currentIndex + offset) % total
  return { index, data: SOCIAL_IMGS[index] }
})

  const openImage = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const PLACEHOLDER_IMG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>
        <rect width='100%' height='100%' fill='#e8dfd6'/>
        <text x='50%' y='50%' font-family='sans-serif' font-size='20' fill='#a89f93' text-anchor='middle' dominant-baseline='middle'>Live Free</text>
      </svg>`
    )

  const handleImageError = (event) => {
    const stage = event.currentTarget.dataset.fallbackStage
    if (!stage) {
      event.currentTarget.dataset.fallbackStage = 'local'
      event.currentTarget.src = fallbackImg
    } else if (stage === 'local') {
      event.currentTarget.dataset.fallbackStage = 'svg'
      event.currentTarget.src = PLACEHOLDER_IMG
    }
  }

  // Scrollbar-style thumb: width = visible portion (4 full cards), position = current offset
  const thumbWidthPercent = (4 / total) * 100
  const thumbLeftPercent = (currentIndex / total) * 100

  return (
    <section className={`section ${styles.section}`} id="social">
      <div className="container">
        <div className="section-head">
          <span className={`section-label ${styles.tag}`}>Social Moments</span>
          <h2>GET SOCIAL <span style={{ color: 'var(--primary)' }}>#livefreehostels</span></h2>
          <p>Tag us on Instagram and you might end up on our wall 📸</p>
        </div>
      </div>

      <div className={styles.previewContainer}>
        <div className={styles.sliderWrapper}>
          <button className={styles.arrowBtn} onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.previewViewport}>
            <div className={`${styles.previewGrid} ${styles[`slide-${slideDirection}`]}`}>
              {visibleImages.map(({ index, data }) => (
              <a
                key={`${index}-${currentIndex}`}
                className={styles.previewBox}
                href={data.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Instagram post ${index + 1}`}
              >
                <img
                  src={data.src}
                  alt={`Social preview ${index + 1}`}
                  loading="lazy"
                  onError={handleImageError}
                />
              </a>
            ))}
            </div>
          </div>

          <button className={styles.arrowBtn} onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${thumbWidthPercent}%`, left: `${thumbLeftPercent}%` }}
          />
        </div>
      </div>

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close">
            <X size={24} />
          </button>

          <button className={`${styles.modalBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); scroll(-1) }} aria-label="Previous image">
            <ChevronLeft size={28} />
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={SOCIAL_IMGS[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              onError={handleImageError}
            />
          </div>

          <button className={`${styles.modalBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); scroll(1) }} aria-label="Next image">
            <ChevronRight size={28} />
          </button>

          <div className={styles.slideCounter}>
            {currentIndex + 1} / {total}
          </div>
        </div>
      )}
    </section>
  )
}