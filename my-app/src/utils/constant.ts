import { ReactNode } from "react";

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
