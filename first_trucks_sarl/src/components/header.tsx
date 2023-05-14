import React from "react";
import headerMob from "../../public/images/hdr_mob.webp";
import headerTab from "../../public/svg/hdr_tab2.svg";
// import headerTab from "../../public/images/hdr_tab.png";
import headerDesk from "../../public/images/hdr_desk.webp";
// import item1M from "../../public/svg/i1m.svg";
import item1M from "../../public/images/i1m.webp";
import item2M from "../../public/images/i2m.webp";
import item3M from "../../public/images/i3m.webp";
import item4M from "../../public/images/i4m.webp";
// import item4M from "../../public/svg/i4m.svg";
import Image from "next/image";
import Button from "@/stories/Button";
import { motion, Variants } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const Header = () => {
  const tablet = useMediaQuery("(width > 800px)");
  const desktop = useMediaQuery("(width > 800px)");

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
          {/* <motion.span initial={{ x: "22rem" }} animate={{ x: "7.5rem" }} transition={{ delay: 1.5, duration: 0.5 }}> */}
          {/* <motion.span initial={{ x: "12rem" }}  transition={{ delay: 1.5, duration: 0.35 }}> */}
          <motion.span initial={{ x: "25vw" }} animate={{ x: "6vw" }} transition={{ delay: 1.5, duration: 0.5 }}>
          {/* <motion.span initial={{ x: "20vw" }} animate={{ x: "3.5rem" }} transition={{ delay: 1.5, duration: 0.35 }}> */}
            <Image src={item1M} alt="image" />
          </motion.span>

          {/* <motion.span initial={{ x: "20rem" }} animate={{ x: "-6.5rem" }} transition={{ delay: 1, duration: 0.5 }}> */}
          <motion.span initial={{ x: "20.57vw" }} animate={{ x: "-6vw" }} transition={{ delay: 1, duration: 0.5 }}>
          {/* <motion.span initial={{ x: "12rem" }} animate={{ x: "-3.5rem" }} transition={{ delay: 1, duration: 0.35 }}> */}
            <Image src={item2M} alt="image" />
          </motion.span>
          {/* <motion.span initial={{ x: "22rem" }} animate={{ x: "-2rem" }} transition={{ duration: 0.5 }}> */}
          <motion.span initial={{ x: "20.57vw" }} animate={{ x: "-1.7vw" }} transition={{ duration: 0.5 }}>
          {/* <motion.span initial={{ x: "12rem" }} animate={{ x: "-1rem" }} transition={{ duration: 0.35 }}> */}
            <Image src={item3M} alt="image" />
          </motion.span>
          {/* <motion.span initial={{ y: "15.5rem" }} animate={{ y: "-7.45rem" }} style={{ x: "-12rem" }} transition={{ delay: 0.5, duration: 0.5 }}> */}
           <motion.span initial={{ y: "19vw" }} animate={{ y: "-2.48vw" }} style={{ x: "-13.71vw" }} transition={{ delay: 0.5, duration: 0.35 }}>
           {/* <motion.span initial={{ y: "10rem" }} animate={{ y: "-1.45rem" }} style={{ x: "-8rem" }} transition={{ delay: 0.5, duration: 0.35 }}> */}
            <Image src={item4M} alt="image" />
          </motion.span>
        </div>
      </div>
    </header>
  );
};

export default Header;
