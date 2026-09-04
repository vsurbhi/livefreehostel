import SEO from '../components/Seo/Seo'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react'
import lfdImage from '../assets/LFD.webp'
import styles from './ContactPage.module.css'


export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const title = 'Contact Us | LiveFree Hostel'
  const description = 'Get in touch with LiveFree Hostel for bookings, group stays, or questions about Rishikesh, Varanasi, and Dehradun properties.'
 
  return (
    <>
    <SEO
    title={title}
    description={description}
    path="/contact"
    />
    <section className={styles.page}>
      <div className={styles.heroBanner}>
        <div className={styles.heroRight}>
          <img src={lfdImage} alt="LFD" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>Contact Us!</h1>
          <p className={styles.heroSubtitle}>
            Whether you have a question about a booking, want to know more about our locations, or just want to swap travel stories, we're all ears. Reach out, and the crew will get back to you before your next check-in!
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.head}>
          {/* <span className="section-label">Get in Touch</span> */}
          {/* <h2 className={styles.title}>Get in Touch</h2> */}
          {/* <p className={styles.subtitle}>
            Whether you have a question about a booking, want to know more about our locations, or just want to swap travel stories, we're all ears. Reach out, and the crew will get back to you before your next check-in!
          </p> */}
        </div>

        <div className={styles.topGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoBody}>
              <h3>Get In Touch!</h3>
              <p>
                Our team is here to help. Whether you have a question about a booking, want to know more about our stay options, or just want to say hello, we'll get back to you quickly.
              </p>
              <a href="tel:+919999020248" className={styles.infoRow}>
                <Phone size={18} />
                <span>+91 9999020248</span>
              </a>
              <a href="mailto:reservation@livefreehostels.com" className={styles.infoRow}>
                <Mail size={18} />
                <span>reservation@livefreehostels.com</span>
              </a>
            </div>
            <div className={styles.imageWrap}>
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
                alt="Guests enjoying conversation"
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Booking Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={16} />
              </button>
              {submitted && (
                <motion.p className={styles.successMsg} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  Thanks! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 20 }}>
          <div className={styles.followRow}>
            <span>Follow us on</span>
            <div className={styles.followIcons}>
              <a href="https://www.instagram.com/livefreehostels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={28} />
              </a>
              <a href="https://www.youtube.com/@livefreehostels" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={28} />
              </a>
              <a href="https://www.linkedin.com/company/livefreehostels/home/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
              <a href="https://www.facebook.com/LiveFreeHostelRishikesh/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}