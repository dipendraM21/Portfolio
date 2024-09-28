import React from "react";
import ResumeCard from "./ResumeCard";
import SocialLinkCard from "./SocialLinkCard";
import { div } from "framer-motion/client";

export default function LandingPage() {
  return (
      <div className="row">
        <div className="col-12">
          <div className="col-xl-4 col-12">
            <ResumeCard />
            <SocialLinkCard />
          </div>
          <div className="col-xl-4 col-12"></div>
        </div>
      </div>
  );
}
