import useRoute from "@/hooks/useRoute";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";
export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../../public/locales/messages/${context.locale}.json`)).default,
    },
  };
}
const test = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const t = useTranslations("default");
  const tester = useRoute();

  const testFunction = () => router.push({ pathname, query }, asPath, { locale: "fr" });
  return (
    <div>
      test oui
      <span>{t("test")}</span>
      <button type="button" className="" onClick={() => tester("fr")}>
        tester fr
      </button>
      <button type="button" className="" onClick={() => tester("de")}>
        tester de
      </button>
      <button type="button" className="" onClick={() => tester("en")}>
        tester en
      </button>
    </div>
  );
};

export default test;
