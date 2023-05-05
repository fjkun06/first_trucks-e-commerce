import useRoute from "@/hooks/useRoute";
import { useTranslations } from "next-intl";
import headerMob from "../../public/images/hdr_mob.png";
import headerTab from "../../public/images/hdr_tab.png";
import headerDesk from "../../public/images/hdr_desk.png";

import React from "react";
import Image from "next/image";
//6 in every page do this
export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../../public/locales/messages/${context.locale}.json`)).default,
      //                                            or messages/contact/...
    },
  };
}

export default function Home() {
  //   use this function to switch just the language route instead of the whole thing
  //let locale be the lang u want to switch to
  const testFunction = useRoute();

  // change just the locale and maintain all other route information including href's query
  //do this to use translations in the page ...zb. "default" means there is a field named default in the json files
  const t = useTranslations("default");
  const [state, setState] = React.useState<boolean>(true);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <>
    <header>
    <Image src={headerMob} alt="logo" />
    <Image src={headerTab} alt="logo" />
    <Image src={headerDesk} alt="logo" />


    </header>
      {/* implies default.hell */}
      <span>{t("hell")}</span>
      <button type="submit" onClick={toggleState}>
        ToggleState
      </button>
   
      <button type="button" className="" onClick={() => testFunction("fr")}>
        test fr
      </button>
      <button type="button" className="" onClick={() => testFunction("de")}>
        test de
      </button>
      <button type="button" className="" onClick={() => testFunction("en")}>
        test en
      </button>
    </>
  );
}

