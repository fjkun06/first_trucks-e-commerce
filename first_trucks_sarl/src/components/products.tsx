import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image, { StaticImageData } from "next/image";
import card1m from "../../public/images/c1m.webp";
import card1t from "../../public/images/c1t.webp";
import card1d from "../../public/images/c1d.webp";


const Products = () => {
  const t = useTranslations("products");

  return (
    <section className="products">
      <span className="title">
        <svg viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.9">
            <path d="M0 6.53275L0 1.63929L5.65069 0.344345C5.698 0.333504 5.74716 0.352388 5.77504 0.392112L10.0853 6.53275H0Z" fill="#1968B7" />
            <path d="M0 6.53268L0 11.4261L5.65069 12.7211C5.698 12.7319 5.74716 12.713 5.77504 12.6733L10.0853 6.53268H0Z" fill="#28A2F7" />
          </g>
        </svg>
        {t("title")}
      </span>
      <div className="container">
        <Card />
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </div>
    </section>
  );
};

export const Card = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked card");
  };
  const tablet = useMediaQuery("(width > 800px)");
  const desktop = useMediaQuery("(width > 1200px)");
  const height = desktop ? "30rem" : tablet ? "34.1rem" : "16.971rem";
  console.log(height);

  return (
    // <motion.article onClick={handleClick} >
    <motion.article onClick={handleClick} animate={{ height: isOpen ? `calc(${height} * 2)` : height }}>
      <motion.div></motion.div>
      <CardHeading height={height} src={[card1m,card1t,card1d]} />
      <CardItem toggle={isOpen} height={height} />
    </motion.article>
  );
};

interface CardHeading {
  src: StaticImageData[];
  height: string;
}
interface CardItem {
  toggle: boolean;
  height: string;
}

export const CardItem: React.FC<CardItem> = ({ toggle, height }) => {
  return (
    <motion.article className="card_item" animate={{ height: toggle ? height : "0rem", display: toggle ? "flex" : "none" }}>
      CardItem
    </motion.article>
  );
};

export const CardHeading: React.FC<CardHeading> = ({ height, src }) => {
  return (
    <motion.article className="card_heading"  style={{ height: height }}>
      <motion.span className="card_heading_text">CardHeading</motion.span>
      <div className="card_heading_image">
        <Image src={src[0]} alt="logo" priority quality={100} />
        <Image src={src[1]} alt="logo" priority quality={100} />
        <Image src={src[2]} alt="logo" priority quality={100} />
      </div>
    </motion.article>
  );
};

export default Products;
