import {
  Box,
  Center,
  Divider,
  Flex,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import CarCard from '../components/CarCard';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchFilters from '../components/SearchFilters';

export default function Home() {
  return (
    <>
      <Navbar />
      <Flex
        // py="10"
        // px="10"
        // pb="0"
        pt="160px"
        // direction={['column', 'column', 'column', 'row']}
      >
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
        ></Flex>
      </Flex>
    </>
  );
}
