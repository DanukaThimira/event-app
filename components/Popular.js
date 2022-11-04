import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import styles from '../styles/Popular.module.css'
import PopularEvent from './PopularEvent';

function Popular() {

  const [events, setEvents] = useState([])
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();


  const { isOpen, onOpen, onClose } = useDisclosure()

  const submit = async () => {
    await setDoc(doc(db, 'events', title), {
      category: category,
      cost: cost,
      date: date,
      title: title,
      place: place,
      image: image,
    });
  }

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      setEvents(querySnapshot.docs.map(doc => {
        return {
          image: doc.data().image,
          title: doc.data().title,
        }
      }))
    }
    getData();
  }, [])



  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
       <>
      <div className={styles.modalBtn}>
      <Button className={styles.btn} onClick={onOpen}>New Event</Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={styles.form}>
              <p className={styles.inputField}>
                Title <input className={styles.input} type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
              </p>
              <p className={styles.inputField}>
                Category <input className={styles.input} type='text' value={category} onChange={(e) => setCategory(e.target.value)}/>
              </p>
              <p className={styles.inputField}>
                Cost <input className={styles.input} type='text' value={cost} onChange={(e) => setCost(e.target.value)}/>
              </p>
              <p className={styles.inputField}>
                Image <input className={styles.input} type='text' value={image} onChange={(e) => setImage(e.target.value)}/>
              </p>
              <p className={styles.inputField}>
                Date <input className={styles.input} type='text' value={date} onChange={(e) => setDate(e.target.value)}/>
              </p>
              <p className={styles.inputField}>
                Place <input className={styles.input} type='text' value={place} onChange={(e) => setPlace(e.target.value)}/>
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            {image && title ? (
              <Button colorScheme='blue' onClick={submit} ><span onClick={onClose} >Submit</span></Button>
            ) : (
              <Button>Enter All Details</Button>
            ) }
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    </div>
    <div className={styles.popularEvents}>
      {
        events.map(event => {
          return (
           <PopularEvent event={event} />
          )
        })
      }
    </div>
    </div>
  )
}

export default Popular