import SEO from '../components/Seo/Seo';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Heart, Globe, Home, Users, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import GroupImage from "../assets/Our_Story.webp"


const VALUES = [
  { icon: Users, title: 'People First, Always', desc: 'Our staff are travelers too. They know what matters — a genuine smile, local tips, and a door that always feels open. At Live Free Hostels, People First, Always is more than a philosophy—it is the heart of everything we do. Because at the end of the day, hostels are not just buildings—they are collections of stories, friendships, and experiences shared by people from around the world.' },
  { icon: Users, title: 'Inclusivity', desc: 'At Live Free Hostels, inclusivity means creating a space where every traveler feels welcome, respected, and valued—regardless of their nationality, culture, language, gender, age, or travel style. Across our locations in Rishikesh, Varanasi, and Dehradun, we celebrate diversity and promote a culture of openness, kindness, and mutual respect. For us, inclusivity is not just a value—it is the foundation of the Live Free experience, where every journey is enriched by the people we meet along the way.' },
  { icon: Globe, title: 'Affordable Exploration', desc: 'Meaningful travel should be accessible to everyone, not just a privilege for a few. Accessibility, for us, means offering comfortable, safe, and community-driven stays at affordable prices, allowing more people to explore new destinations and experiences without financial barriers. Through affordability, we empower travelers to stay longer, discover deeper, and create unforgettable memories—proving that great experiences dont have to come with a high price tag.' },
  { icon: Heart, title: 'Safety & Trust', desc: 'From maintaining clean and well-managed spaces to fostering a respectful and welcoming community, we prioritize the well-being of our guests at every step. Our team is dedicated to providing support, guidance, and assistance whenever needed, ensuring that every traveler feels cared for and valued. When travelers feel safe and supported, they are free to experience the world with confidence.' },
];

const FOUNDERS = [
  { name: 'Arpan Dabas', role: 'Co-Founder', initials: 'AD', desc: 'Arpan leads the Live Free vision with a deep understanding of what travelers truly need. An avid traveler himself, he has shaped the Live Free experience from a guest-first perspective, ensuring that every detail enhances comfort, convenience, and connection With a background in Mechanical Engineering and hands-on experience in HVAC systems setup and maintenance, Arpan brings a meticulous eye for detail and operational excellence. His ability to blend technical expertise with a passion for travel has helped create thoughtfully designed spaces where guests can feel at home while exploring the world.' },
  { name: 'Dharmendra Kumar Sharma', role: 'Co-Founder', initials: 'DS', desc: 'Dharmendra drives the technological vision of Live Free, ensuring that innovtion and efficiency remain at the core of its operations. With a strong background in the IT industry, he brings extensive expertise in technology, systems management, and process optimization. His tech-driven approach helps streamline operations, enhance guest experiences, and build reliable systems that support the growth of Live Free. By combining technical knowledge with strategic thinking, Dharmendra plays a key role in creating a seamless and modern hospitality experience for both guests and teams.' },
];

const SUSTAINABILITY_POLICIES = [
  'Reduction in paper use through the adoption of new working methods for this purpose.',
  'Filtered water dispensers with reusable bottles available to avoid excessive plastic consumption.',
  'Reusable cups for all beverages consumed at our establishments.',
  'Recent electronic equipment with low consumption and greater energy efficiency.Such as Inverter AC, LED bulbs etc.',
  '  Reusing old recycled materials in renovations or new projects wherever possible.',
  ' Directions and information on public transport routes to reach our facilities.',
  'Encouraging virtual meetings whenever possible and offering sustainable travel options.',
  ' Work carried out with local communities.',
  'Use of local products and local suppliers (fruit and breakfast items).',
  'Installation of heat pumps for heating water in progress at all the properties.',
  '… More on the way!',
];

// ---- Simple responsive hook (no CSS media queries needed for inline styles) ----
function useViewport() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

const getStyles = (isMobile, isTablet) => ({
  hero: {
    padding: isMobile ? '88px 20px 44px' : 'clamp(100px, 20vw, 140px) 24px clamp(56px, 8vw, 80px)',
    background: 'linear-gradient(160deg, var(--bg) 60%, var(--accent-light) 100%)',
    textAlign: 'center',
  },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 800, marginBottom: 18, lineHeight: 1.15 },
  sub: { color: 'var(--text-muted)', fontSize: isMobile ? '0.98rem' : '1.1rem', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.7 },

  storySection: { padding: isMobile ? '48px 0px' : '70px 0px', background: 'var(--surface-alt)' },
  storyContainer: { maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 20px' : '0 24px' },
  storyHeader: { textAlign: 'center', maxWidth: 640, margin: isMobile ? '0 auto 32px' : '0 auto 56px' },
  storyBody: { display: 'flex', gap: isMobile ? 28 : 48, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' },
  imageWrapper: {
    flex: '1 1 480px',
    maxWidth: 560,
    width: '100%',
    height: isMobile ? undefined : 'clamp(340px, 46vw, 480px)',
    aspectRatio: isMobile ? '4 / 3' : undefined,
    borderRadius: 'var(--radius-xl)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
  },
  storyImg: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: '5% 10%', display: 'block' },
  storyLabel: { fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: 14 },
  storyH2: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 6vw, 2.2rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: 20 },
  storyP: { color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.8, marginBottom: 18, textAlign: isMobile ? 'left' : 'justify' },
  // On mobile: no fixed height, no clipped scroll box — content just flows naturally
  storyTextWrap: {
    position: 'relative',
    flex: '1 1 380px',
    maxWidth: isMobile ? '100%' : 480,
    width: '100%',
    minWidth: 0,
    height: isMobile ? 'auto' : 'clamp(340px, 46vw, 480px)',
  },
  storyTextBox: {
    height: isMobile ? 'auto' : '100%',
    overflowY: isMobile ? 'visible' : 'auto',
    paddingRight: isMobile ? 0 : 20,
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--primary) transparent',
  },
  scrollFade: {
    display: isMobile ? 'none' : 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    background: 'linear-gradient(to bottom, transparent, var(--surface-alt))',
    pointerEvents: 'none',
  },

  sustainSection: { padding: isMobile ? '48px 0' : '70px 0', background: 'var(--surface-alt)' },
  sustainHeaderRow: { maxWidth: 1050, margin: '0 auto', padding: isMobile ? '0 20px 20px' : '0 24px 24px', textAlign: 'center' },
  sustainSub: { color: 'black', fontSize: isMobile ? '0.95rem' : '1.05rem', fontWeight: 700, lineHeight: 1.8, maxWidth: 1050, margin: '12px auto 0' },
  sustainBody: { display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', maxWidth: 1300, margin: isMobile ? '24px auto 0' : '40px auto 0', padding: isMobile ? '0 20px' : '0 24px', gap: isMobile ? 28 : 0 },
  sustainImageWrapper: { flex: '1 1 480px', maxWidth: 560, width: '100%', aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)', overflow: 'hidden' },
  sustainImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  sustainPoliciesWrap: { flex: '1 1 420px', padding: isMobile ? '0' : '8px 0 8px clamp(0px, 8vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  sustainPolicyTitle: { fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 800, marginBottom: 20, color: 'var(--text)' },
  sustainList: { display: 'flex', flexDirection: 'column', gap: 12 },
  sustainListItem: { display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)' },
  sustainBullet: { width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', marginTop: 8, flexShrink: 0 },

  // Carousel: on desktop/tablet buttons OVERLAY the track; on mobile they sit BELOW the cards
  carouselOuter: {
    position: 'relative',
    display: isMobile ? 'flex' : 'block',
    flexDirection: isMobile ? 'column' : undefined,
    alignItems: isMobile ? 'stretch' : undefined,
    gap: isMobile ? 16 : 0,
    marginTop: isMobile ? 28 : 48,
    maxWidth: 1400,
    margin: `${isMobile ? 28 : 48}px auto 0`,
  },
  carouselMask: {
    overflow: 'hidden',
    width: '100%',
    padding: isMobile ? '0 20px' : '0 56px',
  },
  // Row that holds the two arrow buttons under the carousel on mobile
  carouselNavRow: {
    display: isMobile ? 'flex' : 'none',
    justifyContent: 'center',
    gap: 20,
  },
  carouselTrack: { display: 'flex', gap: isMobile ? 16 : 32, width: 'max-content' },
  valCard: {
    background: 'var(--surface)',
    borderRadius: 'var(--radius-lg)',
    padding: isMobile ? '24px 20px' : 'clamp(28px, 5vw, 40px) clamp(22px, 4vw, 32px)',
    boxShadow: 'var(--shadow-xs)',
    width: isMobile ? 'calc(100vw - 72px)' : isTablet ? '380px' : '450px',
    maxWidth: 450,
    flexShrink: 0,
  },
  iconBox: { width: 52, height: 52, background: 'var(--primary-glow)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: 20 },

  foundGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: isMobile ? 24 : 40, marginTop: isMobile ? 32 : 48, maxWidth: 1200, margin: `${isMobile ? 32 : 48}px auto 0`, padding: isMobile ? '0 4px' : 0 },
  foundCard: { background: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: isMobile ? '32px 22px' : 'clamp(32px, 6vw, 48px) clamp(22px, 5vw, 36px)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' },
  avatar: { width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-light), var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#fff', fontSize: '1.6rem', fontWeight: 800 },
  line: { height: 3, width: 40, background: 'var(--primary)', borderRadius: 4, margin: '12px auto 16px' },

  // Desktop/tablet: buttons overlay left/right of the track.
  // Mobile: buttons are static, placed in carouselNavRow below the cards (no absolute positioning).
  navBtn: (side) => ({
    position: isMobile ? 'static' : 'absolute',
    top: isMobile ? undefined : '50%',
    [side]: isMobile ? undefined : 8,
    transform: isMobile ? 'none' : 'translateY(-50%)',
    zIndex: 2,
    width: isMobile ? 44 : 48,
    height: isMobile ? 44 : 48,
    borderRadius: '50%',
    background: '#ffffff',
    color: '#222',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
    transition: 'all 0.25s ease',
  }),
});

function ValuesCarousel({ items, styles, isMobile }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const setWidthRef = useRef(0);

  const SPEED = 40; // pixels per second (auto-scroll)
  const NUDGE = isMobile ? 280 : 480; // pixels moved per manual arrow click

  useAnimationFrame((time, delta) => {
    const track = trackRef.current;
    if (!track) return;

    if (setWidthRef.current === 0) {
      setWidthRef.current = track.scrollWidth / 2;
    }

    if (!isPausedRef.current && setWidthRef.current > 0) {
      offsetRef.current += (SPEED * delta) / 1000;
      if (offsetRef.current >= setWidthRef.current) {
        offsetRef.current -= setWidthRef.current;
      }
      track.style.transform = `translateX(${-offsetRef.current}px)`;
    }
  });

  const nudge = (dir) => {
    const track = trackRef.current;
    if (!track || setWidthRef.current === 0) return;
    offsetRef.current += dir * NUDGE;
    if (offsetRef.current >= setWidthRef.current) {
      offsetRef.current -= setWidthRef.current;
    }
    if (offsetRef.current < 0) {
      offsetRef.current += setWidthRef.current;
    }
    track.style.transform = `translateX(${-offsetRef.current}px)`;
  };

  const leftBtn = (
    <button style={styles.navBtn('left')} onClick={() => nudge(-1)} aria-label="Previous">
      <ChevronLeft size={isMobile ? 20 : 22} />
    </button>
  );
  const rightBtn = (
    <button style={styles.navBtn('right')} onClick={() => nudge(1)} aria-label="Next">
      <ChevronRight size={isMobile ? 20 : 22} />
    </button>
  );

  return (
    <div
      style={styles.carouselOuter}
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      onTouchStart={() => { isPausedRef.current = true; }}
    >
      {/* Desktop/tablet: buttons overlay left/right of the track */}
      {!isMobile && leftBtn}

      <div style={styles.carouselMask}>
        <div ref={trackRef} style={styles.carouselTrack}>
          {[...items, ...items].map((v, i) => (
            <div key={i} style={styles.valCard}>
              <div style={styles.iconBox}><v.icon size={24} strokeWidth={1.8} /></div>
              <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: '1.2rem' }}>{v.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {!isMobile && rightBtn}

      {/* Mobile: buttons sit below the card, side by side */}
      <div style={styles.carouselNavRow}>
        {leftBtn}
        {rightBtn}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const width = useViewport();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const styles = getStyles(isMobile, isTablet);

  const storyParagraphs = [
    `Every great journey begins with a simple idea. For Live Free Hostel, that idea was born in 2017—to create a space where travelers could find more than just a bed for the night. The founders envisioned a place that was vibrant, welcoming, affordable, and community-driven; a place where strangers could become friends and every traveler could feel at home.`,
    `The story began in Rishikesh, a town nestled in the foothills of the Himalayas and blessed by the sacred Ganga River. Known as the Yoga Capital of the World, Rishikesh attracts seekers, adventurers, backpackers, and explorers from every corner of the globe. Recognizing the growing need for quality backpacker accommodation, Live Free Hostel opened its doors with a mission to combine comfort, culture, adventure, and meaningful human connections.`,
    `Located near Laxman Jhula in Tapovan, the hostel quickly became a favorite among travelers. Unlike conventional hotels, Live Free offered open common spaces, rooftop hangout areas, community dinners, music sessions, and opportunities for guests to share stories and experiences.`,
    `Today, Live Free Hostels represents much more than accommodation. It stands for a style of travel that values experiences over itineraries, friendships over formalities, and stories over schedules. Whether guests arrive seeking adventure in the rapids of the Ganga, spiritual growth through yoga and meditation, or simply a break from routine life, Live Free provides a space where journeys begin and memories are made.`,
    `What started as one property in Rishikesh grew into a community across three cities. Each hostel carries the same soul: warmth, design, and the belief that the best conversations happen when strangers share a table. From a single vision in 2017 to a recognized hostel brand across India, the journey of Live Free Hostel reflects the spirit of its name itself—to travel freely, live openly, and create connections that transcend borders.`,
  ];

  const title = 'About Us | LiveFree Hostel'
  const description = 'Since 2017, LiveFree Hostel has grown from one property in Rishikesh to a community across Rishikesh, Varanasi, and Dehradun — built on comfort, culture, and connection. Started as one property in Rishikesh grew into a community across three cities. Each hostel carries the same soul: warmth, design, and the belief that the best conversations happen when strangers share a table'
  


  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
       <SEO
       title={title}
       description={description}
       path="/about"
       />
      <div style={styles.hero}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.h1 style={styles.h1} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            We Are <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Live Free</span>
          </motion.h1>
          <p style={styles.sub}>Born from a restless love for wandering, and the beautiful truth that home isn't a place—it's a feeling we share.</p>
        </div>
      </div>

      <section style={styles.storySection}>
        <div style={styles.storyContainer}>

          <motion.div
            style={styles.storyHeader}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Story</span>
            <h2 style={styles.storyH2}>From a Dream to a Backpacker's Home</h2>
          </motion.div>

          <div style={styles.storyBody}>

            <motion.div
              style={styles.imageWrapper}
              initial={{ opacity: 0, x: isMobile ? 0 : -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.9, 0.4, 1] }}
              viewport={{ once: true }}
            >
              <img
                src={GroupImage}
                alt="Live Free Story"
                style={styles.storyImg}
              />
            </motion.div>

            <motion.div
              style={styles.storyTextWrap}
              initial={{ opacity: 0, x: isMobile ? 0 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.9, 0.4, 1], delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div style={styles.storyTextBox}>
                {storyParagraphs.map((text, idx) => (
                  <p key={idx} style={styles.storyP}>{text}</p>
                ))}
              </div>
              <div style={styles.scrollFade} />
            </motion.div>

          </div>
        </div>
      </section>

      <section style={styles.sustainSection}>
        <div style={styles.sustainHeaderRow}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Sustainability
          </motion.span>
          <motion.p
            style={styles.sustainSub}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            Live Free recognises that preserving the environment and the well-being of local communities are crucial to its long-term success. We are dedicated to prioritise environmental sustainability through responsible resource management practices.
          </motion.p>
        </div>

        <div style={styles.sustainBody}>
          <motion.div
            style={styles.sustainImageWrapper}
            initial={{ opacity: 0, x: isMobile ? 0 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.9, 0.4, 1] }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80"
              alt="Sustainability at Live Free"
              style={styles.sustainImg}
            />
          </motion.div>

          <motion.div
            style={styles.sustainPoliciesWrap}
            initial={{ opacity: 0, x: isMobile ? 0 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.9, 0.4, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 style={styles.sustainPolicyTitle}>Our Sustainability Policies</h3>
            <div style={styles.sustainList}>
              {SUSTAINABILITY_POLICIES.map((policy, idx) => (
                <div key={idx} style={styles.sustainListItem}>
                  <span style={styles.sustainBullet} />
                  <span>{policy}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '48px 0px' : '70px 0px' }}>
        <div className="container" style={{ maxWidth: 1400, margin: '0 auto', padding: isMobile ? '0 20px' : 0 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
            <span className="section-label">What We Stand For</span>
            <h2 style={{ ...styles.storyH2, textAlign: 'center' }}>The Live Free Philosophy</h2>
          </div>
          <ValuesCarousel items={VALUES} styles={styles} isMobile={isMobile} />
        </div>
      </section>

      <section id="founders" style={{ padding: isMobile ? '48px 0px' : '70px 0px', background: 'var(--surface-alt)' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 20px' : 0 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
            <span className="section-label">The Team</span>
            <h2 style={{ ...styles.storyH2, textAlign: 'center' }}>Meet Our Founders</h2>
          </div>
          <div style={styles.foundGrid}>
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                style={styles.foundCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                viewport={{ once: true }}
              >
                <div style={styles.avatar}>{f.initials}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem' }}>{f.name}</h3>
                <div style={styles.line} />
                <h4 style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1.5 }}>{f.role}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}