import SEO from '../components/Seo/Seo'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Send, Phone, Mail } from 'lucide-react'
import styles from './GroupsPage.module.css'
import IndianHikesImg from '../assets/IndianHikes.png'
import Cover from "../assets/cover_photo.jpg"


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const LOCATIONS = ['Rishikesh', 'Varanasi','Dehradun',]
const TRIP_PURPOSES = ['Trekking Group', 'Student Group', 'Corporate', 'Leisure & Friends']
const ADD_ONS = ['Custom Buffet Meals 🥞', 'Private Bonfire 🔥', 'White-Water Rafting 🛶']
const ORG_NAME_SUGGESTIONS = ['Indiahikes Group Leader', 'ABC Corporates', 'XYZ Trekking Club', 'College Student Group']

const getToday = () => new Date().toISOString().split('T')[0]
const getTomorrow = () => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

export default function GroupsPage() {
  const [form, setForm] = useState({
    orgName: '', phone: '', email: '', location: '', people: '',
    checkin: getToday(), checkout: getTomorrow(), purpose: '', addOns: [], notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const toggleAddOn = addon => setForm(f => ({
    ...f,
    addOns: f.addOns.includes(addon) ? f.addOns.filter(a => a !== addon) : [...f.addOns, addon],
  }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  useEffect(() => {
    if (form.checkin && form.checkout <= form.checkin) {
      const d = new Date(form.checkin)
      d.setDate(d.getDate() + 1)
      setForm(f => ({ ...f, checkout: d.toISOString().split('T')[0] }))
    }
  }, [form.checkin])

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: 12,
    border: '1.5px solid #d0d0d0', fontSize: '1rem', fontFamily: 'var(--font-body)',
    outline: 'none', color: 'var(--text)', background: '#fff', boxSizing: 'border-box',
  }

  const labelStyle = { fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }
  // helmet description
  const title = 'Group & Trekking Bookings | LiveFree Hostel'
  const description = 'Book group stays at LiveFree Hostel – official Indiahikes partner. Hostel for 50+ guests in Rishikesh, Varanasi & Dehradun. Custom meals, bonfire, rafting.'

  return (
    <>
   <SEO 
   title={title}
   description={description}
   path='/groups'
   />
      {/* 1. HERO BANNER */}
      <section style={{ position: 'relative', minHeight: 'calc(75vh + 300px)', paddingTop: "10px", display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={Cover} alt="Groups" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,80,60,0.5) 0%, rgba(0,80,60,0.25) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ maxWidth: 700 }}>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24, fontFamily: 'var(--font-display)' }}>
              Group Bookings Made Effortless
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. TWO-COLUMN: IMAGE LEFT, CONTENT RIGHT */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className={styles.twoCol}>
          <motion.div {...fadeUp(0)} className={styles.twoColImage}>
  <img src={IndianHikesImg} alt="Group activities" style={{  width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center' }} />
</motion.div>
            <motion.div {...fadeUp(0.1)}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15, marginBottom: 28, fontFamily: 'var(--font-display)' }}>
                Why Book With Us?
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 32 }}>
                Planning a trip for a large crowd? At Live Free Hostels, we make group travel seamless, budget-friendly, and incredibly fun. Whether you are leading a trekking expedition, a corporate retreat, or a university trip, our properties are perfectly equipped to serve as your ultimate base camp. 
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  'Flexible accommodation for groups of various sizes',
                  'Shared and private room options tailored to your needs',
                  'Dedicated support from first contact to check-in',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
                      ✓
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE OFFER - NUMBERED */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 20, fontFamily: 'var(--font-display)' }}>
             Why Groups Choose Live Free
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
              Complete support for your group travel needs
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {[
              { num: '1', title: 'Trusted by the Best', desc: 'For over 5 years, we have been the official hosting partner for Indiahikes, India’s largest and most trusted trekking community.' },
              { num: '2', title: 'Massive 50+ Capacity', desc: 'We regularly manage large base-camp turnarounds and comfortably accommodate big teams of up to 50+ people across our spacious properties.' },
              { num: '3', title: 'Trained, Expert Team:', desc: 'Our on-ground hospitality staff is professionally trained to handle heavy group logistics, tight schedules, and safety needs seamlessly.' },
              { num: '4', title: 'Tailored Buffet Meals', desc: 'Our in-house kitchen prepares fresh, wholesome breakfast, lunch, and dinner buffets customized exactly to your group’s budget and dietary requirements.' },
              { num: '5', title: 'End-to-End Planning', desc: 'From room allocations to local transport coordination, we organize your entire stay layout from start to finish.' },
              { num: '6', title: 'Exclusive Group Activities', desc: 'Enjoy private bonfires, acoustic jams, rooftop yoga, or occasional staff-led local hikes, street-food crawls, and white-water rafting trips.' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                style={{ padding: 32, background: '#f9f9f9', borderRadius: 16, border: '1px solid #e8e8e8' }}
              >
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--primary)', marginBottom: 16 }}>
                  {item.num}.
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPLIT FORM SECTION */}
      <section style={{ padding: '100px 0', background: '#f5f5f5' }}>
        <div className="container">
          <div className={styles.formSplit}>
            {/* LEFT PANEL */}
            <div className={styles.formLeftPanel}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#fff', marginBottom: 24, lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
                Let’s Plan Your Group Trip!
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: 32 }}>
               Bring your team to a hostel that the experts trust. Drop us your details, and our group coordinator will curate a custom package for you within 24 hours.
              </p>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }} />
            </div>

            {/* RIGHT PANEL - FORM */}
            <div className={styles.formRightPanel}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 12, color: 'var(--text)' }}>
                    We've got your request!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    Our team will review your details and get back to you within 24 hours with a personalised group proposal. Can't wait to host you!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <input
                      type="text"
                      name="orgName"
                      value={form.orgName}
                      onChange={handleChange}
                      required
                      placeholder="Your Name / Organization Name *"
                      list="orgNameSuggestions"
                      style={inputStyle}
                    />
                    <datalist id="orgNameSuggestions">
                      {ORG_NAME_SUGGESTIONS.map(s => <option key={s} value={s} />)}
                    </datalist>
                  </div>

                  <div className={styles.formRow}>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="Contact Number *" style={inputStyle} />
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="E-mail *" style={inputStyle} />
                  </div>

                  <div className={styles.formRow}>
                    <select name="location" value={form.location} onChange={handleChange} required style={inputStyle}>
                      <option value="">Preferred Location *</option>
                      {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                    <input type="number" name="people" value={form.people} onChange={handleChange} required placeholder="Total Number of Guests *" min="5" style={inputStyle} />
                  </div>

                  <div className={styles.formRow}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={labelStyle}>Check-in</label>
                      <input type="date" name="checkin" value={form.checkin} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={labelStyle}>Check-out</label>
                      <input type="date" name="checkout" value={form.checkout} onChange={handleChange} min={form.checkin} style={inputStyle} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <select name="purpose" value={form.purpose} onChange={handleChange} required style={inputStyle}>
                      <option value="">Purpose of Trip *</option>
                      {TRIP_PURPOSES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                  
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px' }}>
                      {ADD_ONS.map(addon => (
                        <label key={addon} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={form.addOns.includes(addon)}
                            onChange={() => toggleAddOn(addon)}
                          />
                          {addon}
                        </label>
                      ))}
                    </div>
                  </div>

                  <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" placeholder="Special Requests / Notes" style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }} />

                  <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #f28c38 0%, var(--primary) 55%, var(--primary-dark) 100%)', color: '#fff', border: 'none', padding: '16px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s', boxShadow: '0 14px 30px rgba(232, 93, 58, 0.28)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    TO SEND
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}