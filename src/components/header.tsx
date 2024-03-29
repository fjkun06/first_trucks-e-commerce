import headerMob from "../../public/images/header/hdr_mob.webp";
import headerTab from "../../public/images/header/hdr_tab2.webp";
import headerDesk from "../../public/images/header/hdr_desk.webp";
import item1M from "../../public/images/header/i1m.webp";
import item2M from "../../public/images/header/i2m.webp";
import item3M from "../../public/images/header/i3m.webp";
import item4M from "../../public/images/header/i4m.webp";
import Image from "next/image";
import Button from "@/stories/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header");

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
            <span>{t('trust')}</span> <span className="logo">{t('name')}</span> <span>{t('end')}</span>
          </span>
          <Button />
        </div>
        <div className="hdr_content_image">
          <motion.span initial={{ x: "37vw" }} animate={{ x: "6vw" }} transition={{ delay: 1.5, duration: 0.5 }}>
            <Image src={item1M} alt="image" />
          </motion.span>
          <motion.span initial={{ x: "33vw" }} animate={{ x: "-6vw" }} transition={{ delay: 1, duration: 0.5 }}>
            <Image src={item2M} alt="image" />
          </motion.span>
          <motion.span initial={{ x: "25.57vw" }} animate={{ x: "-1.7vw" }} transition={{ duration: 0.5 }}>
            <Image src={item3M} alt="image" />
          </motion.span>
          <motion.span initial={{ y: "44vw" }} animate={{ y: "-2.48vw" }} style={{ x: "-13.71vw" }} transition={{ delay: 0.5, duration: 0.35 }}>
            <Image src={item4M} alt="image" />
          </motion.span>
        </div>
      </div>
    </header>
  );
};

export default Header;
