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

import { HamburgerIcon } from '@chakra-ui/icons';

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');

  return (
    <>
      <IconButton
        // colorScheme="red"
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
            <DrawerBody overflow="hidden">
              <Text mt="10">Information</Text>
              <Divider m="10" />
              <Text>Finansering</Text>
              <Divider m="10" />
              <Text>Kontakta Oss</Text>
              <Divider m="10" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
