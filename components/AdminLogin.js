import { UnlockIcon } from '@chakra-ui/icons';
import {
  Heading,
  Text,
  Flex,
  Input,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Adminlogin({ setUserName, setPassword, handleLogin }) {
  return (
    <>
      <Stack m="auto">
        <Link href="/">
          <Flex cursor="pointer" align="center">
            <Image
              mr="1"
              src="https://img.icons8.com/ios/35/000000/tire-track.png"
            />
            <Heading size="md" color="gray.900" fontSize="2xl" fontWeight="md">
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
        <Text mb="4" fontWeight="thin" fontSize="md" textAlign="center">
          ADMINISTRATÖR
          <UnlockIcon mb="2" ml="1" color="yellow.400" />
        </Text>
        <Stack spacing="2">
          <Input
            textAlign="center"
            placeholder="E-post.."
            variant="white"
            w="full"
            border="1px solid gray;"
            fontWeight="thin"
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
          <Input
            textAlign="center"
            placeholder="Lösenord.."
            variant="white"
            w="full"
            mb="8"
            border="1px solid gray;"
            type="password"
            fontWeight="thin"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button
            onClick={() => {
              handleLogin();
            }}
            color="white"
            bg="green.500"
            _hover={{ bg: 'green.600' }}
          >
            Logga in
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
