import { Box, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = ({ ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems="center"
      {...props}
    >
      <Box>
        <Image
          src="/moja_global_logo.png"
          width="80px"
          alt="moja global logo"
        />
      </Box>
      <Box display={"flex"}>
        <ChakraLink pr="8" as={Link} to="/documentation">
          Documentation
        </ChakraLink>
        <ChakraLink pr="8" as={Link} to="/about">
          About
        </ChakraLink>
        <ChakraLink pr="8" as={Link} to="/contact">
          Contact
        </ChakraLink>
      </Box>
    </Box>
  );
};
