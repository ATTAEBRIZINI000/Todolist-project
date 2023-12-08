import React from 'react';
import Header from './header';
import { ChakraProvider ,CSSReset, Container, extendTheme, Box } from '@chakra-ui/react';
import Sidebar from './sidebar';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body',
      },
    },
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Header */}
       <Header />
      <CSSReset />
      <Container display="flex" maxWidth="100vw" height="100vh" padding="0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Box flex="1" padding="4">
          {/* Main Content */}
        </Box>
      </Container>

      
     
    </ChakraProvider>
  );
}

export default App;
