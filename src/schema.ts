import { object, ref, date, number } from "yup";

export const pointConfigurationSchema = object({
  start_date: date()
    .required("Start Date is required")
    .min(new Date(), "Please choose future date"),
  end_date: date()
    .required("End Date is required")
    .min(ref("start_date"), "End date has to be more than start date"),
  pool_1: number().required().min(0).max(100),
  pool_2: number().required().min(0).max(100),
  pool_3: number().required().min(0).max(100),
});
