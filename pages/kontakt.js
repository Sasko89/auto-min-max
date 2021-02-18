import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <Box minH="100vh" justify="center" pt="130px">
        <Box height="300px" position="relative" shadow="base">
          <Image src="/kontakta-oss.jpg" layout="fill" objectFit="cover" />

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
            KONTAKTA OSS
          </Text>
        </Box>
        <Box p="16">
          <Text as="h2" fontSize="2xl">
            Kontaktinfomation
          </Text>
          <Divider my="8" />
          <Stack spacing="4">
            <Text fontWeight="thin">
              <InfoIcon mr="2" />
              Auto Minimax, Linnarhultsvägen 47, 424 55 Angered
            </Text>
            <Text fontWeight="thin">
              <PhoneIcon mr="2" />
              0700-912060
            </Text>
            <Text fontWeight="thin">
              <EmailIcon mr="2" />
              autominimax@hotmail.com
            </Text>
          </Stack>
          <Stack mt="8">
            <Text mb="2" fontSize="xl" fontWeight="semibold">
              Öppettider
            </Text>
            <Flex w="230px" justify="space-between">
              <Text fontWeight="thin">Vardagar:</Text>
              <Text fontWeight="thin"> 10:00–18:00</Text>
            </Flex>
            <Divider w="230px" />
            <Flex w="230px" justify="space-between">
              <Text fontWeight="thin">Lördag:</Text>
              <Text fontWeight="thin">10:00–15:00</Text>
            </Flex>
            <Divider w="230px" />
            <Flex w="230px" justify="space-between">
              <Text fontWeight="thin">Söndag:</Text>
              <Text fontWeight="thin">Tidsschema*</Text>
            </Flex>
            <Divider w="230px" />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
