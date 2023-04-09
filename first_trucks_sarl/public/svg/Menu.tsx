import React from "react";
import { motion } from "framer-motion";
interface MenuProps{
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {void} handler - Toggle menu state.
   *
   *
   * */
  isOpen: boolean;
  handler: () => void;
}
const Menu:React.FC<MenuProps> = ({isOpen,handler}) => {
  const op = false;
  console.log("opened", isOpen)

 
  return (
    <>
      <span onClick={handler}>
        <svg width="230" height="180" viewBox="0 0 23 18">
        {/* <svg width="230" height="180" viewBox="0 0 23 18" transform="scale(0.2)"> */}
          <Path
            d="M 2 2.5 L 20 2.5"
            vars={{
              open: {
                d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
              },
            }}
          />

          <Path
            d="M 2 9.423 L 20 9.423"
            vars={{
              open: {
                scale: isOpen ? 0 : 1,
              },
            }}
          />
          <Path
            d="M 2 16.346 L 20 16.346"
            vars={{
              open: {
                d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
              },
            }}
          />
        </svg>
      </span>
    </>
  );
};

export default Menu;

interface PathProps {
  /**
   * @param {string} d - Used to draw SVG path.
   * @param {any | undefined} vars - Set this to control animations.
   *
   *
   * */
  d: string;
  vars: any | undefined;
}

const Path: React.FC<PathProps> = ({ d, vars }) => {
  let variant: any = {};
  variant.open = Object.assign(vars.open, {
    transition: {
      duration: 0.35,
      // delay: 1,
    },
  });
  return <motion.path d={d} initial="closed" animate="open" stroke="#1968B7" variants={variant} />;
};
