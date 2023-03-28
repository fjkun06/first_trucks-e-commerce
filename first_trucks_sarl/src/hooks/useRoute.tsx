import { useRouter } from "next/router";
import React from "react";
type Route = "en" | "fr" | "de";

//hooke to switch between languages without changing the whole route
const useRoute = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  return (lang: Route) => router.push({ pathname, query }, asPath, { locale: lang });
};

export default useRoute;
