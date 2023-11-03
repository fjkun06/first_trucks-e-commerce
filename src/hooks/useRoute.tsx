import { useRouter } from "next/router";
import React from "react";
type Route = "en" | "fr" | "de";

//hooke to switch between languages without changing the whole route
const useRoute = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  //   use this function to switch just the language route instead of the whole thing
  //let locale be the lang u want to switch to
  return (lang: Route) => router.push({ pathname, query }, asPath, { locale: lang });
};

export default useRoute;
