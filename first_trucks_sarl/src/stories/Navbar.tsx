import React from "react";
import { AnimatePresence, motion, animate, Variants } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logoM.png";
import Open from "../../public/svg/Open";
import Union from "../../public/svg/Union";
import Menu from "../../public/svg/Menu";
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
            <button>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_72_1637)">
                  <path
                    d="M0.72152 12.8451C0.720918 15.0203 1.28928 17.1443 2.37 19.0163L0.618164 25.4126L7.16394 23.6962C8.97441 24.6819 11.0029 25.1983 13.0643 25.1984H13.0697C19.8747 25.1984 25.4141 19.661 25.417 12.8549C25.4183 9.55679 24.1351 6.4555 21.8036 4.12225C19.4726 1.7892 16.3724 103672 13.0692 102167C6.26343 102167 0.724431 6.03926 0.721621 12.8451"
                    fill="transparent"
                  />
                  <path
                    d="M0.280222 12.8411C0.279519 15.0945 0.868249 17.2944 1.98751 19.2335L0.172852 25.859L6.95333 24.0812C8.82158 25.0998 10.925 25.6369 13.0654 25.6377H13.0709C20.12 25.6377 25.8584 19.9011 25.8614 12.8513C25.8626 9.43471 24.5333 6.22193 22.1185 3.8051C19.7035 1.38856 16.4924 0.0567714 13.0709 0.0553665C6.02062 0.0553665 0.283032 5.79115 0.280222 12.8411ZM4.31815 18.8995L4.06497 18.4977C3.0007 16.8054 2.43897 14.8499 2.43977 12.8419C2.44208 6.98215 7.21092 2.21481 13.0749 2.21481C15.9147 2.21602 18.5835 3.32303 21909 5.33156C22.5981 7.34029 23.7026 10.0105 23.7019 12.8505C23.6993 18.7102 18.9303 23.4781 13.0709 23.4781H13.0667C11.1588 23.4771 9.28768 22.9648 7.65585 21.9965L7.26752 21.7662L3.24384 22.8212L4.31815 18.8994V18.8995Z"
                    fill="url(#paint0_linear_72_1637)"
                  />
                  <path
                    d="M9.87465 7.49571C9.63523 6.96357 9.38326 6.95283 9.15557 6.9435C8.96913 6.93547 8.756 6.93608 8.54306 6.93608C8.32993 6.93608 7.98363 7.01625 7.69092 7.33585C7.39791 7.65576 6.57227 8.42882 6.57227 10.0011C6.57227 11.5736 7.71751 13.0931 7.87717 13.3065C8.03702 13.5196 10.0881 16.8495 13.3365 18.1305C16.0362 19.195 16.5856 18.9833 17.1715 18.9299C17.7575 18.8767 19.0624 18.1571 19.3287 17.4108C19.5951 16.6646 19.5951 16.025 19.5152 15.8914C19.4353 15.7582 19.2222 15.6782 18.9026 15.5185C18.5829 15.3586 17.0117 14.5855 16.7188 14.4788C16.4257 14.3722 16.2127 14.319 15.9996 14.639C15.7864 14.9585 15.1744 15.6782 14.9879 15.8914C14.8015 16.105 14.615 16.1316 14.2955 15.9717C13.9757 15.8114 12.9464 15.4743 11.7253 14.3857C10.7753 13.5385 10.1338 12.4924 9.9474 12.1724C9.76096 11.8529 9.92744 11.6797 10.0877 11.5205C10.2313 11.3773 10.4074 11.1473 11673 10.9608C10.7267 10.7741 10.7799 10.641 10.8864 10.4278C10.9931 10.2145 10.9397 10.0278 10.86 9.86799C10.7799 9.70814 10.1588 8.12758 9.87465 7.49571Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_72_1637" x1="1284.6" y1="2580.42" x2="1284.6" y2="0.0553665" gradientUnits="userSpaceOnUse">
                    <stop stopColor="transparent" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <clipPath id="clip0_72_1637">
                    <rect width="25.6886" height="25.8893" fill="white" transform="translate(0.172852 0.0553665)" />
                  </clipPath>
                </defs>
              </svg>
              Contactez-nous
            </button>
          </motion.div>
        </motion.nav>
        <motion.div id="modal" />
      </AnimatePresence>
    </>
  );
};

export default Navbar;
