import styles from '../styles/PopularEvent.module.css'

function PopularEvent({ event }) {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={event.image} />
          <p className={styles.title}>
            {event.title}
          </p>
    </div>
  )
}

export default PopularEvent