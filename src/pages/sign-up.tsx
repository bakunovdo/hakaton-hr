import { useState } from 'react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Link } from '~shared/ui/link';

import { PagePaths } from './lib/conts';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      align={'center'}
      justify={'center'}
      minH={'100vh'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack maxW={'lg'} mx={'auto'} px={6} py={12} spacing={8}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box p={8} bg={useColorModeValue('white', 'gray.700')} shadow={'lg'} rounded={'lg'}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                    variant={'ghost'}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack pt={2} spacing={10}>
              <Button
                color={'white'}
                bg={'blue.400'}
                _hover={{
                  bg: 'blue.500',
                }}
                loadingText="Submitting"
                size="lg"
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link to={PagePaths.SIGN_IN} color={'blue.400'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
