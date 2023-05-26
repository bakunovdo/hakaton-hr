import { Box, Flex } from '@chakra-ui/react';

import { VacancyList } from '~shared/ui/VacancyList';



export default function Vacancy() {
  return (
    <Box>
      <Flex align="center" justify="center" minH="80vh">
        <VacancyList/>
      </Flex>
    </Box>
  );
};
