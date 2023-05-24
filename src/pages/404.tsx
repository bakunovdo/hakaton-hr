import { Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import { Link } from '~shared/ui/link';
import { PAGE_HEIGHT } from '~shared/ui/templates/consts';

import { PagePaths } from './lib/conts';

export const NotFoundPage = () => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      direction="column"
      minH={PAGE_HEIGHT}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Heading
        as="h2"
        display="inline-block"
        bgGradient="linear(to-r, teal.400, teal.600)"
        bgClip="text"
        size="2xl"
      >
        404
      </Heading>
      <Text mt={3} mb={2} fontSize="18px">
        Page Not Found
      </Text>
      <Text mb={6} color={'gray.500'}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
        as={Link}
        color="white"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        colorScheme="teal"
        to={PagePaths.HOME}
        variant="solid"
      >
        Go to Home
      </Button>
    </Flex>
  );
};
