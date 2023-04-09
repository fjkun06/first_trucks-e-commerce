import React from "react";
import { AnimatePresence, motion, animate, Variants } from "framer-motion";
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
      <AnimatePresence>
        <motion.nav layout key="1">
          <motion.div layout>
            <Image src={logo} alt="logo" />
            <Menu isOpen={isOpen} handler={handleClick} />
          </motion.div>
          <motion.div layout>
            <motion.span>
              À Propos de Nous
              {/* <Menu/> */}
            </motion.span>
            <Button />
          </motion.div>
        </motion.nav>
        <motion.div id="modal" />
      </AnimatePresence>
    </>
  );
};

export default Navbar;
