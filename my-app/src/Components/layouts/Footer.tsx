import React from "react";
import { footerCopyRightData, footerData } from "@/utils/constant";
import { Text } from "theme-ui";
import Image from "next/image";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const FooterWeb = () => {
  return (
    <div className="custom-container footer-container">
      <div className="footer-text-area">
        <Image src={""} alt="" />
        {footerData?.map((item, index) => {
          return (
            <Text variant="Montserrat15Medium125" key={index}>
              {item?.name}
            </Text>
          );
        })}
      </div>
      <div className="footer-social-group">
        <PiLinkedinLogo size={30} className="footer-social-icon-linkedin" />
        <RiTwitterXFill size={28} className="footer-social-icon-x" />
        <FaGithub size={28} className="footer-social-icon-github" />
      </div>
      <div className="footer-social-group">
        {footerCopyRightData?.map((item, index) => (
          <Text variant="DMSans16Medium125" key={index}>
            {item?.text}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default FooterWeb;
