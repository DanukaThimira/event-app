import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Events from '../components/Events'
import Popular from '../components/Popular'
import Users from '../components/Users'
import styles from '../styles/Home.module.css'


export default function Home() {
 
  return (
    <div className={styles.container}>
     
      <div className={styles.sections}>
        <div className={styles.popular}><Popular /></div>
        <div className={styles.events}><Events /></div>
        <div className={styles.users}><Users /></div>     
      </div>
    </div>
  )
}
