import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  IconButton,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
     const { toggleColorMode} = useColorMode();
  return (
    <Flex
      position="fixed"
      top="0"
      width={`calc(100% - 240px )`}
      marginLeft={240}
      as="header"
      alignItems="center"
      justify="space-between"
      pl = {8}
      pr = {8}
      pt = {4}
      pb = {4}
      borderBottom="1px"
      borderColor= {useColorModeValue ("gray.200", "gray.700" )}
    >
      {/* Title */}
      <Text fontSize="xl" 
      fontWeight="bold"
      color={useColorModeValue ("gray.700", "gray.200")}
      
      >
        Title
      </Text>

      {/* Search Bar */}
      <Box>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Box>

      <IconButton
        icon={ useColorModeValue(<BiMoon size = {22}/>,<BiSun size={22}/>)}
        alignSelf={"center"}
        size={"sm"}
        variant={"ghost"}
        aria-label={"Toggle Color Mode"}
        border={"1px"}
        background= {useColorModeValue("gray.200", "gray.700")}
        borderColor={ useColorModeValue("gray.200", "gray.700")}
        onClick={toggleColorMode} 
      />
    </Flex>
  );
};

export default Header;
