// Sidebar.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      width="200px"
      height="100vh"
      backgroundColor="gray.200"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingY="4"
    >
      {/* Logo */}
      <Box fontSize="xl" fontWeight="bold" marginBottom="4">
        Logo
      </Box>

      {/* Categories */}
      <VStack spacing="2" flex="1">
        <Button variant="ghost">Study</Button>
        <Button variant="ghost">Work</Button>
        <Button variant="ghost">Hobbies</Button>
        <Button variant="ghost">Workout</Button>
      </VStack>

      {/* Create Category Button */}
      <Button marginTop="4" colorScheme="teal">
        Create Category
      </Button>
    </Box>
  );
};

export default Sidebar;
