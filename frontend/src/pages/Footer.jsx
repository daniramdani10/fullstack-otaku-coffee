import { FacebookLogo, InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 p-5 bg-neutral text-white h-auto text-xs footer">
      <div className="grid gap-4 footer-title">
        <div>Privacy Policy</div>
        <div>Terms and Service</div>
        <div>Pricing</div>
        <div>Location</div>
      </div>
      <div className=" footer-title">
        <div className="flex gap-1 items-center">
          Follow us
          <InstagramLogo size={18} color="#e0e0e0" weight="bold" />
          <FacebookLogo size={18} weight="bold" />
          <TiktokLogo size={18} weight="bold" />
        </div>
        &copy; {new Date().getFullYear()} Otaku Coffee and Roastery. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
