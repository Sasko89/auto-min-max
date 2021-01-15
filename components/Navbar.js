import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import Menu from './Menu';

export default function Navbar(props) {
  return (
    <Flex
      //   boxShadow="sm"
      py={['16', '16', '16', '16']}
      px={['10', '10', '20', '20']}
      //   mb="10"
      zIndex="1"
      bgGradient="linear(to-br, gray.100, gray.50)"
      h="10vh"
      align="center"
      shadow="md"
      position="fixed"
      // bg="white"
      w="100%"
    >
      <Link href="/">
        <Flex cursor="pointer" align="center">
          <Image
            mr="1"
            src="https://img.icons8.com/ios/35/000000/tire-track.png"
          />
          <Heading
            size="md"
            color="gray.900"
            fontSize={['lg,', 'xl', '2xl', '2xl']}
            fontWeight="md"
          >
            <Text
              fontSize={['lg,', 'xl', '2xl', '2xl']}
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

      <Spacer />

      <Text transition="all .1s" _hover={{ transform: 'scale(1.05)' }} mr="10">
        <Link href="/fordon">Fordon </Link>
      </Text>

      <Menu />
    </Flex>
  );
}
