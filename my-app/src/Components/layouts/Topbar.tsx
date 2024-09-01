"use client";
import { translation } from "@/utils/translations";
import React, { useState } from "react";
import { Box } from "theme-ui";

const PrimaryTopbar = () => {
  const [activeTab, setActiveTab] = useState<string>(translation?.ALL);

  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };

  return (
    <Box as="div" className="background-body">
      <Box as="div" className="navbar d-flex justify-content-center">
        <div className="nav-item-container">
          <div className={`nav-item-background ${activeTab}`}></div>
          <div
            className={`nav-item ${activeTab === "All" ? "active" : ""}`}
            onClick={() => handleTabClick("All")}
          >
            {translation?.ALL}
          </div>
          <div
            className={`nav-item ${activeTab === "About" ? "active" : ""}`}
            onClick={() => handleTabClick("About")}
          >
             {translation?.ABOUT}
          </div>
          <div
            className={`nav-item ${activeTab === "Work" ? "active" : ""}`}
            onClick={() => handleTabClick("Work")}
          >
            {translation?.WORK}
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default PrimaryTopbar;
