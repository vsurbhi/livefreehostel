import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import styles from './CTABanner.module.css'

const CTA_BUTTONS = [
  { label: 'Work', Icon: FaLinkedin, network: 'linkedin',href:"https://www.linkedin.com/company/livefreehostels" },
  { label: 'Collaborate', Icon: FaInstagram, network: 'instagram',href:"https://www.instagram.com/livefreehostels" },
  { label: 'Volunteer', Icon: FaWhatsapp, network: 'whatsapp',href:"https://wa.me/919999020248" },
]

// export default function CTABanner() {
//   return (
//     <div className={styles.wrap} id="booking">
//       <div className="container">
//         <motion.div
//           className={styles.banner}
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
//           viewport={{ once: true }}
//         >
//           <div className={styles.inner}>
//             <h2 className={styles.title}>Join Our Community!!</h2>
//             <p className={styles.sub}>
//               Ready to live free? Join our crew as a teammate, volunteer, or creative collaborator. Trade your unique skills for epic perks: FREE stays, daily meals, and a buzzing global family. Network with fellow nomads, explore prime destinations, and host unforgettable community events.
//             </p>
//             <div className={styles.actions}>
//               {CTA_BUTTONS.map(({ label, Icon, network ,href}) => (
//                 <button key={label} className={styles.btn} type="button" href={href} target="_blank">
//                   <span>{label}</span>
//                   <span className={styles.arrowIcon} aria-hidden="true">
//                     <ArrowRight size={18} strokeWidth={2.25} />
//                   </span>
//                   <span className={`${styles.socialIcon} ${styles[network]}`} aria-hidden="true">
//                     <Icon />
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }
export default function CTABanner() {
  return (
    <div className={styles.wrap} id="booking">
      <div className="container">
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          viewport={{ once: true }}
        >
          <div className={styles.inner}>
            <h2 className={styles.title}>Join Our Community!!</h2>
            <p className={styles.sub}>
              Ready to live free? Join our crew as a teammate, volunteer, or creative collaborator. Trade your unique skills for epic perks: FREE stays, daily meals, and a buzzing global family. Network with fellow nomads, explore prime destinations, and host unforgettable community events.
            </p>
            <div className={styles.actions}>
              {CTA_BUTTONS.map(({ label, Icon, network, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btn}
                >
                  <span>{label}</span>
                  <span className={styles.arrowIcon} aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={2.25} />
                  </span>
                  <span className={`${styles.socialIcon} ${styles[network]}`} aria-hidden="true">
                    <Icon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}