import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import CarCard from '../components/CarCard';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchFilters from '../components/SearchFilters';
import Link from 'next/link';
import fetcher from '../lib/fetcher';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

export default function Fordon() {
  const { data } = useSWR('/api/cars', fetcher);

  const [searchData, setsearchData] = useState([]);

  useEffect(() => {
    setsearchData(data);
  }, [data]);

  console.log(searchData);
  return (
    <>
      <Navbar />
      <Box pt="130px" bgGradient="linear(to-br, blue.50, gray.100)">
        <Box height="300px" position="relative" shadow="lg">
          <Image
            src="/vara-bilar.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
          />

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
            VÅRA BILAR
          </Text>
        </Box>

        <Flex>
          <Flex minW="100%" justify="center">
            <Wrap
              minW="100%"
              pb="160px"
              overflow="hidden"
              justify="center"
              spacing={['4', '4', '8', '8']}
            >
              <SearchFilters data={data} setsearchData={setsearchData} />

              <CarCard data={searchData} />
            </Wrap>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
