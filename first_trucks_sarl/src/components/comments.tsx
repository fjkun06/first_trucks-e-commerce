"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Heading from "./heading";
import { motion, useInView } from "framer-motion";
import { nanoid } from "nanoid";

const Comments = () => {
  const t = useTranslations("comments");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  React.useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  const users = [
    {
      delay: 0,
      direction: "left",
    },
    {
      delay: 0.5,
      direction: "right",
    },
    {
      delay: 1,
      direction: "left",
    },
    {
      delay: 1.5,
      direction: "right",
    },
  ];
  return (
    <section className="comments">
      <Heading text={t("title")} />
      <div ref={ref}>
        {/* <Comment delay={0} inView={isInView} />
        <Comment delay={0.5} direction="right" inView={isInView} />
        <Comment delay={1} inView={isInView} />
        <Comment delay={1.5} direction="right" inView={isInView} /> */}
        {...users.map(({ delay, direction }, i) => <Comment delay={i} direction={direction} id={`c${i}`} key={nanoid()} inView={isInView} />)}
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
    <motion.p animate={{ x: inView ? "0%" : direction === "right" ? "-105%" : "105%" }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 * delay }}>
      <span className="user_comment">{t("text")}</span>
      <span className="user_name"> {t("user")}</span>
    </motion.p>
  );
};

export default Comments;
