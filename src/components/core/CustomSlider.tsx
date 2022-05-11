import { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Box,
  Text,
  FormLabel,
} from "@chakra-ui/react";
export const CustomSlider = ({
  name,
  title,
  value,
  setFieldValue,
  ...props
}: any) => {
  const [sliderValue, setSliderValue] = useState(value);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Box {...props}>
      <FormLabel mb="4" htmlFor={name} color="#718096" fontWeight="700">
        {title}
      </FormLabel>
      <Slider
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        name={name}
        onChange={(value) => {
          setFieldValue(name, value);
          setSliderValue(value);
        }}
        aria-label="slider-ex-1"
        defaultValue={0}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
