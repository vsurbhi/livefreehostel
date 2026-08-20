import { useCountUp, useInView } from '../../hooks/useCountUp'
import { STATS } from '../../data/siteData'
import styles from './Stats.module.css'

function StatItem({ stat, inView }) {
  const count = useCountUp(stat.value, 1800, inView)
  const display = Number.isInteger(stat.value) ? count.toLocaleString() : count.toFixed(1)

  return (
    <div className={styles.item}>
      <span className={styles.number}>
        {stat.prefix}{display}<span className={styles.suffix}>{stat.suffix}</span>
      </span>
      <p className={styles.label}>{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView(0.3)

  return (
    <section className={`section ${styles.section}`} id="stats">
      <div className="container">
        <div className={styles.grid} ref={ref}>
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
