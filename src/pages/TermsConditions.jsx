import SEO from '../components/Seo/Seo'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './TermsConditions.module.css'


const SECTIONS = [
  {
    id: 'introduction',
    label: 'Introduction',
    content: [
      "This site belongs to M/s LIVE FREE. By using, accessing, viewing, transmitting, caching, storing or otherwise utilizing any of the services, contents, or functions of this site, you signify your consent to these terms and conditions as set forth herein. The terms and conditions set out below apply to your use of this website and related websites (\"Site\"), including the use of the information services offered on the Site.",
      "In accessing and using the Site, you agree to be bound by these Conditions so please carefully read this section before proceeding. If you do not agree to these terms of use, you must refrain from using the Site.",
      "We reserve the right, at our discretion, to change, modify, add, or remove portions of these terms at any time. Please check these terms periodically for changes. All changes will become effective immediately unless otherwise stated and you should check these terms for changes from time to time.",
    ],
  },
  {
    id: 'use-of-website',
    label: 'Use of Website',
    content: [
      "The site is available only to individuals and entities that can form legally binding contracts under applicable law. The Site and the materials located on or through the Site are provided by us for informational purposes only, with the understanding that we are by the provision of these materials not engaged in the rendering of legal or other professional advice or service.",
      "Commercial use of this site is strictly prohibited unless you obtain prior written consent from M/s LIVE FREE. You may only use this site to connect with other users over audio, and make legitimate reservations or purchases. You are responsible for maintaining the secrecy of your passwords, login, and account information. You will be financially accountable for all uses of the site by you and anyone using your password and login information.",
      "The information contained in or through the Site is based upon sources believed to be accurate and reliable, and we have exercised reasonable care to assure the accuracy of the information. However, we make no representation or warranty as to such accuracy. These materials were prepared for us by personnel of our owned and managed hotels and others.",
      "We do not guarantee that the Site will operate continuously or without interruption or be error-free. In addition, we may also suspend or discontinue any aspect of the Site at any time without being liable for any direct or indirect loss as a result of such action.",
    ],
  },
  {
    id: 'proprietary-rights',
    label: 'Proprietary Rights Information',
    content: [
      "The Site contains and references to domain names, trademarks, logos, brand names, service marks, drawings, illustrations, artwork, videos, music, sounds, photographs, trade names, text, graphics, trade dress and devices, and other valuable trade or service marks or files found on this site are proprietary to M/s LIVE FREE and are protected by the trademark, copyright and intellectual property laws.",
      "You may not frame or utilize framing techniques to modify, reproduce, sell, broadcast, or copy any way whatsoever or in any form whatsoever, either partially or fully any of our trademarks, logos, or proprietary information without the express prior written consent of M/s LIVE FREE.",
    ],
  },
  {
    id: 'restrictions-materials',
    label: 'Restrictions on use of Materials',
    content: [
      "All materials contained in the Site are the copyrighted property of M/s LIVE FREE. Any software that is made available to download from this Site is the copyrighted work of M/s LIVE FREE. Your use of the Software is governed by the terms of the end user license agreement, if any, which accompanies or is included with the Software.",
      "You may not install or use any Software that is accompanied by or includes a License Agreement unless You first agree to the License Agreement terms. No material from the Site or any Internet site owned, operated, licensed, or controlled by us or our affiliates may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way.",
      "For purposes of these terms, the use of any such material on any other Web, except that you may download one copy of the materials on any single computer for your personal, noncommercial home use only, provided you keep intact all copyright and other proprietary notices.",
    ],
  },
  {
    id: 'submissions',
    label: 'Submissions',
    content: [
      "Any messages, notes, suggestions, ideas, notes, drawings, concepts or other material or information (collectively, the \"Submissions\"), which you may submit through or in connection with the Site will become the exclusive property of us.",
      "Accordingly, you agree that we have the right to publish any Submissions for any purpose whatsoever, commercial or otherwise, without compensation to the provider of the Submissions. In addition, you agree that you will not transmit any Submission which infringes upon the rights of any third party.",
    ],
  },
  {
    id: 'promotional-info',
    label: 'Promotional Information',
    content: [
      "We may make information regarding specific programs, offers or promotions, which we are conducting, available on the Sites. Any such program, offer or promotion is subject to the specific terms, conditions and restrictions listed on the Site in connection with such program, offer or promotion.",
      "We reserve the right to alter or withdraw any program, offer or promotion at any such time. Each Program, offer and promotion is void where prohibited by law. Please refer to and read carefully the terms, conditions and restrictions included on the Sites in connections with each program, offer or promotion.",
    ],
  },
  {
    id: 'links',
    label: 'Links',
    content: [
      "We do not review or monitor web sites linked to this site and are not responsible for the content of any such linked websites. By providing these links, we are not endorsing, sponsoring or recommending such sites or the materials disseminated by or services provided by them, and are not responsible for the materials, services or other situations at or related to or from any other site.",
      "Your linking to such web sites is at your own risk. In addition, you agree not to link your web site or any other third party web site to any page of this site other than the brand home page or the specific hotel home page (commonly known as \"deep linking\") without our prior express written consent.",
      "We reserve the right to disable any and all links from third party sites to this site at any time. These other sites may send their own cookies to users, collect data, solicit personal information, or contain information that you may find inappropriate or offensive.",
      "In addition, advertisers on the Site may send cookies to users that we do not control. We do not make or give any representation or warranty (express or implied) of any kind as to any matter relating to the Site and any Linked Website, including without limitation, as to merchantability, non infringement of intellectual property rights or fitness for purpose.",
    ],
  },
  {
    id: 'access-interference',
    label: 'Access and Interference',
    content: [
      "You will not use any robot, spider, other automatic device, or manual process to monitor or copy the Site or the contents or information (including the Information) contained therein without our prior express written consent.",
      "You agree that you will not use any device, software or routine to interfere or attempt to interfere with the proper working of the Site or any transaction being conducted through the Site.",
      "You agree that you will not copy, reproduce, alter, modify, create derivative works, or publicly display any content (except for any Information in which you have an ownership interest) from the Site without our prior express written consent or the appropriate third party.",
      "The information (including the Information) you provide to us (i) shall not contain any viruses, Trojan horses, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or information; and (ii) shall not create liability for us or cause us to lose (in whole or in part) the services of our ISPs or other suppliers.",
    ],
  },
  {
    id: 'limitation-liability',
    label: 'Limitation of Liability',
    content: [
      "Neither us nor any of our subsidiaries, affiliates, agents, representatives or licensors shall be responsible for any direct, indirect, special, incidental or consequential loss or damage, punitive or similar damages including without limitation, loss or damage by way of loss of profits, loss of business opportunity, business interruption or loss of information however arising and whether in contract, tort or otherwise.",
      "These Conditions do not purport to exclude liability arising by any applicable law if, and to the extent, such liability cannot be lawfully excluded, however, to the extent permitted by law, all warranties, terms or conditions which would otherwise be implied into these Conditions are hereby excluded.",
      "We are not responsible for, and shall have no liability for: (i) telephone, mobile, electronic, network, internet, computer, hardware or software program malfunctions, delays, or failures; (ii) for any injury, loss or damage to your computer or interception or use of credit card information, related to or resulting from use of the site or any sites, services, or linked or relating thereto; (iii) any incorrect information, whether caused by other users or by any of the equipment, software, or programming associated with or utilized in the site or as the result of technical or human error.",
    ],
  },
  {
    id: 'disclaimers',
    label: 'Disclaimers',
    content: [
      "ELECTRONIC TRANSMISSIONS, INCLUDING THE INTERNET, ARE PUBLIC MEDIA, AND ANY USE OF SUCH MEDIA IS PUBLIC AND NOT PRIVATE. INFORMATION RELATED TO OR ARISING FROM SUCH USE IS PUBLIC, OR THE PROPERTY OF THOSE COLLECTING INFORMATION, AND NOT PERSONAL OR PRIVATE INFORMATION.",
      "YOU AGREE THAT YOU USE THE SITE AT YOUR OWN RISK. THE CONTENT, SERVICES AND MATERIALS IN THE SITE ARE PROVIDED \"AS IS\" AND ON AN \"AS AVAILABLE\" BASIS WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND EXPRESS, IMPLIED OR STATUTORY.",
      "WE DO NOT WARRANT THAT THE SITE OR THE SERVICES, CONTENT, MATERIALS OR FUNCTIONS CONTAINED IN THE SITE WILL BE CONTINUOUSLY AVAILABLE, UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE, SERVICES, CONTENT, MATERIALS OR THE SERVERS THAT MAKE THE SITE OR SUCH SERVICES, CONTENT AND MATERIALS AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.",
      "In the event we are held liable for any damages related to such matters, your sole and exclusive remedy will be limited to reimbursement for services or products paid by you to the entity held liable which were not provided by such entity.",
      "WE RESERVE THE RIGHT, IN OUR SOLE AND ABSOLUTE DISCRETION AND WITHOUT NOTICE, TO CORRECT ANY ERRORS OR OMISSIONS IN ANY PORTION OF THE SITE, OR TO DENY ACCESS TO THE SITE TO ANYONE AT ANY TIME.",
    ],
  },
  {
    id: 'governing-law',
    label: 'Governing Law & Jurisdiction',
    content: [
      "The products and/or services described in and available through the Site may not be available in your country. We make no representation that the services or products offered in the Site are appropriate or available for use in any particular location.",
      "Those who choose to access the Site do so on their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable. If use of the Site and/or viewing or use of any material or content therein or services offered thereby violates or infringes any applicable law in your jurisdiction(s), you are not authorized to view or use the Site and must exit immediately.",
      "Any disputes arising out of or related to the Site shall be governed by and constructed and enforced in accordance with, the laws of India and you shall submit to the exclusive jurisdiction of the courts of New Delhi (INDIA).",
    ],
  },
  {
    id: 'indemnification',
    label: 'Indemnification',
    content: [
      "You agree to indemnify and hold M/s LIVE FREE and its subsidiaries, affiliates, officers, directors, agents and employees harmless from any claim or demand, including reasonable attorney's fees, made by any third party due to or arising out of your breach of this agreement or the documents it incorporates by reference, or your violation of any law or the rights of a third party.",
      "M/s LIVE FREE's failure to act with respect to breach by you or others does not waive its rights to act with respect to subsequent or similar breaches.",
    ],
  },
  {
    id: 'termination',
    label: 'Termination',
    content: [
      "These terms are effective until terminated by either party. You may terminate these terms at any time by discontinuing use of the Site and destroying all materials obtained from any and all such sites and all related documentation and all copies and installations thereof, whether made under the terms of this Agreement or otherwise.",
      "Your access to the Site may be terminated immediately without notice from us if in our sole and absolute discretion you fail to comply with any term or provision of this Agreement. Upon termination, you must cease use of the Site and destroy all materials obtained from such site and all copies thereof, whether made under the terms of this Agreement or otherwise.",
      "Notwithstanding the termination of this Agreement, you acknowledge and agree that those rights and obligations which by their nature are intended to survive the termination of this Agreement in order to be fully operative, shall survive the termination of this Agreement.",
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    content: [
      "By continuing to use our services you agree and consent to receive all communications at the mobile number or email provided, even if the mobile number is registered under DND/NCPR list under TRAI regulations.",
      "And for that purpose, you further authorize M/s LIVE FREE to share/disclose the information to any third party service provider or any affiliates, group companies, their authorized agents or third party service providers.",
    ],
  },
  {
    id: 'general',
    label: 'General',
    content: [
      "These Terms and Conditions together with M/s LIVE FREE's Privacy Policy, constitute the entire agreement between the parties relating to the use of this Site. If any provision of these Terms and Conditions is deemed void, unlawful, or unenforceable for any reason, then that provision shall be severed from the rest of the terms and conditions and shall not affect the validity and enforceability of any of the remaining provisions.",
      "M/s LIVE FREE may revise these terms and conditions at any time by updating the positing and such changes shall be effective immediately unless otherwise indicated. No agency, partnership, joint-venture, franchisee-franchisor, or employee-employer relationship is created by these Terms and Conditions or the use of the Site.",
    ],
  },
]



export default function TermsConditions() {
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
  const title = 'Terms & Conditions | LiveFree Hostel'
  const description = 	"Read the terms and conditions governing bookings, stays, and website usage at LiveFree Hostel. Understand guest policies, liability, and legal information."
  

  return (
    <>
     <SEO
     title={title}
     description={description}
     path='/terms-conditions'
     />
    <section className={styles.page}>
      <div className={styles.heroBand}>
        <div className="container">
          <div className={styles.introBox}>
            <span className={styles.eyebrow}>Last Updated · Effective Immediately</span>
            <h1 className={styles.title}>Terms and Conditions</h1>
            <p className={styles.subtitle}>
              Please read these terms and conditions of use carefully before using this site.
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
                {section.content.map((text, j) => (
                  <p key={j}>{text}</p>
                ))}
              </div>
            </motion.article>
          ))}

          <div className={styles.footerNote}>
            <p>Have questions about our Terms and Conditions?</p>
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