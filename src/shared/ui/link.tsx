import { Link as LinkRouter, LinkProps as RouterLinkProps } from 'react-router-dom';

import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type LinkProps = ChakraLinkProps &
  RouterLinkProps & {
    children?: React.ReactNode;
  };

export const Link = (props: LinkProps) => {
  return (
    <ChakraLink as={LinkRouter} {...props}>
      {props.children}
    </ChakraLink>
  );
};
