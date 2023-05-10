import React from "react";
import { AnimatePresence, motion, animate, Variants, LayoutGroup } from "framer-motion";
import Image from "next/image";
import logo from "../../public/svg/logoWtext.svg";
import Menu from "../../public/svg/Menu";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
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

  React.useEffect(() => {
    if (tester) {
      // setState(false);
      set(true);
      console.log("isopen: ", isOpen);
    } else {
      // set(false);
    }
  });


  return (
    <>
      <LayoutGroup>
        {/* <motion.nav layout animate={{ scaleY: isOpen ? 1.5 : 1 }} > */}
        {/* <motion.nav layout animate={{ height: isOpen ? 195 : 66 }} > */}
        <motion.nav layout animate={{ height: isOpen ? (tester ? "8rem" : "19.5rem") : "6.6rem" }}>
          {/* <motion.nav layout animate={{ height: isOpen && !tester ? "19.5rem" : "6.6rem" }}> */}
          <motion.div id="nav1">
            {/* <motion.div layout id="nav1" animate={{ height: isOpen ? "9.75rem" : "6.6rem" }}> */}
            <Image src={logo} alt="logo" />
            <Menu isOpen={isOpen} handler1={handleClick} handler2={handler2} />
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="nav2"
                layout
                // style={{display: tester && isOpen}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ stiffness: 100, delay: 0.15 }}
                // transition={{ stiffness: 100, delay: 0.65, exit: { duration: 0.4, delay: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                // exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.25 } }}
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

      <motion.div onClick={() => set(false)} id="modal" layout animate={{ height: isOpen ?  (tester ? "0rem" : "100vh") : "0rem" }} transition={{ delay: 0.35 }} />
    </>
  );
};

export default Navbar;
