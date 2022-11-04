import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdThumbUp } from "react-icons/md";
import styles from '../styles/Event.module.css'

function Event({ event }) {
  return (
    <div>
        <Box p="5"  margin='5' className={styles.box} maxW="500px"  borderWidth="1px">
        <Image className={styles.img} borderRadius="md"  src={event.image} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{event.category}</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            {event.date} &bull; {event.place}
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {event.title}
        </Text>
        <Text mt={2}>${event.cost}</Text>
        <Flex mt={2} align="center">
          <Box as={MdThumbUp} color="orange.400" />
          <Text ml={1} fontSize="sm">
            {event.likes}
          </Text>
        </Flex>
      </Box>
    </div>
  )
}

export default Event