import { useTranslations } from "next-intl";
import React from "react";
import Heading from "./heading";

const Comments = () => {
  const t = useTranslations("about");

  return (
    <section className="comments">
      <Heading text={t("title")} />
      <div>
        {/* <Comment />
        <Comment />
        <Comment />
        <Comment /> */}
        <p>
          <span className="user_comment">
            J'utilise les huiles moteur et les filtres de chez Future Trucks depuis des années et je n'ai jamais été déçu. Leurs produits m'ont aidé à assurer le bon fonctionnement et l'efficacité de
            mon véhicule, et leurs prix sont très abordable.
          </span>
          <span className="user_name">Mr. NJOLEU Charles</span>
        </p>
        <p>
          <span className="user_comment">
            J'utilise les huiles moteur et les filtres de chez Future Trucks depuis des années et je n'ai jamais été déçu. Leurs produits m'ont aidé à assurer le bon fonctionnement et l'efficacité de
            mon véhicule, et leurs prix sont très abordable.
          </span>
          <span className="user_name">Mr. NJOLEU Charles</span>
        </p>
        <p>
          <span className="user_comment">
            J'utilise les huiles moteur et les filtres de chez Future Trucks depuis des années et je n'ai jamais été déçu. Leurs produits m'ont aidé à assurer le bon fonctionnement et l'efficacité de
            mon véhicule, et leurs prix sont très abordable.
          </span>
          <span className="user_name">Mr. NJOLEU Charles</span>
        </p>
        <p>
          <span className="user_comment">
            J'utilise les huiles moteur et les filtres de chez Future Trucks depuis des années et je n'ai jamais été déçu. Leurs produits m'ont aidé à assurer le bon fonctionnement et l'efficacité de
            mon véhicule, et leurs prix sont très abordable.
          </span>
          <span className="user_name">Mr. NJOLEU Charles</span>
        </p>
      </div>
    </section>
  );
};

export const Comment = () => {
  return (
    <p>
      <span className="user_comment">
        J'utilise les huiles moteur et les filtres de chez Future Trucks depuis des années et je n'ai jamais été déçu. Leurs produits m'ont aidé à assurer le bon fonctionnement et l'efficacité de mon
        véhicule, et leurs prix sont très abordable.
      </span>
      <span className="user_name">Mr. NJOLEU Charles</span>
    </p>
  );
};

export default Comments;
