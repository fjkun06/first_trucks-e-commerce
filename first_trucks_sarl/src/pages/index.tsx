import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../../public/locales/messages/${context.locale}.json`)).default,
    },
  };
}

export default function Home() {
  const t = useTranslations("default");
  return (
    <>
      hello
      <br />
      <br />
      <span>{t("hell")}</span>
    </>
  );
}
