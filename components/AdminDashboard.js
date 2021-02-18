import { UnlockIcon } from '@chakra-ui/icons';
import {
  Heading,
  Text,
  Flex,
  Input,
  Stack,
  Image,
  Button,
  Box,
  useToast,
  Divider,
  Checkbox,
  Textarea,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { storage } from '../lib/fireBase';

import { createCar } from '../lib/db';

export default function AdminDashboard({
  setUserName,
  setPassword,
  handleLogin,
  handleLogout,
  UserName,
  Password,
}) {
  const toast = useToast();
  const { data } = useSWR('/api/cars', fetcher);

  const handleChange = (e) => {
    // if (e.target.files[0]) {
    setPhoto(e.target.files[0]);
    // }
  };

  const [Photo, setPhoto] = useState(null);
  const [Brand, setBrand] = useState(null);
  const [Model, setModel] = useState(null);
  const [YearModel, setYearModel] = useState(null);
  const [FuelType, setFuelType] = useState(null);
  const [Milage, setMilage] = useState(null);
  const [Horsepower, setHorsepower] = useState(null);
  const [Color, setColor] = useState(null);
  const [Drive, setDrive] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Miljo, setMiljo] = useState(false);
  const [Familj, setFamilj] = useState(false);
  const [Sport, setSport] = useState(false);
  const [Description, setDescription] = useState(null);
  const [Package, setPackage] = useState(null);
  const [CarType, setCarType] = useState(null);
  const [GearType, setGearType] = useState(null);

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${Photo.name}`).put(Photo);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(Photo.name)
          .getDownloadURL()
          .then((url) => {
            sendCar(url);
          });
      }
    );
  };

  function sendCar(imgURL) {
    const obj = {
      brand: Brand,
      model: Model,
      year_model: YearModel,
      fuel_type: FuelType,
      milage: Milage,
      horsepower: Horsepower,
      color: Color,
      drive: Drive,
      price: Price,
      miljo: Miljo,
      familj: Familj,
      sport: Sport,
      description: Description,
      package: Package,
      car_type: CarType,
      gear_type: GearType,
      photo: imgURL,
    };

    return createCar(obj);
  }

  console.log('image', Photo);

  const Carlist = data?.map((car) => {
    return (
      <React.Fragment key={car.id}>
        <Tr>
          <Td textTransform="capitalize">{car.brand}</Td>
          <Td textTransform="uppercase">{car.model}</Td>
          <Td>{car.year_model}</Td>
          <Td>{car.milage}</Td>
          <Td textTransform="uppercase">{car.color}</Td>
          <Td textTransform="uppercase">{car.fuel_type}</Td>
          <Td>
            <Button
              // ml="4"
              h="6"
              size="sm"
              fontSize="xs"
              bg="red.400"
              color="white"
            >
              Ta bort
            </Button>
          </Td>
        </Tr>
      </React.Fragment>
    );
  });

  return (
    <Flex direction="column" justify="center" w="full">
      <Flex
        shadow="Base"
        px="24"
        align="center"
        h="15vh"
        justify="space-between"
        w="full"
      >
        <Stack p="2" my="auto">
          <Link href="/">
            <Flex cursor="pointer" align="center">
              <Image
                mr="1"
                src="https://img.icons8.com/ios/35/000000/tire-track.png"
              />
              <Heading
                size="md"
                color="gray.900"
                fontSize="2xl"
                fontWeight="md"
              >
                <Text
                  fontSize="2xl"
                  as="span"
                  fontWeight="bold"
                  color="red.400"
                  mr="1"
                >
                  Auto
                </Text>
                Minimax
              </Heading>
            </Flex>
          </Link>
          <Flex justify="center" align="center">
            <Text fontWeight="thin" fontSize="md" textAlign="center">
              ADMINISTRATÖR
            </Text>
            <UnlockIcon mb="1" ml="1" color="yellow.400" />
          </Flex>
        </Stack>
        <Flex align="baseline">
          <Text fontWeight="thin" mr="4">
            Inloggad som: {UserName.email}
          </Text>
          <Button
            bg="red.400"
            color="white"
            transition="all .3s"
            _hover={{ bg: 'red.500' }}
            onClick={() => {
              handleLogout();
            }}
          >
            Logga ut
          </Button>
        </Flex>
      </Flex>
      <Flex justify="center" w="full" minH="85vh">
        <Box shadow="lg" borderTopRadius="20px" w="90%" bg="white">
          <Flex minH="85vh" p="12">
            <Flex p="4" direction="column" w="50%">
              <Text fontSize="3xl">Lägg upp en bil</Text>
              <Divider my="6" />
              <Flex>
                <Stack fontWeight="thin" w="50%" p="2" spacing="2">
                  <Text>Märke:</Text>
                  <Input onChange={(e) => setBrand(e.target.value)}></Input>
                  <Text>Modell:</Text>
                  <Input onChange={(e) => setModel(e.target.value)}></Input>
                  <Text>Årsmodell:</Text>
                  <Input onChange={(e) => setYearModel(e.target.value)}></Input>
                  <Text>Bränsle:</Text>
                  <Input onChange={(e) => setFuelType(e.target.value)}></Input>
                  <Text>Biltyp:</Text>
                  <Input onChange={(e) => setCarType(e.target.value)}></Input>
                  <Text>Pris:</Text>
                  <Input onChange={(e) => setPrice(e.target.value)}></Input>

                  <Text pt="4">Ladda upp bilder:</Text>
                  <Input type="file" onChange={handleChange}></Input>
                </Stack>

                <Stack fontWeight="thin" w="50%" p="2" spacing="2">
                  <Text>Miltal:</Text>
                  <Input onChange={(e) => setMilage(e.target.value)}></Input>
                  <Text>Hästkrafter:</Text>
                  <Input
                    onChange={(e) => setHorsepower(e.target.value)}
                  ></Input>
                  <Text>Färg:</Text>
                  <Input onChange={(e) => setColor(e.target.value)}></Input>
                  <Text>Drivning:</Text>
                  <Input onChange={(e) => setDrive(e.target.value)}></Input>
                  <Text>Växellåda:</Text>
                  <Input onChange={(e) => setGearType(e.target.value)}></Input>
                  <Text>Paket:</Text>
                  <Input onChange={(e) => setPackage(e.target.value)}></Input>
                  <Flex pt="14" justify="space-around">
                    <Flex align="center">
                      <Flex align="center" mb="2">
                        <Image
                          mr="1"
                          src="https://img.icons8.com/dotty/15/000000/environment.png"
                        />
                        <Text fontSize="sm" color="green" mr="2">
                          Miljö
                        </Text>
                        <Checkbox
                          onChange={() => setMiljo(!Miljo)}
                          bg="white"
                          colorScheme="green"
                        />
                      </Flex>
                    </Flex>
                    <Flex align="center">
                      <Flex align="center" mb="2">
                        <Image
                          mr="1"
                          src="https://img.icons8.com/carbon-copy/15/000000/family.png"
                        />
                        <Text fontSize="sm" color="blue" mr="2">
                          Familj
                        </Text>
                        <Checkbox
                          onChange={() => setFamilj(!Familj)}
                          bg="white"
                          colorScheme="blue"
                        />
                      </Flex>
                    </Flex>

                    <Flex align="center">
                      <Flex align="center" mb="2">
                        <Image
                          mr="1"
                          src="https://img.icons8.com/dotty/15/000000/engine.png"
                        />
                        <Text fontSize="sm" color="red" mr="2">
                          Sport
                        </Text>
                        <Checkbox
                          onChange={() => setSport(!Sport)}
                          bg="white"
                          colorScheme="red"
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Stack>
              </Flex>
              <Text mt="4">Beskrivning:</Text>
              <Textarea
                mt="2"
                onChange={(e) => setDescription(e.target.value)}
              ></Textarea>

              <Button
                onClick={() => {
                  handleUpload();
                  toast({
                    title: 'Bil tillagd!',
                    description: 'Bilen är nu uppe för försäljning.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}
                bg="green.400"
                color="white"
                w="150px"
                mt="10"
              >
                Publicera
              </Button>
            </Flex>
            <Flex p="4" w="50%">
              <Flex direction="column" w="full">
                <Text fontSize="3xl">Bilar i lager</Text>
                <Divider my="6" />
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Märke</Th>
                      <Th>Modell</Th>
                      <Th>Årsmodell</Th>
                      <Th>Miltal</Th>
                      <Th>Färg</Th>
                      <Th>Drivmedel</Th>
                    </Tr>
                  </Thead>
                  <Tbody>{Carlist}</Tbody>
                </Table>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
