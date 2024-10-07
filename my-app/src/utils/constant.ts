import { ReactNode } from "react";
import { translation } from "./translations";
import About from "../app/about/page";
import { ResumeContentDataProps } from "@/types/module/resumeContentConstant";

interface ResumeSocialLinkDataProps {
  name: string;
  link: string;
}
interface FooterCopyRightData {
  text: string;
}

export const resumeSocialLinkData: ResumeSocialLinkDataProps[] = [
  {
    name: "Linkedin",
    link: "",
  },
  {
    name: "Twitter",
    link: "",
  },
];

export const footerData: ResumeSocialLinkDataProps[] = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Work",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

export const footerCopyRightData: FooterCopyRightData[] = [
  {
    text: "© All rights reserved",
  },
  {
    text: "Designed by Dipendra  with ❤️",
  },
  {
    text: "Design Portfolio",
  },
];

export const resumeContentData: Array<ResumeContentDataProps> = [
  {
    header: { text: "About Me" },
    about: [
      {
        description:
          "Hello, I'm a UX designer with a passion for creating intuitive and engaging digital experiences. With expertise in user research, prototyping, and user testing.",
      },
    ],
    experience: [
      {
        company: "Digiflux Technologies, Vadodara",
        duration: "Dec 2022 – Present",
        role: "Engineered immersive user interfaces for high-traffic websites like SaudiABC, businessABC, Mstores, and metaverse platforms.",
        achievements: [
          "Engineered immersive user interfaces for high-traffic websites like SaudiABC, businessABC, Mstores, and numerous metaverse platforms, reaching thousands of users. Designed UI/UX solutions that led to a measurable increase in user engagement and retention rates, resulting in a 20% rise in online sales and 30% longer average session durations.",
        ],
      },
    ],
    education: [
      {
        institution: "Netaji Subhas University of Technology",
        duration: "Jan 2021 – June 2025",
        degree: "Bachelor of Technology in Mechanical Engineering",
        description:
          "Gaining a comprehensive understanding of mechanics and their practical applications in the real world.",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Flutter",
      "MongoDB",
      "Figma",
      "Redux",
      "WordPress",
      "Web Design",
    ],

    interests: [
      "Illustration",
      "3D Modelling",
      "Gaming",
      "Driving",
      "Reading",
      "Motion Graphics",
      "Cricket",
      "No Code Tools",
    ],
  },
];
