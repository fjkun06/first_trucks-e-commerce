import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { pathname, asPath, query } = router;

  //   use this function to switch just the language route instead of the whole thing
  //let locale be the lang u want to switch to
  const testFunction = () => router.push({ pathname, query }, asPath, { locale: "en" });

  
  // change just the locale and maintain all other route information including href's query
//do this to use translations in the page ...zb. "default" means there is a field named default in the json files
  const t = useTranslations("default");
  return (
    <>
      hello
      <br />
      <br />
      {/* implies default.hell */}
      <span>{t("hell")}</span>

      <button type="button" className="" onClick={testFunction}>test fr</button>
    </>
  );
}
