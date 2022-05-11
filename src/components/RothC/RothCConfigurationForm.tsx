import {
  Box,
  Input,
  Button,
  FormLabel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from "formik";
import { IRothCConfigurationForm } from "../../types";
import { pointConfigurationSchema } from "../../schema";
import { useState } from "react";
import { InputGroup } from "./InputGroup";
export const RothCConfigurationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRunRothCConfiguration = (values: IRothCConfigurationForm) => {
    console.log(values);
  };
  const initialFormValues: IRothCConfigurationForm = {
    start_date: "",
    end_date: "",
    rainfall_data_orig: [],
    rainfall_data_month_avg: [],
    rainfall_data_lastyearcopy: [],
    openPanEvap_data_orig: [],
    openPanEvap_data_month_avg: [],
    openPanEvap_data_lastyearcopy: [],
    avgAirTemp_data_orig: [],
    avgAirTemp_data_month_avg: [],
    avgAirTemp_data_lastyearcopy: [],
  };
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={pointConfigurationSchema}
      onSubmit={(
        values: IRothCConfigurationForm,
        { setSubmitting }: FormikHelpers<IRothCConfigurationForm>
      ) => {
        // submitForm(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Box display="flex">
            <Box my="6" mr="12">
              <FormLabel htmlFor="start_date" color="#718096" fontWeight="700">
                START DATE
              </FormLabel>
              <Field
                as={Input}
                id="start_date"
                name="start_date"
                type="date"
                w="20rem"
                value={values.start_date}
              />
              <Text mt="1" fontSize="sm" color="red">
                <ErrorMessage name="start_date" />
              </Text>
            </Box>
            <Box my="6">
              <FormLabel htmlFor="end_date" color="#718096" fontWeight="700">
                END DATE
              </FormLabel>
              <Field
                as={Input}
                id="end_date"
                name="end_date"
                type="date"
                w="20rem"
                value={values.end_date}
              />
              <Text mt="1" fontSize="sm" color="red">
                <ErrorMessage name="end_date" />
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="2xl">Configure Parameters</Text>
            <Accordion w="75%" mt="4" allowMultiple allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box my="4" flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">
                      rainfall
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <InputGroup name="rainfall" />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box my="4" flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">
                      openPanEvap
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <InputGroup name="openPanEvap" />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box my="4" flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">
                      avgAirTemp
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <InputGroup name="avgAirTemp" />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Button
            my="8"
            isLoading={isLoading}
            colorScheme="blue"
            onClick={() => handleRunRothCConfiguration(values)}
          >
            Run
          </Button>
        </Form>
      )}
    </Formik>
  );
};
