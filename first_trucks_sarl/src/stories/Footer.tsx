import Button from "./Button";
import diamondBG from "../../public/images/blurM.png";
import engine from "../../public/images/engine.png";
import logoWText from "../../public/svg/logoWtext.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section className="diamond">
        <Button />
        <Image src={diamondBG} alt="diamond background" />
      </section>
      <section className="footer">
        <div className="footer__menu">
          <section>
            <Image src={logoWText} alt="logo" />
            <Image src={engine} alt="engine" />
          </section>
          <section>
            <div className="footer__contact1">
              <span>Nous sommes à</span>
              <div className="footer__contact__town">
                <span>Yaoundé</span>
                <span>Douala</span>
                <span>Bafoussam</span>
              </div>
            </div>
            <div className="footer__contact2">
              <span>Contactez-nous</span>
              <div className="footer__contact__town">
                <span>+237 671 234 567</span>
                <span>+237 671 234 567</span>
                <span>info.nous@firsttruckssarl.cm</span>
              </div>
            </div>
          </section>
          <section>
            <span>child 1</span>
            <div>child 2</div>
          </section>
        </div>
        <span>2023 FISRT TRUCKS SARL</span>
      </section>
    </footer>
  );
};

export default Footer;
