import SEO from '../components/Seo/Seo'
import { motion } from 'framer-motion'
import { PawPrint, ShieldCheck, Heart, AlertCircle, Gift, Ban, icons } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const TERMS = [
  'Pets accepted: domestic dogs and cats only.',
  'Permitted in private rooms and shared rooms reserved for the same group.',
  'Maximum limit: One pet per room. Total of 3 pet families in whole property.',
  'The animal must always be accompanied by the guest or kept in a suitable carrier.',
  'Leashes are mandatory in all common areas.',
  'Pets are not allowed in dining areas, cafes, or any food service zones.',
  'Guests are responsible for cleaning up after their pets at all times.',
  'Excessive noise or aggressive behaviour may result in the animal being asked to leave.',
  'The use of hostel towels or linen by animals is expressly prohibited.',
  'Animals may not be bathed in room bathrooms.',
  'Pets must not be left alone in the room overnight.',
]

const COMPLIMENTARY = [
  { icon: '🛏️', label: 'Bed or mat for your pet.' },
  { icon: '🛍️', label: 'Waste bags at reception.'},
  { icon:"🦴" , label:"Pet bowls & Food."}
]

export default function PetFriendlyPage() {

   const title = 'Pet-Friendly Stays | LiveFree Hostel'
  const description = 'Traveling with your dog or cat? See LiveFree Hostel\'s pet policy — room limits, house rules, and complimentary bed, bowls, and waste bags included.'

  return (
    <div style={{ background: '#fff', overflowX: 'hidden' }}>
       <SEO title={title} description={description} path="/pet-friendly"/>
      
      {/* 1. Hero - Fixed Center Alignment */}
      <section style={{
        minHeight: '55vh',
        background: 'linear-gradient(135deg, #1a4a3a 0%, #2d7a5e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80')",
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.12)', borderRadius: 99,
              padding: '8px 24px', marginBottom: 24
            }}>
              <PawPrint size={18} color="#c13b1a" />
              <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Pet Friendly</span>
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800,
            color: '#fff', lineHeight: 1.1, marginBottom: 20
          }}>
            Get ready for a stay that will make your best friend's tail wag with joy!
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 600, margin: '0 auto' }}>
            We believe travel is best measured in shared moments. At Live Free, those moments are made pure, joyful, and complete.
          </motion.p>
        </div>
      </section>

      {/* 2. Terms Section - Responsive Grid Alignment */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start'
          }}>
            {/* Left photo */}
            <motion.div {...fadeUp(0)} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 40px rgba(255, 252, 252, 0.1)', aspectRatio: '4/5' }}>
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=700&q=80" alt="Pet friendly stay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Right terms content */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                // backgroundColor: '#e85d3af3', // Orange Background
                padding: '6px 12px',
                borderRadius: 200, // "Goes 4" Border Radius
                marginBottom: 16
              }}>
                <AlertCircle size={14} color="#fff" /> {/* 4th Icon */}
                <span className="section-label" >
                  General Terms & Conditions
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#1a1a1a', marginBottom: 12, lineHeight: 1.15 }}>
                Daily rate per pet: <span style={{ color: '#e85d3af3' }}>₹500</span>
              </h2>
              <p style={{ color: '#777', fontSize: '0.95rem', marginBottom: 28, lineHeight: 1.7 }}>
                To ensure a spotless experience for all guests, a ₹500 refundable deposit applies.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {TERMS.map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.9rem', color: '#444', lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2d7a5e', flexShrink: 0, marginTop: 8 }} />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Complimentary + Deposits - Split Alignment */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #f0faf5, #e8f5ef)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48
          }}>
            {/* Complimentary */}
            <motion.div {...fadeUp(0)} style={{ background: '#fff', padding: '40px', borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, background: '#f0faf5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Gift size={24} color="#2d7a5e" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Complimentary Extras</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {COMPLIMENTARY.map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#f8fdfb', borderRadius: 12, padding: '14px 18px', border: '1px solid #e0f2e9' }}>
                    <span style={{ fontSize: '1.4rem' }}>{c.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deposits */}
            <motion.div {...fadeUp(0.1)} style={{ background: '#fff', padding: '40px', borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, background: '#fdf2f0', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AlertCircle size={24} color="#e85c3a" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Deposits & Damages</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: '🔒', text: 'Security deposit of ₹500 — returned if no damage occurs.' },
                  { icon: '🛠️', text: 'Material damage repair costs will be charged to the guest.' },
                  { icon: '🧹', text: 'Deep cleaning fees apply for persistent odors or stains.' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{d.icon}</span>
                    <span style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{d.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Hero Alignment */}
      <section style={{ height: 480, overflow: 'hidden', position: 'relative' }}>
        <img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=1400&q=80" alt="Pet and owner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 100%)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', padding: '0 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
            <div style={{ maxWidth: 500 }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
                Because the best adventures are shared.
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                Bring your furry companion along and create memories that go beyond the usual travel story.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}