import React from 'react';
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
import { SearchIcon } from '@chakra-ui/icons';

export default function Searchfilters(props) {
  return (
    <Flex
      rounded="sm"
      // minH={['200px', '200px', '200px', '70vh']}
      bgGradient="linear(to-br, gray.100, gray.50)"
      // bg="gray.50"
      minW="100%"
      mb={['10', '10', '10', '0']}
      // mr={['0', '0', '0', '10']}
      shadow="base"
      p="10"
      justify="center"
      mb="4"

      // position="fixed"
      // mb="10"
      // zIndex="1"
    >
      {/* <Divider orientation="vertical" px="4" /> */}
      <Stack p="4">
        <Text
          mb="4"
          fontWeight="bold"
          fontSize="5xl"
          textAlign="center"
          as="h1"
          color="blackAlpha.800"
          // lineHeight="short"
        >
          HITTA FORDON
        </Text>
        <Flex>
          <Input
            roundedLeft="lg"
            variant="flushed"
            placeholder="Sök.."
            bg="white"
            p="5"
            size="md"
          ></Input>
          <IconButton
            colorScheme="red"
            roundedLeft="0"
            aria-label="Search database"
            icon={<SearchIcon />}
            size="md"
          />
        </Flex>
        {/* <Select bg="white" placeholder="Märke:">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select> */}
        <Divider p="2" />

        <Flex pt="4" justify="space-between">
          <Flex align="center">
            <Flex align="center" mb="2">
              <Image
                mr="1"
                src="https://img.icons8.com/dotty/15/000000/environment.png"
              />
              <Text fontSize="sm" color="green" mr="2">
                Miljö
              </Text>
              <Checkbox colorScheme="green" />
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
              <Checkbox colorScheme="blue" />
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
              <Checkbox colorScheme="red" />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
