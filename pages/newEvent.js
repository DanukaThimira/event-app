import { useState } from 'react';
import styles from '../styles/NewEvent.module.css';
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

function newEvent() {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [image, serImage] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();


  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
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
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    </div>
    </div>
  )
}

export default newEvent