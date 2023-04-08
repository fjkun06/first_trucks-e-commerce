import useRoute from "@/hooks/useRoute";
import { useTranslations } from "next-intl";
import Union from "../../public/svg/Union";
import React from "react";
import Open from "../../public/svg/Open";
import Close from "../../public/svg/Close";
import { MorphReplace, MorphReplaceResize } from "react-svg-morph";
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
      hello
      <Open /> 
      <br />
      <br />
      {/* implies default.hell */}
      <span>{t("hell")}</span>
      <Union />
      <button type="submit" onClick={toggleState}>
        ToggleState
      </button>
      <div onClick={toggleState}>
        {/* <MorphReplace width={400} height={400}>
          {state ? <Checked key="checked" /> : <CheckBox key="checkbox" />}
        </MorphReplace> */}
        <MorphReplace>
          {state ? <Open /> : <Close />}
        </MorphReplace>
      </div>
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

const Checked = () => {
  return (
    // <svg width="24" fill="#00ea00" height="24" viewBox="0 0 24 24">
    //   <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_11" data-name="Layer 1" viewBox="0 0 79.89 67.26" width="400px" height="400px">
      <path
        d="M48.5,86.5c-15.38,5.67-12.25,12.57,14,21,18.18,22.75,21.37,9.81,20-14,0,0,3.84,21,17.92,14s21.08-17,16.08-26S97,64.85,97,64.85c-13-11.8-23.51-16.2-24.5,7.65Z"
        strokeMiterlimit="10"
        transform="scale(0.5)"
        fill="none"
      />
    </svg>
  );
};

const CheckBox = () => {
  return (
    // <svg width="24" height="24" fill="#666666" viewBox="0 0 24 24">
    //   <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 79.89 67.26" width="400px" height="400px">
      <path d="M55.5,79.5l5,22c8.56,17.79,19.74,26.33,38,10l9-26c4.87-21.65-4.88-25.55-26-15.68C81,54.42,72.14,50.36,55.5,57Z" strokeMiterlimit="10" transform="scale(0.5)" fill="none" />
    </svg>
  );
};

const Open1 = () => {
  return (
    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9997 2.49001H0.820328V0.678052H27.9997V2.49001ZM27.9997 11.5496H0.820328V9.73761H27.9997V11.5496ZM0.820328 20.6091H27.9997V18.7972H0.820328V20.6091Z"
        fill="#1968B7"
      />
    </svg>
  );
};

const Close1 = () => {
  return (
    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.14355L13 12.6436M25 24.1436L13 12.6436M13 12.6436L25 1.14355L1 24.1436" stroke="#1968B7" stroke-width="1.81" />
    </svg>
  );
};
