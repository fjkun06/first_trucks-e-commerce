import Button from "./Button";
import diamondBG from "../../public/images/blurM.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section className="diamond">
        <Button />
        <Image src={diamondBG} alt="diamond background" />

      </section>
      <div>
        <section>1</section>
        <section>2</section>
        <section>3</section>
      </div>
    </footer>
  );
};

export default Footer;
