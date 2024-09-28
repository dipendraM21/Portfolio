"use client";
import React, { useState } from "react";
import { Box, Card, Divider, Flex, Text } from "theme-ui";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { resumeSocialLinkData } from "@/utils/constant";

export default function SocialLinkCard() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Card className="resume-card-container mt-24">
      <Box as="div" className="resume-social-flex-container">
        {resumeSocialLinkData?.map((item, index) => {
          const isHovered = hoverIndex === index;

          return (
            <React.Fragment key={`resume-card-${index}`}>
              <Box
                as="div"
                variant="styles.resumeCardItemContainer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Text>{item?.name}</Text>
                <Box
                  as="div"
                  className={
                    isHovered
                      ? "resume-social-icon-active"
                      : "resume-social-icon"
                  }
                >
                  {isHovered ? (
                    <FiArrowUpRight className="resume-social-active-image" />
                  ) : (
                    <FiArrowRight className="resume-social-image" />
                  )}
                </Box>
              </Box>
              <Divider className="resume-card-divider" />
            </React.Fragment>
          );
        })}
      </Box>
    </Card>
  );
}
