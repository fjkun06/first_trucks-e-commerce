import React from "react";
import { AnimatePresence, motion, animate, Variants, LayoutGroup } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logoM.png";
import Menu from "../../public/svg/Menu";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
interface NavbarProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {void} handleClick - Toggle menu state.
   *
   * */
  isOpen: boolean;
  handleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen,handleClick }) => {
  const tester = useMediaQuery("(width > 700px)");

  return (
    <>
      <LayoutGroup>
        {/* <motion.nav layout animate={{ scaleY: isOpen ? 1.5 : 1 }} > */}
        {/* <motion.nav layout animate={{ height: isOpen ? 195 : 66 }} > */}
        <motion.nav layout animate={{ height: isOpen ? "19.5rem" : "6.6rem" }} transition={{ duration: 0.25 }}>
          <motion.div id="nav1">
            {/* <motion.div layout id="nav1" animate={{ height: isOpen ? "9.75rem" : "6.6rem" }}> */}
            <Image src={logo} alt="logo" />
            <Menu isOpen={isOpen} handler={handleClick} />
          </motion.div>
          {tester && <span className="">700px</span>}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="nav2"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ stiffness: 100, delay: 0.65, exit: { duration: 0.4, delay: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.25 } }}
              >
                {/* <motion.div id="nav2" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ stiffness: 100, delay: 0.65 }} exit={{  scaleY: 0 }}> */}
                <motion.span>
                  {/* <motion.span animate={{ opacity: isOpen ? 1 : 0 }} transition={{ delay: 1 }}> */}À Propos de Nous
                  {/* <Menu/> */}
                </motion.span>
                <Button />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </LayoutGroup>

      <motion.div id="modal" />
    </>
  );
};

export default Navbar;
