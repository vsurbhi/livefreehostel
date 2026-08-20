import SEO from '../components/Seo/Seo'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './HostelPolicy.module.css'

const SECTIONS = [
  {
    id: 'general',
    label: 'General Policy',
    intro: null,
    blocks: [
      { type: 'p', text: "It is mandatory for guests to present valid photo identification at the time of check-in. According to Government regulations, a valid Photo ID has to be carried by every person staying at the hostel. The identification proofs accepted are Passport, Aadhar Card, Driving License and Voter ID card. PAN Card is not accepted as a valid ID Card." },
      { type: 'p', text: "For foreign nationals, it is mandatory to present the original passport along with a valid Indian visa at the time of check-in, in compliance with applicable regulations. Pakistani nationals are additionally required to present a valid residential permit or specific permission letter issued by the Indian High Commission in Islamabad, along with their original passport and valid visa, at the time of check-in." },
      { type: 'p', text: "Guests with Local IDs will not be allowed admission." },
      { type: 'p', text: "Live Free reserves the right to deny check-in without refund in the event of failure to comply with the above identification and pre check-in requirements." },
      { type: 'p', text: "All guests are mandatorily required to complete a pre-arrival, contactless check-in through the link sent to your WhatsApp. The link is shared with guests via WhatsApp immediately upon confirmation of booking. Completion of this digital check-in process is a prerequisite for a smooth on-property check-in experience." },
      { type: 'p', text: "Accepted payment modes: Cash, Debit/Credit Cards, UPI. Prepayment is mandatory before check-in. No payment — no reservation." },
      { type: 'p', text: "As a backpacker hostel brand, we follow a self-service–oriented operating framework and do not provide certain traditional hotel services such as porterage, valet parking, driver's accommodation or similar full-service amenities. This no-frills approach is integral to our business model and enables us to deliver a vibrant, high-quality hostel experience while maintaining accessible and affordable accommodation rates for our guests. In line with this model, select amenities — including but not limited to locks, toiletries and towels — are available on a chargeable, pay-as-you-use basis. Applicable charges are communicated transparently at the time of booking, check-in or prior to availing such services. Guests are encouraged to review these details in advance to make informed decisions regarding their stay." },
      { type: 'p', text: "Non-resident guests are not allowed inside the rooms. In case you want to invite someone, you can meet them in the reception or cafe." },
      { type: 'p', text: "In case of 3 or 4 people travelling together, please note that we do not guarantee accommodation in the same dorm room." },
      { type: 'p', text: "Our hostel maintains silent hours from 11 PM to 7 AM to provide a comfortable stay for all the guests. Please make sure not to make any noise during these hours." },
      { type: 'p', text: "Different destinations and properties may have different policies during specific times of the year." },
      { type: 'p', text: "Guests are responsible for their own personal belongings." },
      { type: 'p', text: "Outside pets are allowed but only for people staying in private rooms. The guest shall take care of everything related to their pet themselves and shall not let the pet free (without chain) outside the room in hostel premises." },
      { type: 'p', text: "Meals are not included unless chosen at booking or charged separately at the property." },
      { type: 'p', text: "Extra mattresses are available at Rs. 700/night (incl. taxes), subject to availability." },
      { type: 'p', text: "Please note: extra bed/mattress will be subject to availability at check-in. Above charges may not apply during peak dates (holidays, festivals, high-demand periods)." },
      { type: 'p', text: "Should any action by a guest be deemed inappropriate by the hostel, or if any inappropriate behaviour is brought to the attention of the hostel, the hostel reserves the right, after the allegations have been investigated, to take action against the guest." },
      { type: 'p', text: "People of all ages are allowed at our hostel and we love to host families. A few things to know: children up to the age of 5 can share the bed with their family members with no extra charge. For children above 5 years of age, normal rates apply and a separate bed needs to be booked." },
      { type: 'p', text: "Energy-saving hours: to promote responsible energy usage, designated energy-saving hours are followed at hostels where air conditioning is provided as an amenity. Air conditioning in dormitory rooms will be non-operational between 10:00 AM–1:00 PM and 5 PM–8 PM. During these hours, common areas will remain air conditioned for guest comfort." },
      { type: 'p', text: "Children below 16 years and adults above 45 years are not allowed in dorms until the whole room is booked by the same group." },
      { type: 'p', text: "Drugs and alcohol abuse is strictly prohibited and guests may be asked to leave without refund by hostel staff in case of non-compliance." },
      { type: 'p', text: "Guests are responsible for their belongings stored in lockers." },
      { type: 'p', text: "All hostels are CCTV enabled for safety and audits." },
      { type: 'p', text: "If we feel that you have violated any of the above-mentioned rules, we reserve the right to evict you from our place. Right to admission is reserved." },
      { type: 'p', text: "Certain policies are booking-specific and are notified at the time of booking." },
      { type: 'p', text: "Live Free may contact guests for offers, feedback, or promotions via email or WhatsApp." },
    ],
  },
  {
    id: 'checkin',
    label: 'Check-in & Check-out',
    blocks: [
      { type: 'p', text: "The standard check-in time is 01:00 PM, and the standard check-out time is 10:00 AM." },
      { type: 'p', text: "Early check-in and late check-out requests are subject to availability, at the discretion of the management, and may attract additional charges." },
      { type: 'p', text: "Guests are welcome to use common areas during this time." },
    ],
  },
  {
    id: 'group',
    label: 'Group Policy',
    blocks: [
      { type: 'p', text: "In case of a group of 8 or more guests checking in together, the hostel requires a 100% non-refundable advance payment to be transferred to the hostel (bank account details or an online payment link are available on request — please email us) to confirm the booking. Normal booking and cancellation policies do not apply to group bookings of 8 or more guests." },
      { type: 'p', text: "If the group's behaviour is deemed unfit at the property, the Property Manager, upon subjective evaluation, retains the full right to take required action, which may also result in an on-spot cancellation without refunds." },
      { type: 'p', text: "Any group bookings which have not been informed and paid in advance, or have been made by several individuals/separate bookings to make it appear as though it is not a group, can be cancelled or denied at any time — in advance or on arrival." },
      { type: 'p', text: "Live Free Hostel reserves the right to admission." },
    ],
  },
  {
    id: 'extension',
    label: 'Booking Extension',
    blocks: [
      { type: 'p', text: "Extension of stay is provided at current room rates and is subject to availability." },
      { type: 'p', text: "Current room rates may differ from the rates at which the room was originally booked." },
      { type: 'p', text: "Booking extensions must be notified and paid in advance for confirmation." },
    ],
  },
  {
    id: 'cancellation',
    label: 'Cancellation Policy',
    blocks: [
      { type: 'p', text: "The advance taken at the time of reservation is always non-refundable." },
      { type: 'p', text: "We follow a 72-hour free cancellation policy — if informed 72 hours before check-in. Cancellations made after that window will be charged in full." },
      { type: 'p', text: "For group bookings, free cancellation applies only if informed a week before the check-in date. If cancelled between a week and 72 hours of check-in, guests are charged 50% of the total amount. If cancelled after that, the full amount is charged." },
      { type: 'p', text: "Modifications are allowed once, up to 3 days before check-in, and rate differences may apply." },
      { type: 'p', text: "No-shows are charged 100% of the reservation amount." },
      { type: 'p', text: "Early departures are non-refundable." },
      { type: 'p', text: "Bookings made via third-party platforms (Booking.com, MMT, Agoda, etc.) must be cancelled via the same platform." },
      { type: 'p', text: "The entire stay is considered one booking, and the cancellation policy applies from the check-in date." },
      { type: 'p', text: "Reservations cannot be shifted to another location. Eligible free cancellations will be refunded, and guests may rebook." },
      { type: 'p', text: "Cancellation requests must be emailed to reservation@livefreehostels.com with the reservation ID and details." },
      { type: 'p', text: "You can always contact us for a free cancellation in case of an unforeseen event. Refunds are processed within 7–10 working days." },
    ],
  },
]

export default function HostelPolicy() {
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

  return (
    <section className={styles.page}>
      <div className={styles.heroBand}>
        <div className="container">
          <span className="section-label">Know before you go</span>
          <h1 className={styles.title}>Hostel Policies</h1>
          <p className={styles.subtitle}>
            The house rules that keep Live Free comfortable, fair, and safe for every guest — please read
            through before your stay.
          </p>
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
                {section.blocks.map((block, j) => (
                  <p key={j}>{block.text}</p>
                ))}
              </div>
            </motion.article>
          ))}

          <div className={styles.footerNote}>
            <p>
              Have a question we haven't covered here? Reach out to our team any time — we're happy to help
              before you book.
            </p>
            <a href="/contact" className={styles.footerBtn}>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}