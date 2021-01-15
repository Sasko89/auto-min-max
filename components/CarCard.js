import React from 'react';
import {
  Heading,
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Spacer,
} from '@chakra-ui/react';
import CarPopup from './CarPopup';

export default function Carcard(props) {
  return (
    <>
      <Flex
        // cursor="pointer"
        direction="column"
        p="5"
        w={['170px', '220px', '260px', '260px']}
        borderWidth="1px"
        shadow="base"
        roundedBottom="lg"
        bgGradient="linear(to-br, gray.50, gray.100)"
        transition="all .2s"
        _hover={{ transform: 'scale(1.05)', shadow: 'md' }}
      >
        <Flex justify="space-between" align="baseline">
          <Flex>
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
            {/* <Badge
              rounded="md"
              textAlign="right"
              fontSize={['8px', '8px', '10px', '10px']}
              colorScheme="red"
              fontWeight="semibold"
              py="1px"
            >
              Sport
            </Badge> */}
          </Flex>
          <Text fontWeight="thin" fontSize="10px">
            Ons 27 Jan
          </Text>
        </Flex>
        <Text
          mt="2"
          mb="1"
          textTransform="uppercase"
          fontSize="11px"
          fontWeight="bold"
          color="blackAlpha.800"
          textAlign="right"
        >
          270hk &bull; AMG
        </Text>
        <Image boxShadow="inner" borderRadius="sm" src="/car-frontpage.jpg" />
        <Flex pt="4" pb="1" justify="space-between" align="center">
          <Flex direction="column">
            <Text
              fontSize={['sm', 'sm', 'md', 'md']}
              fontWeight="thin"
              lineHeight="short"
              color="blackAlpha.900"
            >
              V70 2.5T
            </Text>
            <Text
              fontWeight="semibold"
              textTransform="capitalize"
              fontSize="xs"
            >
              Volvo
            </Text>
          </Flex>
          <Flex align="flex-end" direction="column">
            <Text fontSize="xs">
              10.000
              <Text ml="1" as="span" fontWeight="md">
                Mil
              </Text>
            </Text>
            <Text
              fontSize={['sm', 'sm', 'md', 'md']}
              as="h2"
              fontWeight="bold"
              color="blackAlpha.800"
            >
              170.000 kr
            </Text>
          </Flex>
        </Flex>
        <Text overflowWrap="break-word" as="p" fontSize="xs" mt="2">
          heasdjahsdalöksjdöasdkalösdköalskdösladkjaskldjasödalskdaöspkjdgkslvmadiofmnözlxkcmv
        </Text>
        <CarPopup />
      </Flex>
    </>
  );
}
