import {
  Box,
  Center,
  Divider,
  Flex,
  Stack,
  Wrap,
  WrapItem,
  Text,
  Button,
} from '@chakra-ui/react';
import CarCard from '../components/CarCard';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchFilters from '../components/SearchFilters';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box minH="100vh" justify="center" pt="130px">
        <Box height="700px" position="relative" shadow="base">
          <Image
            src="/landingpage.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 77%"
          />
          <Flex
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -100%)"
            direction="column"
            bg="blackAlpha.400"
            h="40%"
            w="100%"
            p="6"
            justify="center"
            // align="stretch"
            // borderRadius="10px"
            // filter="blur(1px)"
          >
            <Text
              as="h1"
              color="white"
              fontWeight="bold"
              fontSize={['xl', 'xl', '2xl', '3xl']}
              textShadow="1px 1px black"
              textAlign="center"
              textTransform="uppercase"
            >
              Hos oss hittar du ett stort urval av både nya och begagnade bilar.
            </Text>

            <Flex
              direction={['column', 'column', 'row', 'row']}
              mt="8"
              justify="center"
            >
              <Link href="/fordon">
                <Button
                  size="lg"
                  color="white"
                  shadow="base"
                  fontSize="md"
                  _hover={{
                    bgGradient: 'linear(to-b, white, gray.50)',
                    color: 'green.500',
                    fontWeight: 'semibold',
                  }}
                  fontWeight="thin"
                  p="6"
                  // bgGradient="linear(to-b, blue.300, blue.500)"
                  bg="green.400"
                >
                  VÅRA BILAR
                </Button>
              </Link>
              <Link href="/salj-din-bil">
                <Button
                  ml={['0', '0', '4', '4']}
                  mt={['4', '4', '0', '0']}
                  size="lg"
                  bg="red.500"
                  color="white"
                  fontSize="md"
                  shadow="base"
                  _hover={{
                    bgGradient: 'linear(to-b, white, gray.50)',
                    color: 'red.500',
                    fontWeight: 'semibold',
                  }}
                  p="6"
                  fontWeight="thin"
                  // bgGradient="linear(to-b, red.300, red.500)"
                  bg="red.400"
                >
                  SÄLJ DIN BIL
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Flex
          rounded="sm"
          bgGradient="linear(to-br, gray.100, gray.50)"
          h="14vh"
          mb={['10', '10', '10', '0']}
          shadow="base"
          p="10"
          justify="center"
          mb="4"
        >
          <Flex
            // direction={['column', 'column', 'row', 'row']}
            w="50%"
            justify="space-evenly"
          >
            <img src="https://img.icons8.com/color/240/000000/ford.png" />
            <img src="https://img.icons8.com/color/240/000000/volvo.png" />
            <img src="https://img.icons8.com/color/240/000000/bmw--v1.png" />
            <img src="https://img.icons8.com/color/240/000000/mercedes-benz.png" />
            <img src="https://img.icons8.com/color/240/000000/kia.png" />
            <img src="https://img.icons8.com/color/240/000000/mazda.png" />
            <img src="https://img.icons8.com/color/240/000000/volkswagen.png" />
            <img src="https://img.icons8.com/color/240/000000/land-rover.png" />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
