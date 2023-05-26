import { ReactElement } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FcAbout, FcAssistant, FcCollaboration, FcDonate, FcManager } from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      overflow="hidden"
      w={'full'}
      maxW={{ base: 'full', md: '275px' }}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          align={'center'}
          justify={'center'}
          w={16}
          h={16}
          color={'white'}
          bg={useColorModeValue('gray.100', 'gray.700')}
          rounded={'full'}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button colorScheme={'blue'} size={'sm'} variant={'link'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export function Features() {
  return (
    <Box p={4}>
      <Stack as={Container} maxW={'3xl'} textAlign={'center'} spacing={4}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Short heading
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex justify="center" wrap="wrap" gridGap={6}>
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
