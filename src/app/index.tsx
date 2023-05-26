import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider, Roles } from './providers/auth-provider';
import { AppRouter } from './routing';

export const Application = () => {
  return (
    <ChakraProvider>
      <AuthProvider value={{ user: { email: 'mock@email.com', role: Roles.Candidate } }}>
        <AppRouter />
      </AuthProvider>
    </ChakraProvider>
  );
};
