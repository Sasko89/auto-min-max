import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function omOss() {
  return (
    <>
      <Navbar />
      <Box minH="100vh" justify="center" pt="130px">
        <Box height="300px" position="relative" shadow="base">
          <Image src="/om-oss.jpg" layout="fill" objectFit="cover" />

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
            OM OSS
          </Text>
        </Box>
        <Box p="16">
          <Text as="h2" fontSize="2xl">
            Vår historia
          </Text>
          <Divider my="8" />
          <Stack spacing="4">
            <Text fontWeight="thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              ornare arcu odio ut sem nulla. Malesuada bibendum arcu vitae
              elementum curabitur vitae. Vulputate mi sit amet mauris commodo.
              Sit amet massa vitae tortor condimentum. Vestibulum lectus mauris
              ultrices eros in cursus. Sed elementum tempus egestas sed sed
              risus pretium. Aliquam faucibus purus in massa tempor nec. Donec
              ac odio tempor orci dapibus ultrices in iaculis nunc. Suspendisse
              faucibus interdum posuere lorem ipsum. Interdum consectetur libero
              id faucibus nisl tincidunt. Sed euismod nisi porta lorem. Faucibus
              nisl tincidunt eget nullam non nisi. Integer feugiat scelerisque
              varius morbi enim. Id cursus metus aliquam eleifend mi. At
              ultrices mi tempus imperdiet nulla malesuada pellentesque.
              Sagittis eu volutpat odio facilisis mauris sit amet. Fames ac
              turpis egestas integer eget aliquet nibh. Iaculis urna id volutpat
              lacus. Id eu nisl nunc mi.
            </Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
