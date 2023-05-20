import { useTranslations } from "next-intl";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Button from "@/stories/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const items = ["one", "two", "three"];
// Import Swiper styles
import "swiper/css";
import "swiper/scss/navigation";

// import required modules
import { Navigation } from "swiper";
import { nanoid } from "nanoid";

interface Card {
  direction?: "left" | "right";
  cardNumber?: number;
}
interface CardHeading extends Card {
  height: string;
  handler: () => void;
  heading: string;
}
interface CardItem {
  toggle: boolean;
  height: string;
  cardNumber?: number;
} 

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
      <div className="container">{...new Array(8).fill(8).map((_, i) => <Card key={nanoid()} cardNumber={++i} direction={i % 2 !== 0 ? "left" : "right"} />)}</div>
    </section>
  );
};

export const Card: React.FC<Card> = ({ direction, cardNumber = 1 }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const t = useTranslations("products");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const tablet = useMediaQuery("(width > 800px)");
  const desktop = useMediaQuery("(width > 1500px)");
  const lg = useMediaQuery("(width > 1200px)");
  const height = lg ? "30rem" : tablet ? "31.5rem" : "16.971rem";
  return desktop ? (
    <motion.article layout animate={{ height: isOpen ? `51.28rem` : height }} onMouseLeave={() => setIsOpen(false)}>
      <CardHeading cardNumber={cardNumber} direction={direction} height={height} handler={handleClick} heading={t(`item${cardNumber}.name`)} />
      <CardItem toggle={isOpen} height={height} cardNumber={cardNumber} />
    </motion.article>
  ) : (
    <motion.article layout animate={{ height: isOpen ? `calc(${height} * 2.254)` : height }} onMouseLeave={() => setIsOpen(false)}>
      <CardHeading cardNumber={cardNumber} direction={direction} height={height} handler={handleClick} heading={t(`item${cardNumber}.name`)} />
      <SwipeCardItem toggle={isOpen} height={height} cardNumber={cardNumber} />
    </motion.article>
  );
};

export const SwipeCardItem: React.FC<CardItem> = ({ toggle, height, cardNumber = 1 }) => {
  const t = useTranslations(`products.item${cardNumber}.items`);
  return (
    <AnimatePresence>
      {toggle && (
        <motion.section
          layout
          transition={{ duration: 0.5, ease: "linear" }}
          animate={{ height: `calc(${height} * 1.2544` }}
          initial={{ height: `0rem` }}
          exit={{ height: `0rem`, transition: { duration: 0.5, ease: "easeOut" } }}
        >
          {cardNumber === undefined ? (
            <Swiper effect="fade" speed={1000} navigation={true} modules={[Navigation]} className="mySwiper">
              Item out of stock.
            </Swiper>
          ) : (
            <Swiper effect="fade" speed={1000} navigation={true} modules={[Navigation]} className="mySwiper">
              {items.map((item) => (
                <SwiperSlide key={nanoid()}>
                  <motion.article className="swipe_card_item" initial={{ height: `calc(${height} * 1.2544` }}>
                    <Image src={require(`../../public/images/products/cards/${cardNumber}/default.webp`)} alt="logo" priority quality={100} />
                    <div>
                      <span className="card_item_heading">{t(`${item}.title`)}</span>
                      <span className="card_item_text">{t(`${item}.desc`)}</span>
                      <Button item={t(`${item}.title`)} />
                    </div>
                  </motion.article>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export const CardItem: React.FC<CardItem> = ({ toggle, cardNumber = 1 }) => {
  const t = useTranslations(`products.item${cardNumber}.items`);

  return (
    <AnimatePresence>
      {toggle && (
        <motion.section
          layout
          className="card_item_container"
          transition={{ duration: 0.5, ease: "linear" }}
          animate={{ height: `21.28rem` }}
          initial={{ height: `0rem` }}
          exit={{ height: `0rem`, transition: { duration: 2, ease: "linear" } }}
        >
          {cardNumber === undefined ? (
            <Swiper effect="fade" speed={1000} navigation={true} modules={[Navigation]} className="mySwiper">
              Item out of stock.
            </Swiper>
          ) : (
            items.map((item) => (
              <article className="card_item" key={nanoid()}>
                <Image src={require(`../../public/images/products/cards/${cardNumber}/default.webp`)} alt="logo" priority quality={100} />
                <div>
                  <span className="card_item_heading">{t(`${item}.title`)}</span>
                  <span className="card_item_text">{t(`${item}.desc`)}</span>
                  <Button />
                </div>
              </article>
            ))
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export const CardHeading: React.FC<CardHeading> = ({ height, cardNumber = 1, handler, direction = "left", heading }) => {
  const sizes = ["mobile", "tablet", "desktop"];
  return (
    <motion.article className="card_heading" style={{ height: height }} onClick={handler}>
      <motion.span className={direction === "right" ? "card_heading_text right" : "card_heading_text"}>{heading}</motion.span>
      <div className="card_heading_image">
        <span></span>

        {sizes.map((size) => (
          <Image key={nanoid()} src={require(`../../public/images/products/cards/${cardNumber}/${size}.webp`)} alt="logo" priority quality={100} />
          // <Image key={nanoid()} src={require(`../../public/images/products/cards/${cardNumber}/${size}.png`)} alt="logo" priority quality={100} />
        ))}
      </div>
    </motion.article>
  );
};

export default Products;
