import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex
     position = "fixed"
     top = "0"
     width = {`calc(100% - 240px )`}
     marginLeft={240}
      as="header"
      align="center"
      justify="space-between"
      padding="4"
      borderBottom="1px"
      borderColor="gray.200"
    >
      {/* Title */}
      <Text fontSize="xl" fontWeight="bold">
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
    </Flex>
  );
};

export default Header;
