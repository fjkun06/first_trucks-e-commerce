import About from "@/components/about";
import Comments from "@/components/comments";
import Header from "@/components/header";
import Products from "@/components/products";
import useRoute from "@/hooks/useRoute";
import { useTranslations } from "next-intl";


import React from "react";

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
    <Header/>
    <Products/>
    <About/>
    <Comments/>
      {/* <button type="submit" onClick={toggleState}>
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
      </button> */}
    </>
  );
}
