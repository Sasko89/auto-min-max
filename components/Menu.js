import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Text,
  Divider,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';

import { HamburgerIcon, UnlockIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="Search database"
        icon={<HamburgerIcon />}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p="10" borderBottomWidth="1px">
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
            </DrawerHeader>
            <DrawerBody position="relative" overflow="hidden">
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                mt="4"
                cursor="pointer"
                fontWeight="semibold"
              >
                <Link href="/fordon">Våra bilar</Link>
              </Text>
              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                cursor="pointer"
                fontWeight="thin"
              >
                <Link href="/salj-din-bil">- Sälj din bil</Link>
              </Text>
              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                fontWeight="semibold"
              >
                Våra tjänster
              </Text>
              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                cursor="pointer"
                fontWeight="thin"
              >
                <Link href="/finansiering">- Finansering</Link>
              </Text>
              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                cursor="pointer"
                fontWeight="thin"
              >
                <Link href="/garantier">- Garantier</Link>
              </Text>

              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                cursor="pointer"
                fontWeight="thin"
              >
                <Link href="/vardering-och-besiktning">
                  - Värdering och besiktning
                </Link>
              </Text>
              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                cursor="pointer"
                fontWeight="semibold"
              >
                <Link href="/om-oss">Om oss</Link>
              </Text>
              <Divider m="4" />
              <Text
                transition="all .1s"
                _hover={{ transform: 'scale(1.05)' }}
                cursor="pointer"
                fontWeight="semibold"
              >
                <Link href="/kontakt">Kontakt</Link>
              </Text>
              <Divider m="4" />
              <Link href="/admin">
                <UnlockIcon
                  cursor="pointer"
                  position="absolute"
                  bottom="20px"
                  right="20px"
                />
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
