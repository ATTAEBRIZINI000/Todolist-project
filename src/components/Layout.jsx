import { CSSReset, Container, Box } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Header />
      <Container display="flex" maxWidth="100vw" height="100vh" padding="0">
        <Sidebar />
        <Box flex="1" padding="4">
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
