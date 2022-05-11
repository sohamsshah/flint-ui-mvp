import { Box, Text } from "@chakra-ui/react";
import { Layout, PointConfigurationForm } from "../components";

export const Point = () => {
  return (
    <Layout>
      <Box px="16" py="8">
        <Text fontSize="2xl" pb="4">
          Point example simulation configuration
        </Text>
        <Text>
          {" "}
          Was the simulation conducted at a specific place? Click here to save
          latitude and longitude co-ordinates on a map.
        </Text>
        <PointConfigurationForm />
      </Box>
    </Layout>
  );
};
