import React from "react";
import Heading from "./heading";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  return (
    <section className="about">
      <Heading text={t("title")} />
      <p>
        {t("p1.start")}
        <span>{t("p1.middle")}</span>
        {t("p1.end")}
      </p>
      <p>{t("p2")}</p>
    </section>
  );
};

export default About;
