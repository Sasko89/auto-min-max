import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function CarPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        color="gray.50"
        mt="4"
        onClick={onOpen}
        fontWeight="semibold"
        fontSize="sm"
        shadow="base"
        bgGradient="linear(to-br, blackAlpha.500, blackAlpha.700)"
        _hover={{
          bgGradient: 'linear(to-br, orange.200, orange.400)',
          shadow: 'md',
        }}
        _active={{
          bgGradient: 'linear(to-br, orange.200, orange.500)',
          shadow: 'lg',
        }}
      >
        Se Mer
      </Button>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent
          bg="gray.50"
          p="4"
          w={['90%', '90%', '80%', '50%']}
          h="85vh"
          bgGradient="linear(to-br, gray.50, gray.100)"
        >
          <ModalHeader>
            <Flex direction="column">
              <Text
                fontSize="2xl"
                fontWeight="thin"
                lineHeight="short"
                color="blackAlpha.900"
              >
                V70 2.5T
              </Text>
              <Text fontWeight="bold" textTransform="capitalize" fontSize="md">
                Volvo
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton m="7" size="lg" />
          <ModalBody>
            <Flex direction="column">
              <Flex overflow="hidden" rounded="md" h="50vh">
                <Image
                  //   w="80%"
                  //   boxShadow="inner"
                  //   borderRadius="sm"
                  //   objectFit="cover"
                  src="/car-frontpage.jpg"
                  layout="intrinsic"
                  width={1920}
                  height={1080}
                />
              </Flex>

              <Flex
                pt="4"
                pb="1"
                justify="space-between"
                align="center"
                // w="80%"
              >
                <Flex direction="column">
                  <Text
                    as="h2"
                    fontSize="xl"
                    fontWeight="semibold"
                    color="blackAlpha.800"
                  >
                    170.000 kr
                  </Text>
                  <Text fontSize="xs">
                    <Text mr="1" as="span" fontWeight="md">
                      10.000
                    </Text>
                    Mil
                  </Text>
                </Flex>
              </Flex>
              <Text overflowWrap="break-word" as="p" fontSize="xs" mt="2">
                heasdjahsdalöksjdöasdkalösdköalskdösladkjaskldjasödalskdaöspkjdgkslvmadiofmnözlxkcmv
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              color="gray.50"
              bgGradient="linear(to-br, blackAlpha.500, blackAlpha.700)"
              _hover={{
                bgGradient: 'linear(to-br, orange.200, orange.400)',
                shadow: 'md',
              }}
              _active={{
                bgGradient: 'linear(to-br, orange.200, orange.500)',
                shadow: 'lg',
              }}
              onClick={onClose}
            >
              Stäng
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
