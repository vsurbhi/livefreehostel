import SEO from '../components/Seo/Seo'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './DataProtectionGuidelines.module.css'


const SECTIONS = [
  {
    id: 'overview',
    label: 'Overview',
    blocks: [
      { type: 'p', text: "At Live Free (\"Live Free\", \"Company\", \"we\", \"our\"), the privacy, security, and protection of guest information remain a top priority." },
      { type: 'p', text: "We wish to inform all guests that there has been an increase in phishing attempts, fraudulent calls, fake payment requests, impersonation scams, spoofed emails, and unauthorized communications targeting hospitality customers across the industry." },
      { type: 'p', text: "Cybercriminals may attempt to misuse company names, logos, employee identities, booking references, or communication channels to deceive guests into disclosing sensitive information or making unauthorized payments." },
    ],
  },
  {
    id: 'official-communication',
    label: 'Official Communication Policy',
    blocks: [
      { type: 'p', text: "Live Free representatives will communicate with guests only through officially authorized channels, including:" },
      {
        type: 'ul',
        items: [
          'Registered company email domains',
          'Verified company contact numbers',
          'Official booking/payment channels',
          'Company-approved communication platforms',
        ],
      },
      { type: 'p', text: "Guests are advised not to trust communications originating from unknown numbers, personal email IDs, unverified links, or suspicious payment requests." },
    ],
  },
  {
    id: 'sensitive-info',
    label: 'Info We Will Never Request',
    blocks: [
      { type: 'p', text: "For security reasons, Live Free personnel will never request the following through calls, WhatsApp, SMS, email, or chat:" },
      {
        type: 'ul',
        items: [
          'Banking passwords',
          'Credit/debit card PIN',
          'CVV numbers',
          'OTPs',
          'Net banking credentials',
          'UPI PIN',
          'Full payment authentication credentials',
        ],
      },
      { type: 'p', text: "Any request for such information should be treated as fraudulent." },
    ],
  },
  {
    id: 'payment-safety',
    label: 'Payment Safety Advisory',
    blocks: [
      { type: 'p', text: "Before making any payment, guests must verify:" },
      {
        type: 'ul',
        items: [
          'Beneficiary name',
          'Bank account / UPI details',
          'Payment link authenticity',
          'Booking confirmation source',
        ],
      },
      { type: 'p', text: "Live Free shall not be responsible for payments made to unauthorized third-party accounts due to failure to verify payment credentials." },
    ],
  },
  {
    id: 'guest-responsibility',
    label: 'Guest Responsibility',
    blocks: [
      { type: 'p', text: "Guests are strongly advised to:" },
      {
        type: 'ul',
        items: [
          'Verify suspicious communications before acting',
          'Avoid clicking unknown links or attachments',
          'Report suspicious messages immediately',
          'Use secure networks while making payments',
          'Keep personal devices protected',
        ],
      },
      { type: 'p', text: "Guests are responsible for exercising reasonable caution while interacting digitally with parties claiming to represent Live Free." },
    ],
  },
  {
    id: 'security-commitment',
    label: 'Our Data Security Commitment',
    blocks: [
      { type: 'p', text: "Live Free maintains reasonable administrative, technical, and operational safeguards to protect guest information, including but not limited to:" },
      {
        type: 'ul',
        items: [
          'Access controls',
          'Role-based permissions',
          'Credential security',
          'Secure software practices',
          'Internal cybersecurity awareness training',
          'Incident response protocols',
        ],
      },
      { type: 'p', text: "While the Company takes commercially reasonable security measures, no internet-based transmission or digital platform can be guaranteed to be fully secure against malicious actors." },
    ],
  },
  {
    id: 'limitation-of-liability',
    label: 'Limitation of Liability',
    blocks: [
      { type: 'p', text: "To the fullest extent permissible under applicable law, Live Free, its partners, employees, affiliates, and representatives shall not be liable for:" },
      {
        type: 'ul',
        items: [
          'Fraud by third-party impersonators',
          'Phishing attacks',
          'Social engineering scams',
          'Unauthorized transactions performed outside official systems',
          'Loss arising from guest disclosure of confidential credentials',
        ],
      },
      { type: 'p', text: "This limitation applies where such loss occurs due to acts beyond the Company's reasonable control." },
    ],
  },
  {
    id: 'incident-reporting',
    label: 'Incident Reporting',
    blocks: [
      { type: 'p', text: "If you receive suspicious communication claiming to be from Live Free, please report it immediately to our Guest Support Desk:" },
      {
        type: 'ul',
        items: [
          'Email: reservation@livefreehostels.com',
          'Phone: +91 9999020248',
        ],
      },
      { type: 'p', text: "Early reporting significantly improves fraud prevention and response." },
    ],
  },
  {
    id: 'disclaimer',
    label: 'Disclaimer',
    blocks: [
      { type: 'p', text: "This advisory is issued in the interest of guest safety and digital security. Continued use of Live Free services implies acknowledgment of cyber risks inherent in digital communications and acceptance of responsibility to exercise due caution." },
    ],
  },
]

export default function DataProtectionGuidelines() {
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
   const title = 'Data Protection Guidelines | LiveFree Hostel'
  const description = 'How to spot fraudulent calls, emails, or payment requests claiming to be from LiveFree Hostel — and what our official communication channels actually look like.'
  
  return (
    <>
    <SEO
    title={title}
    description={description}
    path = "/data-protection-guidelines"
    />
    <section className={styles.page}>
      <div className={styles.heroBand}>
        <div className="container">
          <div className={styles.introBox}>
            <span className={styles.eyebrow}>Cybersecurity Advisory · Effective Immediately</span>
            <h1 className={styles.title}>Data Protection Guidelines</h1>
            <p className={styles.subtitle}>
              How to spot fraudulent communications claiming to be from Live Free, and what we do — and
              never do — to keep your information safe.
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
            <p>Received a suspicious message claiming to be from Live Free? Let us know right away.</p>
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