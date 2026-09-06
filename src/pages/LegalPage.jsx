import SEO from '../components/Seo/Seo'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './LegalPage.module.css'


const SECTIONS = [
  {
    id: 'overview',
    label: 'Overview',
    blocks: [
      { type: 'p', text: "A privacy policy is required by law, and this policy only applies to LiveFree Hostels — not to the websites of other companies, individuals, or organizations to whom we provide links on our website." },
    ],
  },
  {
    id: 'use-of-information',
    label: 'Use of Your Information',
    blocks: [
      { type: 'p', text: "We collect your information for the safety of our users who use our platform and guests who book LiveFree Hostels through our website or third-party platforms, to understand who we are accommodating at our properties and for the safety of our staff. Website user and guest data are also collected for statistical purposes." },
      { type: 'p', text: "We also collect our guests' nationality, date of birth, and gender for statistical analysis purposes. When you visit our website, we may automatically log your IP address (the unique address which identifies your computer on the internet). We use IP addresses to help us manage our website and to collect broad demographic information for analytical use." },
      { type: 'p', text: "For reservations, we send guests confirmation emails and will therefore require your email address. Exceptions may occur if we need to contact previous guests in relation to posts or lost property." },
    ],
  },
  {
    id: 'reservation-data',
    label: 'Reservation Data',
    blocks: [
      { type: 'p', text: "In order for us to confirm a reservation for you, we require some information. This usually consists of:" },
      {
        type: 'ul',
        items: [
          'Your name',
          'Telephone or mobile number — in case of an emergency',
          'Gender',
          'Nationality',
          'Date of birth',
          'Identification data, i.e. Aadhar, Passport, or Driving License details',
          'Credit card details, including the three-digit code on the back of your card',
          'Date of arrival and departure',
          'Email address',
        ],
      },
      { type: 'p', text: "Upon arrival, we will require the same information from your fellow travellers — please ensure they are all aware of this in advance to help make check-in quick and efficient." },
    ],
  },
  {
    id: 'credit-card-data',
    label: 'Credit Card Data',
    blocks: [
      { type: 'p', text: "In order to guarantee reservations across all channels (telephone, website, OTA), we require a full 16-digit debit/credit card number, the name on the card, card type (we accept Visa, Mastercard, or Maestro), the three-digit security code, and the expiry date." },
      { type: 'p', text: "Your debit/credit card details are used only to secure your booking, and LiveFree Hostels will only debit the account if you do not follow our cancellation procedure. For details on cancellation policies, please refer to the Guest Policy." },
    ],
  },
  {
    id: 'website-security',
    label: 'Website Security',
    blocks: [
      { type: 'p', text: "The internet is not a secure medium. However, we have put in place various security procedures, including firewalls, to help block unauthorized traffic to our website." },
    ],
  },
  {
    id: 'photography-film',
    label: 'Photography & Film',
    blocks: [
      { type: 'p', text: "No permission is needed to take photos or film at our properties. However, we do recommend asking for permission before photographing or filming other guests who are not part of your group — verbal consent is encouraged as a goodwill gesture." },
      { type: 'p', text: "On occasion, we may commission crews to film or take photographs at our properties for promotional purposes. If you do not wish to be filmed or photographed, you are required to voluntarily leave the filming or photography area." },
    ],
  },
  {
    id: 'third-parties',
    label: "Disclosing Guests' Information",
    blocks: [
      { type: 'p', text: "Other than for the purposes referred to in this policy, we will not disclose any personal information without your permission, unless we are legally obliged to do so — for example, if required by a court order or for the purposes of preventing fraud." },
    ],
  },
  {
    id: 'your-rights',
    label: 'Your Rights',
    blocks: [
      { type: 'p', text: "By submitting your information to us, you consent to its use as set out in this Privacy Policy. You may request at any time that we provide you with the personal information we hold about you, and you may also choose to add, modify, or delete information about you stored with us." },
      { type: 'p', text: "Provision of such information will be subject to proving your identity and full address with a utility bill and an acceptable photo ID. For any such requests, please reach out to us at the reception of the hostel property, or contact us at 9999020248." },
      { type: 'p', text: "You can also contact us at 9599122996 with any problems or grievances you may have about a reservation or stay." },
      { type: 'p', text: "You also have the right to lodge a complaint with an EU supervisory authority in case of discrepancies — though we do hope you'll give us a chance to make it right first by reaching out to us at 9599122996." },
    ],
  },
  {
    id: 'changes',
    label: 'Changes to This Policy',
    blocks: [
      { type: 'p', text: "We may change our Privacy Policy at any time. Continued use of our website signifies that you agree to any such changes." },
    ],
  },
]

export default function LegalPage() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id]
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
  const title = 'Privacy Policy | LiveFree Hostels'
  const description = 'How LiveFree Hostels collects, uses, and protects your personal data when you book or visit our website.'
  

  return (
    <>
   <SEO title={title} description={description} path='/privacy-policy'/>
   
    <section className={styles.page}>
      <div className={styles.heroBand}>
        <div className="container">
          <div className={styles.introBox}>
            <span className={styles.eyebrow}>Privacy Policy · Effective Immediately</span>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>
              Your data, handled responsibly — what we collect, why we collect it, and how we look after it.
            </p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        <nav className={styles.nav} aria-label="Policy sections">
          <ul>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  className={`${styles.navLink} ${activeId === section.id ? styles.navLinkActive : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navMobile}>
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              className={`${styles.navPill} ${activeId === section.id ? styles.navPillActive : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {SECTIONS.map((section, i) => (
            <motion.article
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className={styles.section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className={styles.sectionHead}>
                <span className={styles.sectionNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h2>{section.label}</h2>
              </div>
              <div className={styles.sectionBody}>
                {section.blocks.map((block, j) =>
                  block.type === 'ul' ? (
                    <ul key={j} className={styles.list}>
                      {block.items.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{block.text}</p>
                  )
                )}
              </div>
            </motion.article>
          ))}

          <div className={styles.footerNote}>
            <p>Have a question about how we handle your data? We're happy to walk you through it.</p>
            <a href="/contact" className={styles.footerBtn}>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}