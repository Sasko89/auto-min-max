import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Flex,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function SaljDinBil() {
  return (
    <>
      <Navbar />
      <Box minH="100vh" justify="center" pt="130px">
        <Box height="300px" position="relative" shadow="base">
          <Image src="/salj-din-bil.jpg" layout="fill" objectFit="cover" />

          <Text
            position="absolute"
            as="h1"
            color="white"
            fontWeight="bold"
            fontSize="4xl"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            textShadow="1px 1px black"
            textAlign="center"
          >
            SÄLJ DIN BIL
          </Text>
        </Box>
        <Box p="16">
          <Text as="h2" fontSize="2xl">
            Kontaktuppgifter
          </Text>
          <Divider my="8" />
          <FormControl id="email">
            <Stack w={['100%', '80%', '50%', '50%']} pb="8" spacing="2">
              <FormLabel mb="0">Namn*</FormLabel>
              <Input />
              <FormLabel mb="0">Telefonnummer*</FormLabel>
              <Input />
              <FormLabel mb="0">E-post*</FormLabel>
              <Input type="email" />
            </Stack>
          </FormControl>
          <Text as="h2" fontSize="2xl">
            Biluppgifter
          </Text>
          <Divider my="8" />
          <FormControl>
            <Stack w={['100%', '80%', '50%', '50%']} pb="8" spacing="2">
              <FormLabel mb="0">Registreringsnummer*</FormLabel>
              <Input />
              <FormLabel mb="0">Miltal*</FormLabel>
              <Input />
              <FormLabel mb="0">
                Information kring bilens utrustningsnivå och tillbehör
              </FormLabel>
              <Textarea />
              <FormLabel mb="0">
                Information kring bilens skick så som skador, fel eller övriga
                defekter
              </FormLabel>
              <Textarea />
            </Stack>
          </FormControl>
          <Button
            _hover={{ bg: 'green.500' }}
            bg="green.400"
            color="white"
            size="lg"
            shadow="base"
          >
            Skicka
          </Button>
        </Box>
      </Box>
    </>
  );
}
