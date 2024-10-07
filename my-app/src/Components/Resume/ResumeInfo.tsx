"use client";
import { resumeContentData } from "@/utils/constant";
import { translation } from "@/utils/translations";
import { it } from "node:test";
import React from "react";
import { Box, Text } from "theme-ui";

export default function ResumeInfo() {
  return (
    <Box as="div" className="resume-content-container">
      {resumeContentData.map((item, index) => {
        return (
          <React.Fragment key={`about-us-${index}`}>
            <Box className="about-us-container">
              <Text variant="DMSans28SemiBold2">{translation?.ABOUT_ME}</Text>
              {item.about.map((item, index) => {
                return (
                  <Text
                    variant="DMSans26Medium3"
                    key={`about-us-text-${index}-${index}`}
                  >
                    {item.description}
                  </Text>
                );
              })}
            </Box>
            <Box className="about-us-container">
              <Text variant="DMSans28SemiBold2">{translation?.EXPERIENCE}</Text>
              {item?.experience?.map((item, index) => (
                <React.Fragment key={index}>
                  <Text variant="DMSans26SemiBold3">{item.company}</Text>
                  <Text variant="DMSans20Demi12em">{item.duration}</Text>
                  <Text variant="DMSans26Medium3">{item.achievements}</Text>
                </React.Fragment>
              ))}
            </Box>

            <Box className="about-us-container">
              <Text variant="DMSans28SemiBold2">{translation?.EDUCATION}</Text>
              {item?.education?.map((item, index) => (
                <React.Fragment key={index}>
                  <Text variant="DMSans26SemiBold3">{item?.institution}</Text>
                  <Text variant="DMSans20Demi12em">{item?.duration}</Text>
                  <Text variant="DMSans26Medium3">{item?.description}</Text>
                </React.Fragment>
              ))}
            </Box>

            <Box className="about-us-container">
              <Text variant="DMSans28SemiBold2">{translation?.SKILLS}</Text>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 0.4fr)",
                  gap: "20px",
                  width: "100%",
                }}
              >
                {item?.skills?.map((skill, index) => (
                  <Text key={index} variant="DMSans26Medium3">
                    {skill}
                  </Text>
                ))}
              </Box>
            </Box>
          </React.Fragment>
        );
      })}
    </Box>
  );
}
