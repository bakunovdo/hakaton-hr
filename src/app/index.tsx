import { ChakraProvider } from '@chakra-ui/react';

import { AppRouter } from './routing';

export const Application = () => {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
};
