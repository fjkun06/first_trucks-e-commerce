import React from "react";
import { AnimatePresence, motion, animate, Variants, LayoutGroup } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logoM.png";
import Open from "../../public/svg/Open";
import Union from "../../public/svg/Union";
import Menu from "../../public/svg/Menu";
import Button from "./Button";
interface NavbarProps {
  /**
   * @param {boolean} [opened=false] - Used to check if navbar is open or not.
   *
   *
   * */
  opened: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ opened }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="nav2"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ stiffness: 100, delay: 0.65, exit: {duration: 0.4, delay: 0.2} }}
                exit={{ opacity: 0, transition: { duration: 0.7, delay: 0.25 } }}
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
