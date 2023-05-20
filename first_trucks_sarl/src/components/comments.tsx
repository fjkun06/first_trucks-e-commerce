"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Heading from "./heading";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { nanoid } from "nanoid";

const Comments = () => {
  const t = useTranslations("comments");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  React.useEffect(() => {}, [isInView]);
  const users = ["left", "right", "left", "right"];

  return (
    <section className="comments">
      <Heading text={t("title")} />
      <div ref={ref}>
        {/* <Comment delay={0} inView={isInView} />
        <Comment delay={0.5} direction="right" inView={isInView} />
        <Comment delay={1} inView={isInView} />
        <Comment delay={1.5} direction="right" inView={isInView} /> */}
        {...users.map((el, i) => <Comment delay={i} direction={el} id={`c${i}`} key={nanoid()} inView={isInView} />)}
      </div>
    </section>
  );
};

interface CommentProps {
  direction?: string;
  inView?: boolean;
  delay: number;
  id: string;
}

export const Comment: React.FC<CommentProps> = ({ direction = "left", inView = false, delay, id }) => {
  const t = useTranslations(`comments.${id}`);

  return (
    <AnimatePresence>
      {inView && (
        <motion.p initial={{ x: direction === "right" ? "-105%" : "105%" }} animate={{ x: "0%" }} transition={{ duration: 0.5, delay: 0.5 * delay }}>
          {/* <motion.p animate={{ x: inView ? "0%" : direction === "right" ? "-105%" : "105%" }} transition={{ duration: 0.5, ease: "easeInOut" }}> */}
          {/* <motion.p animate={{ x: inView ? "0%" : direction === "right" ? "-105%" : "105%" }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 * delay }}> */}
          <span className="user_comment">{t("text")}</span>
          <span className="user_name"> {t("user")}</span>
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default Comments;
