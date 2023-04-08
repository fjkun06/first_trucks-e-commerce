import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logoM.png";
import Open from "../../public/svg/Open";
import Union from "../../public/svg/Union";
const Navbar = () => {
  return (
    <motion.nav>
      <Image src={logo} alt="logo" />
      <Open/>
    </motion.nav>
  );
};

export default Navbar;
