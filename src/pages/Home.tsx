import { Layout, Card } from "../components";
import { Box, Text } from "@chakra-ui/react";
import { ICard } from "../types";
import { cards } from "../static";
const Home = () => {
  return (
    <Layout>
      <Box
        h="25rem"
        backgroundImage="url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500')"
      >
        <Box display="flex">
          <Box
            w="50%"
            h="25rem"
            display={"flex"}
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize="5xl" fontWeight="bold">
              FLINT UI
            </Text>
          </Box>
          <Box w="50%" color="white" bgColor="#475447">
            <Box
              h="25rem"
              p="8"
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white" fontSize="lg">
                The project provides an intutive way for new to explore some
                preconfined FLINT modules, including the Generic Carbon Budget
                Model (GCBM), in order to better understand how the FLINT system
                works. Our client is written as a web application and can be
                used in a local or remote environment.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={"space-between"}
        px="32"
        py="8"
      >
        {cards.map(({ title, description, href }: ICard, idx) => {
          return (
            <Card
              key={idx}
              p="4"
              w="20rem"
              title={title}
              description={description}
              href={href}
            />
          );
        })}
      </Box>
    </Layout>
  );
};

export { Home };
