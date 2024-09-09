"use client";
import { appRoutes } from "@/utils/routes";
import { translation } from "@/utils/translations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Box, Text } from "theme-ui";

const PrimaryTopbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(translation?.ALL);

  const tabData = [
    { name: "All", label: translation?.ALL, route: appRoutes.home },
    { name: "About", label: translation?.ABOUT, route: appRoutes.about },
    { name: "Work", label: translation?.WORK, route: appRoutes.work },
    { name: "Resume", label: translation?.RESUME, route: appRoutes.resume },
  ];

  const handleTabClick = (tabName: string, route?: string) => {
    setActiveTab(tabName);
    if (route) {
      router.push(route);
    }
  };

  return (
    <Box as="div" className="primary-topbar">
      <Box as="div" className="navbar d-flex justify-content-center">
        <div className="nav-item-container">
          <div className={`nav-item-background ${activeTab}`}></div>
          {tabData.map((tab) => (
            <div
              key={tab.name}
              className={`nav-item ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => handleTabClick(tab.name, tab.route)}
            >
              <Text
                variant={`${
                  activeTab === tab.name
                    ? "Primary18Medium125"
                    : "Primary16Medium125"
                }`}
              >
                {tab.label}
              </Text>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default PrimaryTopbar;
