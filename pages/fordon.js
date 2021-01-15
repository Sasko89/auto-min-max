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

export default function Fordon() {
  return (
    <Box bgGradient="linear(to-br, blue.50, gray.100)">
      <Navbar />
      <Flex
        // py="10"
        // px="10"
        // pb="0"
        pt="150px"
        // direction={['column', 'column', 'column', 'row']}
      >
        <Flex minW="100%" justify="center">
          <Wrap
            minW="100%"
            pb="160px"
            overflow="hidden"
            justify="center"
            spacing={['4', '4', '8', '8']}
          >
            <SearchFilters />

            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <CarCard />
              </Center>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    </Box>
  );
}
