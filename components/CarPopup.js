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
  Flex,
  Text,
  Box,
  Stack,
  Divider,
  Badge,
  Container,
  Center,
  Spacer,
} from '@chakra-ui/react';

import Image from 'next/image';

export default function CarPopup({ car }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(car);
  return (
    <>
      <Button
        color="gray.800"
        // mt="4"
        position="absolute"
        bottom="20px"
        left="10%"
        w="80%"
        onClick={onOpen}
        fontWeight="semibold"
        fontSize="sm"
        shadow="base"
        bgGradient="linear(to-br, orange.100, orange.300)"
        _hover={{
          bgGradient: 'linear(to-br, orange.200, orange.400)',
          shadow: 'md',
        }}
        _active={{
          bgGradient: 'linear(to-br, orange.200, orange.500)',
          shadow: 'lg',
        }}
      >
        Läs mer
      </Button>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent
          rounded="xl"
          shadow="xl"
          bg="gray.50"
          p="4"
          w={['90%', '90%', '80%', '60%']}
          // h={['100vh', '100vh', '87vh', '87vh']}
          bgGradient="linear(to-br, gray.50, gray.200)"
        >
          <Flex
            rounded="md"
            px="8"
            pt="2"
            // pb="0"
            //   mt="4"
            justify="space-between"
            color="gray.50"
            align="flex-end"
          >
            {' '}
            <Stack lineHeight="short" spacing="0">
              <Text
                fontWeight="bold"
                textTransform="capitalize"
                fontSize="2xl"
                color="gray.700"
                // mb="-1"
              >
                {car.brand}
              </Text>
              <Text
                textTransform="uppercase"
                color="gray.700"
                fontSize="3xl"
                fontWeight="thin"
              >
                {car.model}
              </Text>
            </Stack>
            <Flex pt="1">
              {car.miljo ? (
                <Badge
                  rounded="md"
                  mr="1"
                  textAlign="right"
                  fontSize={['8px', '8px', '10px', '10px']}
                  colorScheme="green"
                  fontWeight="semibold"
                  py="1px"
                >
                  Miljö
                </Badge>
              ) : null}
              {car.familj ? (
                <Badge
                  rounded="md"
                  mr="1"
                  textAlign="right"
                  fontSize={['8px', '8px', '10px', '10px']}
                  colorScheme="blue"
                  fontWeight="semibold"
                  py="1px"
                >
                  Familj
                </Badge>
              ) : null}
              {car.sport ? (
                <Badge
                  rounded="md"
                  textAlign="right"
                  fontSize={['8px', '8px', '10px', '10px']}
                  colorScheme="red"
                  fontWeight="semibold"
                  py="1px"
                >
                  Sport
                </Badge>
              ) : null}
            </Flex>
          </Flex>

          <ModalCloseButton size="lg" />

          <Flex
            mx="8"
            mt="4"
            overflow="hidden"
            rounded="md"
            position="relative"
            h="100%"
          >
            <Image
              shadow="inner"
              src={car.photo}
              layout="fill"
              objectFit="contain"

              // objectPosition="50% 100%"
              // width={1920}
              // height={1080}
            />
          </Flex>
          <Flex
            justify="space-between"
            w="100%"
            direction={[
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'row',
            ]}
            py="4"
            px="10"
          >
            <Flex
              wrap="wrap"
              w={['100%', '100%', '100%', '70%']}
              justify="space-between"
              align="center"
              textAlign="center"
              //   mr="8"
              p="4"
              fontSize="sm"
            >
              <Stack justify="center">
                <Text fontWeight="thin">Bränsle</Text>
                <Text textTransform="capitalize" fontWeight="semibold">
                  {car.fuel_type ? car.fuel_type : '-'}
                </Text>
                <Spacer />
                <Text fontWeight="thin">Biltyp</Text>
                <Text textTransform="capitalize" fontWeight="semibold">
                  {car.car_type ? car.car_type : '-'}
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="thin">Växellåda</Text>
                <Text textTransform="capitalize" fontWeight="semibold">
                  {car.gear_type ? car.gear_type : '-'}
                </Text>
                <Spacer />
                <Text fontWeight="thin">Drivning</Text>
                <Text textTransform="capitalize" fontWeight="semibold">
                  {car.drive ? car.drive : '-'}
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="thin">Miltal</Text>
                <Text fontWeight="semibold">
                  {car.milage ? car.milage : '-'}
                </Text>
                <Spacer />

                <Text fontWeight="thin">Hästkrafter</Text>
                <Text fontWeight="semibold">
                  {car.horsepower ? `${car.horsepower}hk` : '-'}
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="thin">Modellår</Text>
                <Text fontWeight="semibold">
                  {car.year_model ? car.year_model : '-'}
                </Text>
                <Spacer />

                <Text fontWeight="thin">Färg</Text>
                <Text textTransform="capitalize" fontWeight="semibold">
                  {car.color ? car.color : '-'}
                </Text>
              </Stack>
            </Flex>

            <Flex
              w={['100%', '100%', '100%', '30%']}
              direction="column"
              align={['center', 'center', 'center', 'flex-end']}
              mb="2"
            >
              <Text
                mt="2"
                color="green.600"
                as="h2"
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight="bold"
              >
                {car.price}
                <Text fontSize={['lg', 'xl', '2xl', '3xl']} ml="1" as="span">
                  kr
                </Text>
              </Text>
              <Text mb="4" fontSize="sm">
                Delbetala från: {Math.floor(car.price / 36)}kr/mån
              </Text>

              <Button
                bgGradient="linear(to-br, orange.200, orange.300)"
                // bg="red.400"
                color="gray.50"
                shadow="md"
                //   h="50%"
                w="70%"
                //   roundedTop="0"
                //   mt="8"
                _hover={{
                  bgGradient: 'linear(to-br, orange.300, orange.500)',
                  shadow: 'lg',
                  color: 'gray.50',
                }}
                _active={{
                  bgGradient: 'linear(to-br, orange.400, orange.600)',
                  shadow: 'xl',
                }}
                onClick={onClose}
              >
                Reservera
              </Button>
            </Flex>
          </Flex>

          <Text minH="150px" overflow="auto" fontWeight="thin" py="4" px="16">
            {car.description}
          </Text>
        </ModalContent>
      </Modal>
    </>
  );
}
