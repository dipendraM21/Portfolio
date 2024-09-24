"use client";
import { Card, Flex, Text } from "theme-ui";

const ResumeCard = () => {
  return (
    <div className="container">
      <div className="row p-30">
        <div className="col-12">
          <div className="col-4">
            <Card className="resume-card-container">
              <Flex sx={{ justifyContent: "flex-start" }}>
                <Text variant="DMSans28SemiBold125">DipendraSinh Mahida</Text>
              </Flex>
            </Card>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
