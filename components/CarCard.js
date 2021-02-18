import React from 'react';
import {
  Heading,
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Spacer,
  Center,
  WrapItem,
} from '@chakra-ui/react';
import CarPopup from './CarPopup';

export default function Carcard({ data }) {
  const carList = data?.map((car) => {
    return (
      <WrapItem key={car.id}>
        <Center>
          <Flex
            direction="column"
            h="400px"
            p="5"
            w={['170px', '220px', '260px', '260px']}
            borderWidth="1px"
            shadow="base"
            roundedBottom="lg"
            bgGradient="linear(to-br, gray.50, gray.100)"
            transition="all .2s"
            _hover={{ transform: 'scale(1.05)', shadow: 'md' }}
            position="relative"
          >
            <Flex justify="space-between" align="baseline">
              <Flex>
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
              <Text fontWeight="thin" fontSize="10px">
                Tor 18 Feb
              </Text>
            </Flex>
            <Text
              mt="2"
              mb="1"
              fontSize="11px"
              fontWeight="bold"
              color="blackAlpha.800"
              textAlign="right"
              textTransform="uppercase"
            >
              {car.horsepower ? `${car.horsepower}hk` : null} &bull;{' '}
              {car.package ? car.package : null}
            </Text>
            <Image
              maxH="140px"
              objectFit="contain"
              boxShadow="inner"
              borderRadius="sm"
              src={car.photo}
            />
            <Flex pt="4" pb="1" justify="space-between" align="center">
              <Flex direction="column">
                <Text
                  fontSize={['sm', 'sm', 'md', 'md']}
                  fontWeight="thin"
                  lineHeight="short"
                  color="blackAlpha.900"
                  textTransform="uppercase"
                >
                  {car.model}
                </Text>
                <Text
                  fontWeight="semibold"
                  textTransform="capitalize"
                  fontSize="xs"
                >
                  {car.brand}
                </Text>
              </Flex>
              <Flex align="flex-end" direction="column">
                <Text fontSize="xs">
                  {car.milage}
                  <Text ml="1" as="span" fontWeight="md">
                    Mil
                  </Text>
                </Text>
                <Text
                  fontSize={['sm', 'sm', 'md', 'md']}
                  as="h2"
                  fontWeight="bold"
                  color="gray.600"
                >
                  {car.price} kr
                </Text>
              </Flex>
            </Flex>
            <Text
              minH="40px"
              overflowWrap="break-word"
              text-overflow="ellipsis"
              overflow="hidden"
              white-space="nowrap"
              maxH="2ch"
              as="p"
              fontSize="xs"
              my="2"
            >
              {car.description}
            </Text>
            <CarPopup car={car} />
          </Flex>
        </Center>
      </WrapItem>
    );
  });

  return <>{carList}</>;
}
