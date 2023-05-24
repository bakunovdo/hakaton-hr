import { Box, Flex } from '@chakra-ui/react';

import { Features } from '~shared/ui/features';

export const HomePage = () => {
  return (
    <Box>
      <Flex align="center" justify="center" minH="80vh">
        <Features />
      </Flex>
    </Box>
  );
};
