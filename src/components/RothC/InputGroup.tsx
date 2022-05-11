import { Box, FormLabel, Input } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
interface IInputGroup {
  name: string;
}
export const InputGroup = ({ name }: IInputGroup) => {
  return (
    <Box>
      <Box my="4">
        <FormLabel htmlFor={`${name}_data_orig`}>
          {`${name}_data_orig`}
        </FormLabel>
        <Field as={Input} name={`${name}_data_orig`} />
        <Box color={"red.400"}>
          <ErrorMessage name={`${name}_data_orig`} />
        </Box>
      </Box>
      <Box my="4">
        <FormLabel htmlFor={`${name}_data_month_avg`}>
          {`${name}_data_month_avg`}
        </FormLabel>
        <Field as={Input} name={`${name}_data_month_avg`} />
        <Box color={"red.400"}>
          <ErrorMessage name={`${name}_data_month_avg`} />
        </Box>
      </Box>
      <Box my="4">
        <FormLabel htmlFor={`${name}_data_lastyearcopy`}>
          {`${name}_data_lastyearcopy`}
        </FormLabel>
        <Field as={Input} name={`${name}_data_lastyearcopy`} />
        <Box color={"red.400"}>
          <ErrorMessage name={`${name}_data_lastyearcopy`} />
        </Box>
      </Box>
    </Box>
  );
};
