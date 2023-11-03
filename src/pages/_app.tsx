import "react-toastify/dist/ReactToastify.css";
import "@/styles/main.scss";
import type { AppProps } from "next/app";

//for internationalisation do this
//verify all comments in this page and index.tsx
//use useRoute hook to switch between languages
//0 npm i next-intl --force
//1
import { NextIntlProvider } from "next-intl";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //2
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}

//3 insert this in nextconfig.js i18n: {
//   locales: ['en', 'fr', 'de'],
//   defaultLocale: 'en',
//   localeDetection: false,
// },
//4 create public/locale/messages
//5 either create subfolders (zb. contact/en.json) each with a en.json, fr.json n de.json(multi page app) or just put them here (one page app)
