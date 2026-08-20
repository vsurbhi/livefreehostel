import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import styles from './ExperiencePage.module.css'

const images = {
  hero: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85',
  cafe: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=85',
  yoga: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85',
  varanasi: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=85',
  trek: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85',
  dorm: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=85',
  food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85',
  map: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=85',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.65, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const activities = [
  {
    title: 'Yoga retreats',
    text: 'Sunrise sessions, breathwork, and mindful movement for all levels.',
    image: images.yoga,
    imageClass: styles.photoCafe,
  },
  {
    title: 'Ganga Aarti tours',
    text: 'Golden hour on the ghats, ceremony, color, and calm.',
    image: images.varanasi,
    imageClass: styles.photoGhat,
  },
  {
    title: 'Trekking adventures',
    text: 'Guided trails, waterfalls, and Himalayan foothills.',
    image: images.trek,
    imageClass: styles.photoRoom,
  },
  {
    title: 'Cafe crawls',
    text: 'Specialty coffee and neighborhood gems with locals.',
    image: images.cafe,
    imageClass: styles.photoCafe,
  },
  {
    title: 'Dorm socials',
    text: 'Meet fellow backpackers before the next city walk.',
    image: images.dorm,
    imageClass: styles.photoRoomLower,
  },
  {
    title: 'River evenings',
    text: 'Slow sunsets, shared stories, and peaceful river views.',
    image: images.varanasi,
    imageClass: styles.photoGhat,
  },
]

const gallery = [
  { image: images.cafe, label: 'Courtyard cafe' },
  { image: images.hero, label: 'Hostel stories', imageClass: styles.photoCafe },
  { image: images.varanasi, label: 'Ganga view', imageClass: styles.photoGhat },
  { image: images.dorm, label: 'Dorm details', imageClass: styles.photoRoomLower },
  { image: images.food, label: 'Local food walk', imageClass: styles.photoRoom },
  { image: images.map, label: 'Rishikesh map', imageClass: styles.photoMap },
]

const events = [
  { day: 'FRI', title: 'Friday bonfire', text: 'Stories, acoustic music, and firelight.' },
  { day: 'SAT', title: 'Saturday yoga', text: 'Sunrise flow to start the day calm.' },
  { day: 'SUN', title: 'Sunday trek', text: 'Guided hills and photo stops.' },
]

const stories = [
  {
    quote: 'The yoga morning turned strangers into friends before breakfast.',
    author: 'Aarav, Delhi',
  },
  {
    quote: 'Live Free made Rishikesh feel easy, local, and full of tiny surprises.',
    author: 'Mia, Berlin',
  },
]

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: `url(${images.hero})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <motion.div className={styles.heroCopy} {...fadeUp()}>
            <span className={styles.heroLabel}>Live Free Experiences</span>
            <h1>Live the journey</h1>
            <p>Discover unforgettable hostel moments - yoga, rivers, markets, music, and the people who make them matter.</p>
            <div className={styles.heroActions}>
              <a href="#activities" className={styles.primaryBtn}>Explore Experiences</a>
              <a href="/groups" className={styles.secondaryBtn}>Join a Group</a>
            </div>
          </motion.div>

          <motion.div className={styles.stats} {...fadeUp(0.12)}>
            <div><strong>120+</strong><span>Weekly Events</span></div>
            <div><strong>5000+</strong><span>Travelers</span></div>
            <div><strong>20+</strong><span>Local Experiences</span></div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section} id="activities">
        <div className={styles.container}>
          <motion.div className={styles.sectionHead} {...fadeUp()}>
            <span className={styles.eyebrow}>Curated Activities</span>
            <h2>Designed for storytellers, explorers, and community builders.</h2>
          </motion.div>

          <div className={styles.activityGrid}>
            {activities.map((activity, index) => (
              <motion.article key={activity.title} className={styles.activityCard} {...fadeUp(index * 0.06)}>
                <div className={`${styles.cardImage} ${activity.imageClass || ''}`}>
                  <img src={activity.image} alt={activity.title} />
                </div>
                <div className={styles.cardBody}>
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                  <button type="button">Join Now</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.featuredSection}`}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHead} {...fadeUp()}>
            <span className={styles.eyebrow}>Featured Experiences</span>
            <h2>Travel stories that start with unforgettable moments.</h2>
          </motion.div>

          <div className={styles.storyGrid}>
            <motion.div className={styles.largeImage} {...fadeUp()}>
              <img src={images.cafe} alt="Live Free courtyard cafe" />
            </motion.div>
            <motion.article className={styles.storyCopy} {...fadeUp(0.1)}>
              <span className={styles.eyebrow}>Sunrise Boat Ride</span>
              <h3>Sunrise boat ride - Varanasi</h3>
              <p>Float past historic ghats as the city wakes in gold light.</p>
            </motion.article>
            <motion.article className={styles.roomStrip} {...fadeUp(0.08)}>
              <div className={`${styles.stripPhoto} ${styles.photoRoom}`}>
                <img src={images.dorm} alt="Mixed dormitory" />
              </div>
              <div>
                <h3>4 Bed Mixed Dormitory</h3>
                <p>Wifi, lockers, lights, cozy bunks, and easy access to every group plan.</p>
                <button type="button">Book Now</button>
              </div>
            </motion.article>
            <motion.div className={`${styles.largeImage} ${styles.ghatImage}`} {...fadeUp(0.12)}>
              <img src={images.varanasi} alt="Varanasi ghat at sunset" />
            </motion.div>
            <motion.article className={styles.storyCopy} {...fadeUp(0.16)}>
              <span className={styles.eyebrow}>Local Food Walk</span>
              <h3>Local food walk - Dehradun</h3>
              <p>Street food, chai stalls, and regional flavor on a guided route.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHead} {...fadeUp()}>
            <span className={styles.eyebrow}>Community Gallery</span>
            <h2>Moments from backpackers, events, cafes, and mountain trips.</h2>
          </motion.div>

          <div className={styles.galleryGrid}>
            {gallery.map((item, index) => (
              <motion.figure key={`${item.label}-${index}`} className={styles.galleryItem} {...fadeUp(index * 0.05)}>
                <img className={item.imageClass || ''} src={item.image} alt={item.label} />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.eventsSection}`}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHead} {...fadeUp()}>
            <span className={styles.eyebrow}>Upcoming Events</span>
            <h2>Plan your weekend with live community experiences.</h2>
          </motion.div>

          <div className={styles.eventList}>
            {events.map((event, index) => (
              <motion.article key={event.day} className={styles.eventItem} {...fadeUp(index * 0.06)}>
                <span>{event.day}</span>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHead} {...fadeUp()}>
            <span className={styles.eyebrow}>Traveler Stories</span>
            <h2>Feedback from travelers who found their people here.</h2>
          </motion.div>
          <div className={styles.testimonialGrid}>
            {stories.map((story, index) => (
              <motion.article key={story.author} className={styles.testimonialCard} {...fadeUp(index * 0.08)}>
                <ArrowUpRight size={24} />
                <p>"{story.quote}"</p>
                <h3>{story.author}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
