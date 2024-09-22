"use client";

import { Box } from "theme-ui";
import CustomNavbar from "../layouts/Topbar";

export const DefaultPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="background-body">
      <CustomNavbar />
      <Box className="custom-scroll mt-95">{children}</Box>
    </div>
  );
};
