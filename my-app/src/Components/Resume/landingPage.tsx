"use client";
import React from "react";
import ResumeCard from "./ResumeCard";
import SocialLinkCard from "./SocialLinkCard";
import ResumeInfo from "./ResumeInfo";
import { useMediaQuery } from "react-responsive";

export default function LandingPage() {
  const isMediumLargeScreen = useMediaQuery({
    query: "(min-width: 1201px) and (max-width: 1399px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(max-width: 1200px)" });
  return (
    <div className="row">
      <div
        className={
          isMediumLargeScreen
            ? "col-xl-5 col-lg-12 col-12 sticky-container"
            : isLargeScreen
            ? "col-xl-12 col-lg-12 col-12 sticky-container"
            : "col-xl-4 col-lg-12 col-12 sticky-container"
        }
      >
        <div className="sticky-card">
          <ResumeCard />
          <SocialLinkCard />
        </div>
      </div>
      <div className="col-xl-8 col-lg-6 col-12">
        <ResumeInfo />
      </div>
    </div>
  );
}
