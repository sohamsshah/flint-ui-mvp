import { BoxProps } from "@chakra-ui/react";

export interface ICard extends BoxProps {
  title: string;
  description: string;
  href: string;
}

export interface IPointConfigurationForm {
  start_date: string;
  end_date: string;
  pool_1: number;
  pool_2: number;
  pool_3: number;
}

export interface IRothCConfigurationForm {
  start_date: string;
  end_date: string;
  rainfall_data_orig: Array<number>;
  rainfall_data_month_avg: Array<number>;
  rainfall_data_lastyearcopy: Array<number>;
  openPanEvap_data_orig: Array<number>;
  openPanEvap_data_month_avg: Array<number>;
  openPanEvap_data_lastyearcopy: Array<number>;
  avgAirTemp_data_orig: Array<number>;
  avgAirTemp_data_month_avg: Array<number>;
  avgAirTemp_data_lastyearcopy: Array<number>;
}
