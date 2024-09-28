"use client";
import { translation } from "@/utils/translations";
import { Box, Card, Flex, Text } from "theme-ui";
import { ThemeButton } from "../core/Button/ThemeButton";

const ResumeCard = () => {
  return (
    <Card className="resume-card-container">
      <Box as="div" className="resume-card-flex-container">
        <Text variant="DMSans28SemiBold125">{translation?.FULL_NAME}</Text>
        <Text variant="DMSans26Medium125">{translation?.UI_UX_DESIGNER}</Text>
      </Box> 
       <Box as="div" className="resume-card-flex-container">
        <Text variant="DMSans22SemiBold125">{translation?.EMAIL_ID}</Text>
        <Text variant="DMSans22Medium125">www.uibyjames.com</Text>
      </Box>
      <ThemeButton variant="downLoadResumeBtn" text={translation?.DOWNLOAD_RESUME} />
    </Card>
  );
};

export default ResumeCard;
