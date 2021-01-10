import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Flex bg="blue.300" boxShadow="md" h="100px">
        <Box p="2">
          <Heading color="white" size="md">
            Auto min-max
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="blue" mr="4">
            Sign Up
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
