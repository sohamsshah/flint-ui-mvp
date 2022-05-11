import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ICard } from "../../types";
export const Card = ({ title, description, href, ...props }: ICard) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="space-between"
      {...props}
    >
      <Box>
        <Text mb="4" fontSize="xl">
          {title}
        </Text>
        <Text mb="4">{description}</Text>
      </Box>
      <Button>
        <Link to={href}>Explore</Link>
      </Button>
    </Box>
  );
};
