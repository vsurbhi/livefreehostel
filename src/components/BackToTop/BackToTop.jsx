import { useState, useEffect, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  const getScrollHeight = () => Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

  const checkScroll = useCallback(() => {
    const scrollTop = getScrollTop()
    const viewportHeight = window.innerHeight
    const fullHeight = getScrollHeight()

    const scrollableHeight = Math.max(fullHeight - viewportHeight, 0)
    const scrollPercent = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0

    setVisible(scrollTop > 300 || scrollPercent >= 30)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    checkScroll()
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scrollToTop = () => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
    >
      <ArrowUp size={22} />
    </button>
  )
}
