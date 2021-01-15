import { Box, Flex, Input, Stack } from '@chakra-ui/react';
import AddCar from '../components/addCar';
import { useAuth } from '../lib/auth';
import { ProvideAuth } from '../lib/auth';

export default function Admin() {
  const auth = useAuth();

  return (
    <ProvideAuth>
      <Box minH="100vh" bgGradient="linear(to-b, blue.400, blue.200)">
        <AddCar />
        <Flex justify="center">
          <Stack>
            <Input w="100px"></Input>
            <Input w="100px"></Input>
            <Input w="100px"></Input>
            <Input w="100px"></Input>
          </Stack>
        </Flex>
      </Box>
    </ProvideAuth>
  );
}
