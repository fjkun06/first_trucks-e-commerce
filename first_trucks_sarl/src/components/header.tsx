import React from "react";
import headerMob from "../../public/svg/hdr_mob.svg";
import headerTab from "../../public/images/hdr_tab.png";
import headerDesk from "../../public/images/hdr_desk.png";
import item1M from "../../public/svg/i1m.svg";
import item2M from "../../public/svg/i2m.svg";
import item3M from "../../public/svg/i3m.svg";
import item4M from "../../public/svg/i4m.svg";
import Image from "next/image";
import Button from "@/stories/Button";
import { motion, Variants } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="hdr_image">
        <Image src={headerMob} alt="logo" priority quality={100} />
        <Image src={headerTab} alt="logo" priority quality={100} />
        <Image src={headerDesk} alt="logo" priority quality={100} />
      </div>
      <div className="hdr_content">
        <div className="hdr_content_text">
          <span className="">
            Faites confiance à <span> First Trucks Sarl</span> pour des pièces automobiles, lubrifiants moteur, et fluid de qualité.
          </span>
          <Button />
        </div>
        <div className="hdr_content_image">
          <motion.span initial={{ x: "12rem" }} animate={{ x: "3.5rem" }} transition={{ delay: 1.5, duration: 0.35 }}>
            {/* <img src={} alt="image" /> */}
            <Image src={item1M} alt="image" width={56} height={37} />
          </motion.span>

          <motion.span initial={{ x: "12rem" }} animate={{ x: "-3.5rem" }} transition={{ delay: 1, duration: 0.35 }}>
            <Image src={item2M} alt="image" />
          </motion.span>
          <motion.span initial={{ x: "12rem" }} animate={{ x: "-1rem" }} transition={{ duration: 0.35 }}>
            <Image src={item3M} alt="image" />
          </motion.span>
          <motion.span initial={{ y: "10rem" }} animate={{ y: "-1.45rem" }} style={{ x: "-8rem" }} transition={{ delay: 0.5, duration: 0.35 }}>
            <Image src={item4M} alt="image" />
          </motion.span>
        </div>
      </div>
    </header>
  );
};

export default Header;
