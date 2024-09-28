"use client";

import { Box } from "theme-ui";
import CustomNavbar from "../layouts/Topbar";

export const DefaultPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="background-body">
        <CustomNavbar />
        <div className="custom-container">
          <Box className="custom-scroll">{children}</Box>
        </div>
      </div>
    </>
  );
};
