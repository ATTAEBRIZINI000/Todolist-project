// Sidebar.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button, VStack ,  useColorModeValue} from '@chakra-ui/react';
import { Links } from '../constants';
import { LinkItem } from './LinkItem';

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
      <Box fontSize="xl" fontWeight="bold" marginBottom="8">
        Logo
      </Box>

      {/* Categories */}
      <VStack spacing="1" flex="1">
        {Links.map(item =>(
          <LinkItem key = {item.id}
          name = {item.name}
          id = {item.id}
          link = {item.link}/>
        ))}
      </VStack>

      {/* Create Category Button */}
      <Button marginTop="4" colorScheme="teal">
        Create Category
      </Button>
    </Box>
  );
};

export default Sidebar;
