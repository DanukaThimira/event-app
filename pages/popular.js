import { async } from '@firebase/util'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import styles from '../styles/Events.module.css'
import Event from '../components/Event'

function PopularEvents() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, 'events'));
            setEvents(querySnapshot.docs.map(doc => {
                return {
                    image: doc.data().image,
                    category: doc.data().category,
                    data: doc.data().date,
                    place: doc.data().place,
                    title: doc.data().title,
                    cost: doc.data().cost,
                    description: doc.data().description,
                    likes: doc.data().likes,
                }
            }))
        }
        getData()
    }, [])
    console.log(events)
  return (
    <div className={styles.container}>
        {
            events.map(event => (
                <Event event={event} />
            ))
        }
    </div>
  )
}

export default PopularEvents