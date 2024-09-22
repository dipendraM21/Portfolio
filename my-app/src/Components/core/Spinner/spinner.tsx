"use client";
import { SpinnerProps } from "@/types/module/commonModule";
import { FC } from "react";
import { Spinner as BaseSpinner, Box } from "theme-ui";

const Spinner: FC<SpinnerProps> = ({ visible, size = 50 }) => {
  if (!visible) return null;

  return (
    <Box className="spinner">
      <BaseSpinner size={size} />
    </Box>
  );
};

export default Spinner;
