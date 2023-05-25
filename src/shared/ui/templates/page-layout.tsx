import { Outlet } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';

import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  AdminCondition,
  AuthorizedCondition,
  CandidateCondition,
  HRCondition,
  NotAuthorizedCondition,
} from '~app/providers/auth-provider';

import { PagePaths } from '~pages/lib/const';

import { Footer } from '../footer';

import { HEADER_HEIGHT } from './consts';

export function PageLayout() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      // scooped variable
      sx={{
        '--header-h': HEADER_HEIGHT,
      }}
    >
      <Flex
        align={'center'}
        minH={HEADER_HEIGHT}
        px={{ base: 4 }}
        py={{ base: 2 }}
        color={'gray.600'}
        bg={'white'}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          ml={{ base: -2 }}
        >
          <IconButton
            aria-label={'Toggle Navigation'}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            onClick={onToggle}
            variant={'ghost'}
          />
        </Flex>
        <Flex justify={{ base: 'center', md: 'start' }} flex={{ base: 1 }}>
          <Text
            as={LinkRouter}
            color={useColorModeValue('gray.800', 'white')}
            fontFamily={'heading'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            to={PagePaths.HOME}
          >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <AuthorizedCondition>
          <Stack justify={'flex-end'} direction={'row'} flex={{ base: 1, md: 0 }} spacing={2}>
            <AdminCondition>
              <Badge
                alignItems="center"
                display="flex"
                px={3}
                py={1}
                lineHeight={1}
                colorScheme="blue"
              >
                ADMIN
              </Badge>
            </AdminCondition>
            <HRCondition>
              <Badge
                alignItems="center"
                display="flex"
                px={3}
                py={1}
                lineHeight={1}
                colorScheme="pink"
              >
                HR
              </Badge>
            </HRCondition>
            <CandidateCondition>
              <Badge
                alignItems="center"
                display="flex"
                px={3}
                py={1}
                lineHeight={1}
                colorScheme="green"
              >
                CANDIDATE
              </Badge>
            </CandidateCondition>

            <Flex align={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  minW={0}
                  cursor={'pointer'}
                  rounded={'full'}
                  variant={'link'}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Stack>
        </AuthorizedCondition>

        <NotAuthorizedCondition>
          <Stack justify={'flex-end'} direction={'row'} flex={{ base: 1, md: 0 }} spacing={6}>
            <Button
              as={LinkRouter}
              fontSize={'sm'}
              fontWeight={400}
              to={PagePaths.SIGN_IN}
              variant={'link'}
            >
              Sign In
            </Button>
            <Button
              as={LinkRouter}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              colorScheme="pink"
              to={PagePaths.SIGN_UP}
            >
              Sign Up
            </Button>
          </Stack>
        </NotAuthorizedCondition>
      </Flex>

      <Collapse animateOpacity in={isOpen}>
        <MobileNav />
      </Collapse>

      <Outlet />

      <Footer />
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover placement={'bottom-start'} trigger={'hover'}>
            <PopoverTrigger>
              <Link
                p={2}
                color={linkColor}
                fontSize={'sm'}
                fontWeight={500}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                href={navItem.href ?? '#'}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                minW={'sm'}
                p={4}
                bg={popoverContentBgColor}
                border={0}
                shadow={'xl'}
                rounded={'xl'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      display={'block'}
      p={2}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
      href={href}
      role={'group'}
      rounded={'md'}
    >
      <Stack align={'center'} direction={'row'}>
        <Box>
          <Text fontWeight={500} _groupHover={{ color: 'pink.400' }} transition={'all .3s ease'}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          align={'center'}
          justify={'flex-end'}
          flex={1}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          transform={'translateX(-10px)'}
          transition={'all .3s ease'}
        >
          <Icon as={ChevronRightIcon} w={5} h={5} color={'pink.400'} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack display={{ md: 'none' }} p={4} bg={useColorModeValue('white', 'gray.800')}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle} spacing={4}>
      <Flex
        as={Link}
        align={'center'}
        justify={'space-between'}
        py={2}
        _hover={{
          textDecoration: 'none',
        }}
        href={href ?? '#'}
      >
        <Text color={useColorModeValue('gray.600', 'gray.200')} fontWeight={600}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            w={6}
            h={6}
            transform={isOpen ? 'rotate(180deg)' : ''}
            transition={'all .25s ease-in-out'}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{ marginTop: '0!important' }}>
        <Stack
          align={'start'}
          mt={2}
          pl={4}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderLeft={1}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
