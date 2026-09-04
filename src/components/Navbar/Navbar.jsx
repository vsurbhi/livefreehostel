import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronDown, MapPin, Heart, Home, Info, BookOpen, Users, ArrowLeft } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Navbar.module.css'
import logoImg from '../../assets/l1.webp'
import { Link } from 'react-router-dom'

const ABOUT_ITEMS = [
  { label: 'About Us', icon: <Info size={15} />, path: '/about' },
  { label: 'Pet Friendly', icon: <Heart size={15} />, path: '/pet-friendly' },
]
const PROPERTIES_ITEMS = [
  { label: 'Rishikesh', icon: <MapPin size={15} />, path: '/rishikesh' },
  { label: 'Varanasi', icon: <MapPin size={15} />, path: '/varanasi' },
  { label: 'Dehradun', icon: <MapPin size={15} />, path: '/dehradun' },
]

function DropdownMenu({ items, onSelect }) {
  return (
    <div className={styles.dropdownInner}>
      {items.map((item, i) => (
        <div key={item.path}>
          {i > 0 && i < items.length && <div className={styles.dropdownDivider} />}
          <Link className={styles.dropdownItem} to={item.path} onClick={onSelect}>
            {item.icon}
            <div className={styles.dropdownItemText}>
              <div className={styles.dropdownItemName}>{item.label}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mobile drawer / dropdowns on Escape for keyboard accessibility
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenus = () => { setOpenMenu(null); setMobileOpen(false) }
  const toggleMenu = (name) => setOpenMenu(prev => prev === name ? null : name)
  const isActive = (paths) => paths.some(p => location.pathname === p)

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
        <div className={`container ${styles.topbar}`}>

          {/* Logo */}
          <Link className={styles.logo} to="/" onClick={closeMenus}>
            <img src={logoImg} alt="LiveFree Hostel" className={styles.logoImg} />
          </Link>
          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.navList}>

              <li className={styles.navItem}>

                <Link
                  className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
                  to="/"
                  onClick={closeMenus}
                >
                  Home
                </Link>
              </li>

              {/* About dropdown */}
              <li className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${openMenu === 'about' ? styles.open : ''} ${isActive(['/about', '/pet-friendly', '/awards']) ? styles.active : ''}`}
                  onClick={() => toggleMenu('about')}
                  aria-expanded={openMenu === 'about'}
                >
                  About
                  <ChevronDown size={14} />
                </button>
                <div className={`${styles.dropdown} ${openMenu === 'about' ? styles.open : ''}`}>
                  <DropdownMenu items={ABOUT_ITEMS} onSelect={closeMenus}  />
                </div>
              </li>

              {/* Properties dropdown */}
              <li className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${openMenu === 'properties' ? styles.open : ''} ${isActive(['/rishikesh', '/dehradun', '/varanasi']) ? styles.active : ''}`}
                  onClick={() => toggleMenu('properties')}
                  aria-expanded={openMenu === 'properties'}
                >
                  Properties
                  <ChevronDown size={14} />
                </button>
                <div className={`${styles.dropdown} ${openMenu === 'properties' ? styles.open : ''}`}>
                  <DropdownMenu items={PROPERTIES_ITEMS} onSelect={closeMenus} />
                </div>
              </li>

              <li className={styles.navItem}>
               <Link
                  className={`${styles.navLink} ${location.pathname === '/blogs' ? styles.active : ''}`}
                  to="/blogs"
                  onClick={closeMenus}
                >
                  Blogs
                </Link>
              </li>

              <li className={styles.navItem}>
               <Link
                  className={`${styles.navLink} ${location.pathname === '/groups' ? styles.active : ''}`}
                  to="/groups"
                  onClick={closeMenus}
                >
                  Groups
                </Link>
              </li>

            </ul>
          </nav>

          <button className={`${styles.ctaBtn} btn btn-primary`} onClick={() => {
            if (location.pathname !== '/') {
              navigate('/')
              setTimeout(() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' }), 300)
            } else {
              document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}>
            Book Stay →
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile drawer */}
      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`} aria-label="Mobile navigation">
        <button className={styles.mobileBackBtn} onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <ArrowLeft size={18} /> Back
        </button>

        <Link className={`${styles.mobileNavLink} ${location.pathname === '/' ? styles.active : ''}`} to="/" onClick={closeMenus}>
          <Home size={18} /> Home
        </Link>

        {/* About accordion */}
        <button
          className={`${styles.mobileNavLink} ${mobileExpanded === 'about' ? styles.open : ''} ${isActive(['/about', '/pet-friendly', '/awards']) ? styles.active : ''}`}
          onClick={() => setMobileExpanded(prev => prev === 'about' ? null : 'about')}
        >
          <Info size={18} /> About <ChevronDown size={16} style={{ marginLeft: 'auto' }} />
        </button>
        <AnimatePresence>
          {mobileExpanded === 'about' && (
            <motion.div
              className={styles.mobileSubItems}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {ABOUT_ITEMS.map(item => (
                <Link key={item.path} className={`${styles.mobileSubItem} ${location.pathname === item.path ? styles.active : ''}`} to={item.path} onClick={closeMenus}>
                  {item.icon} {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Properties accordion */}
        <button
          className={`${styles.mobileNavLink} ${mobileExpanded === 'properties' ? styles.open : ''} ${isActive(['/rishikesh', '/dehradun', '/varanasi']) ? styles.active : ''}`}
          onClick={() => setMobileExpanded(prev => prev === 'properties' ? null : 'properties')}
        >
          <MapPin size={18} /> Properties <ChevronDown size={16} style={{ marginLeft: 'auto' }} />
        </button>
        <AnimatePresence>
          {mobileExpanded === 'properties' && (
            <motion.div
              className={styles.mobileSubItems}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {PROPERTIES_ITEMS.map(item => (
               <Link key={item.path} className={`${styles.mobileSubItem} ${location.pathname === item.path ? styles.active : ''}`} to={item.path} onClick={closeMenus}>
                  {item.icon} {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <Link
          className={`${styles.mobileNavLink} ${location.pathname === '/groups' ? styles.active : ''}`}
          to="/groups"
          onClick={closeMenus}
        >
          <Users size={18} /> Groups
        </Link>

        <Link
          className={`${styles.mobileNavLink} ${location.pathname === '/blogs' ? styles.active : ''}`}
          to="/blogs"
          onClick={closeMenus}
        >
          <BookOpen size={18} /> Blogs
        </Link>

        <div className={styles.mobileDivider} />
       <Link className={`btn btn-primary ${styles.mobileCtaBtn}`} to="/" onClick={closeMenus}>
          Book Stay →
        </Link>
      </nav>
    </>
  )
}