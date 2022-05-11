import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <Box display="flex" flexDirection={"column"} justifyContent="space-between">
      <Navbar px="16" py="8" />
      <Box>{children}</Box>
    </Box>
  );
};
