import React from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Image from "next/image";
import logo from "../../public/svg/logoWtext.svg";
import Menu from "../../public/svg/Menu";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import useRoute from "@/hooks/useRoute";
import { useTranslations } from "next-intl";

interface NavbarProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {void} handleClick - Toggle menu state.
   * @param {void} set - Toggle menu state.
   *
   * */
  isOpen: boolean;
  handleClick: () => void;
  set: (x: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick, set }) => {
  const tester = useMediaQuery("(width > 1200px)");
  const [state, setState] = React.useState(false);
  const handler2 = () => setState(!state);
  const { locale } = useRouter();
  const t = useTranslations("about");

  const [loc, setLoc] = React.useState(locale);
  const switchRoute = useRoute();

  React.useEffect(() => {
   
    setLoc(locale);
  }, [locale]);

  return (
    <>
      <LayoutGroup>
        <motion.nav layout animate={{ height: isOpen ? (tester ? "8rem" : "19.5rem") : "6.6rem" }}>
          <motion.div id="nav1">
            <Image src={logo} alt="logo" />
            <Menu isOpen={isOpen} handler1={handleClick} handler2={handler2} />
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div id="nav2" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ stiffness: 100, delay: 0.15 }} exit={{ opacity: 0, transition: { duration: 0.3 } }}>
                {loc === "en" ? (
                  <motion.span className="lang" onClick={() => switchRoute("fr")}>
                    FR <h6 className="tooltip">Switch to French</h6>
                  </motion.span>
                ) : (
                  <motion.span className="lang" onClick={() => switchRoute("en")}>
                    EN<h6 className="tooltip">Switch to English</h6>
                  </motion.span>
                )}
                <motion.span>{t("title")}</motion.span>
                <Button />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </LayoutGroup>

      <motion.div onClick={() => set(false)} id="modal" layout animate={{ height: isOpen ? (tester ? "0rem" : "100vh") : "0rem" }} transition={{ delay: 0.35 }} />
    </>
  );
};

export default Navbar;
