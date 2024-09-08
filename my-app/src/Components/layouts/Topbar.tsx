"use client";
import { translation } from "@/utils/translations";
import { useState } from "react";
import { Box, Text } from "theme-ui";

const PrimaryTopbar = () => {
  const [activeTab, setActiveTab] = useState<string>(translation?.ALL);
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <Box as="div" className="primary-topbar">
      <Box
        as="div"
        className="navbar d-flex justify-content-center"
        // sx={{ background: "whitesmoke" }}
      >
        <div className="nav-item-container">
          <div className={`nav-item-background ${activeTab}`}></div>
          <div
            className={`nav-item ${activeTab === "All" ? "active" : ""}`}
            onClick={() => handleTabClick("All")}
          >
            <Text
              variant={`${
                activeTab === "All"
                  ? "Primary18Medium125"
                  : "Primary16Medium125"
              }`}
            >
              {translation?.ALL}
            </Text>
          </div>
          <div
            className={`nav-item ${activeTab === "About" ? "active" : ""}`}
            onClick={() => handleTabClick("About")}
          >
            <Text
              variant={`${
                activeTab === "About"
                  ? "Primary18Medium125"
                  : "Primary16Medium125"
              }`}
            >
              {translation?.ABOUT}
            </Text>
          </div>
          <div
            className={`nav-item ${activeTab === "Work" ? "active" : ""}`}
            onClick={() => handleTabClick("Work")}
          >
            <Text
              variant={`${
                activeTab === "Work"
                  ? "Primary18Medium125"
                  : "Primary16Medium125"
              }`}
            >
              {translation?.WORK}
            </Text>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default PrimaryTopbar;
