import { ReactNode } from 'react';

import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text mb={2} fontSize={'lg'} fontWeight={'500'}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link>About Us</Link>
            <Link>Blog</Link>
            <Link>Careers</Link>
            <Link>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link>Help Center</Link>
            <Link>Safety Center</Link>
            <Link>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link>Cookies Policy</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Law Enforcement</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        borderTopWidth={1}
      >
        <Container
          as={Stack}
          align={{ md: 'center' }}
          justify={{ md: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          maxW={'6xl'}
          py={4}
          spacing={4}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
