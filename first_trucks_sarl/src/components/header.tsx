import React from "react";
import headerMob from "../../public/images/hdr_mob.png";
import headerTab from "../../public/images/hdr_tab.png";
import headerDesk from "../../public/images/hdr_desk.png";
import item1M from "../../public/images/i1m.png";
import item2M from "../../public/images/i2m.png";
import item3M from "../../public/images/i3m.png";
import item4M from "../../public/images/i4m.png";
import Image from "next/image";
import Button from "@/stories/Button";
import { motion, Variants } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="hdr_image">
        <Image src={headerMob} alt="logo" priority />
        <Image src={headerTab} alt="logo" priority />
        <Image src={headerDesk} alt="logo" priority />
      </div>
      <div className="hdr_content">
        <div>
          <span className="">Faites confiance à First Trust Sarl pour des pièces automobiles, lubrifiants moteur, et fluid de qualité.</span>
          <Button />
        </div>
        <div className="hdr_content_image">
          <span>
            <Image src={item1M} alt="image" />
          </span>
          <span>
            <Image src={item2M} alt="image" />
          </span>
          <span>
            <Image src={item3M} alt="image" />
          </span>
          <span>
            <Image src={item4M} alt="image" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
