import { Box, Text } from "@chakra-ui/react";
import { Layout, RothCConfigurationForm } from "../components";

export const RothC = () => {
  return (
    <Layout>
      <Box px="16" py="8">
        <Text fontSize="2xl" pb="4">
          RothC example simulation configuration
        </Text>
        <Text>
          Was the simulation conducted at a specific place? Click here to save
          latitude and longitude co-ordinates on a map. Input the custom values
          in the fields below. Default values as placeholder text will be used
          if none provided.
        </Text>
        <RothCConfigurationForm />
      </Box>
    </Layout>
  );
};
