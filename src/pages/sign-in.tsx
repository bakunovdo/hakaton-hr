import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Link } from '~shared/ui/link';
import { PAGE_HEIGHT } from '~shared/ui/templates/consts';

import { PagePaths } from './lib/conts';

export const SignInPage = () => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      minH={PAGE_HEIGHT}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack maxW={'lg'} mx={'auto'} px={6} py={12} spacing={8}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box p={8} bg={useColorModeValue('white', 'gray.700')} shadow={'lg'} rounded={'lg'}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                align={'start'}
                justify={'space-between'}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Checkbox>Remember me</Checkbox>
                <Link to="/fff" color={'blue.400'}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                color={'white'}
                bg={'blue.400'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
                Don&apos;t have account?{' '}
                <Link to={PagePaths.SIGN_UP} color={'blue.400'}>
                  Register
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
