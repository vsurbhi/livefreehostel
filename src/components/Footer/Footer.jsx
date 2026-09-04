import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import styles from './Footer.module.css'
import logoImg from '../../assets/l1.webp'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  // Reusable: scroll to a section if already on home, otherwise
  // navigate home first and scroll once it mounts.
  const handleSectionLink = (sectionId) => (e) => {
    e.preventDefault()

    if (location.pathname === '/') {
      const el = document.getElementById(sectionId)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>

          {/* LEFT: Contact */}
          <div className={styles.block}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:reservation@livefreehostels.com"><Mail size={14} /> reservation@livefreehostels.com</a></li>
              <li><a href="tel:+919999020248"><Phone size={14} /> 9999020248</a></li>
            </ul>
          </div>

          {/* LEFT: Locations */}
          <div className={styles.block}>
            <h4>Locations</h4>
            <ul>
              <li><Link to="/rishikesh"><MapPin size={14} /> Rishikesh</Link></li>
              <li><Link to="/varanasi"><MapPin size={14} /> Varanasi</Link></li>
              <li><Link to="/dehradun"><MapPin size={14} />Dehradun</Link></li>
            </ul>
          </div>

          {/* LEFT: Policies */}
          <div className={styles.block}>
            <h4>Policies</h4>
            <ul>
              <li><Link to="/hostel-policy">Hostel Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
              <li><Link to="/data-protection-guidelines">Data Protection Guidelines</Link></li>
              <li><Link to="/pet-friendly">Pet Policy</Link></li>
            </ul>
          </div>

          {/* LEFT: Quick Links */}
          <div className={styles.block}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/groups">Groups</Link></li>
              <li><a href="#awards" onClick={handleSectionLink('awards')}>Awards</a></li>
              <li><a href="#workation" onClick={handleSectionLink('workation')}>Workations</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* RIGHT: Brand — logo + social */}
          <div className={styles.brand}>
            <img src={logoImg} alt="Live Free Hostel" className={styles.logoImg} />
            <div className={styles.socialRow}>
              <a href="https://www.instagram.com/livefreehostels" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/livefreehostels" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.linkedin.com/company/livefreehostels" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@livefreehostels" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="YouTube">
                <Youtube size={17} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.tagline}>
            Your <span>Home Away From Home</span>, anywhere in the world ✨
          </p>
          <p className={styles.copy}>© {new Date().getFullYear()} Live Free Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}