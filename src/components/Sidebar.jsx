// Sidebar.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button, VStack ,  useColorModeValue} from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      position={'fixed'}
      top = {0}
      width="240px"
      height="100vh"
      backgroundColor= {useColorModeValue("#BB86FC", "#1a202c")}
      borderRight={"1px"}
      borderColor={useColorModeValue("#A070DA", "gray.700")}
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
