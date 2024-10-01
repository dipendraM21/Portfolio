import React from "react";
import ResumeCard from "./ResumeCard";
import SocialLinkCard from "./SocialLinkCard";
import ResumeInfo from "./ResumeInfo";

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-4 col-12 sticky-container">
          <div className="sticky-card">
            <ResumeCard />
            <SocialLinkCard />
          </div>
        </div>
        <div className="col-xl-8 col-12">
          <ResumeInfo />
        </div>
      </div>
    </div>
  );
}
