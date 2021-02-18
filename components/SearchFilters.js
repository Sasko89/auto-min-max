import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Stack,
  Wrap,
  Checkbox,
  Text,
  WrapItem,
  Image,
  Divider,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';

export default function Searchfilters({ data, setsearchData }) {
  const [filterData, setfilterData] = useState('');
  const [Miljo, setMiljo] = useState(false);
  const [Familj, setFamilj] = useState(false);
  const [Sport, setSport] = useState(false);

  function handleFilter() {
    const search = data?.filter(
      (car) =>
        car.brand.toLowerCase().match(filterData.toLowerCase()) ||
        car.model.toLowerCase().match(filterData.toLowerCase())
    );

    console.log(Miljo);
    setsearchData(search);
  }

  function ResetData() {
    setsearchData(data);
  }

  return (
    <Flex
      rounded="sm"
      bgGradient="linear(to-t, gray.200, gray.50)"
      minW="100%"
      mb={['10', '10', '10', '0']}
      shadow="lg"
      p="10"
      justify="center"
      mb="4"
    >
      <Stack p="4">
        <Text
          mb="4"
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
          as="h1"
          color="blackAlpha.800"
        >
          SÖK FORDON
        </Text>
        <Flex>
          <Input
            roundedLeft="lg"
            variant="flushed"
            placeholder="Sök.."
            bg="white"
            p="5"
            size="md"
            // value={filterData}
            onChange={(e) => setfilterData(e.target.value)}
          ></Input>
          <IconButton
            colorScheme="red"
            roundedLeft="0"
            aria-label="Search database"
            icon={<SearchIcon />}
            size="md"
            onClick={handleFilter}
          />
        </Flex>

        <Divider pt="2" />
        <Flex mb="4" pt="2" justify="space-between">
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
        <Flex justify="center">
          <Button
            // bgGradient="linear(to-br, orange.100, orange.300)"
            bg="red.400"
            color="white"
            size="xs"
            onClick={ResetData}
            _hover={{ bg: 'red.400' }}
            shadow="base"
            // p="4"
          >
            Rensa filter
            <SmallCloseIcon ml="1" />
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
