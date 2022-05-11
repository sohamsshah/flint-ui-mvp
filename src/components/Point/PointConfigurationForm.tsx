import { Box, Input, Button, FormLabel, Text } from "@chakra-ui/react";
import { CustomSlider } from "../core";
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from "formik";
import { IPointConfigurationForm } from "../../types";
import { pointConfigurationSchema } from "../../schema";
import { useState } from "react";
export const PointConfigurationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRunPointConfiguration = (values: IPointConfigurationForm) => {
    console.log(values);
  };
  const initialFormValues = {
    start_date: "",
    end_date: "",
    pool_1: 0,
    pool_2: 0,
    pool_3: 0,
  };
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={pointConfigurationSchema}
      onSubmit={(
        values: IPointConfigurationForm,
        { setSubmitting }: FormikHelpers<IPointConfigurationForm>
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
          <Box display="flex">
            <CustomSlider
              w="20rem"
              mr="12"
              name="pool_1"
              title="Pool 1"
              value={values.pool_1}
              setFieldValue={setFieldValue}
            />
            <CustomSlider
              mr="12"
              w="20rem"
              name="pool_2"
              title="Pool 2"
              value={values.pool_2}
              setFieldValue={setFieldValue}
            />
            <CustomSlider
              mr="12"
              w="20rem"
              name="pool_3"
              title="Pool 3"
              value={values.pool_3}
              setFieldValue={setFieldValue}
            />
          </Box>
          <Button
            my="8"
            isLoading={isLoading}
            colorScheme="blue"
            onClick={() => handleRunPointConfiguration(values)}
          >
            Run
          </Button>
        </Form>
      )}
    </Formik>
  );
};
