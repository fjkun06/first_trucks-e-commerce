import React from "react";
import Heading from "./heading";

const About = () => {
  return (
    <section className="about">
      <Heading text="À propos de nous"/>
      <p>
        Chez <span>First Trucks Sarl</span>, nous sommes passionnés d'aider nos clients à assurer le bon fonctionnement et l'efficacité de leurs véhicules et équipements. Avec plus de cinq années d'expérience dans
        l'industrie, nous avons bâti une réputation d'excellence et sommes fiers d'être un fournisseur de confiance d'huiles moteur, de moteurs de camion, de moteurs, de filtres à huile, de filtres à
        air et plus encore.
      </p>
      <p>
        Nous croyons en la fourniture de produits et services exceptionnels, et notre équipe d'experts se consacre à vous aider à trouver les solutions adaptées à vos besoins. De la sélection de la
        bonne huile à l'amélioration des performances de l'équipement, nous sommes là pour vous aider à atteindre vos objectifs.
      </p>
    </section>
  );
};

export default About;
