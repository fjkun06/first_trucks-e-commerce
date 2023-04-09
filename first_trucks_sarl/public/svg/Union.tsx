import React from "react";
import { interpolate } from "flubber";
import { motion } from "framer-motion";

const Union = () => {
  const paths2 = [
    "M55.5,79.5l5,22c8.56,17.79,19.74,26.33,38,10l9-26c4.87-21.65-4.88-25.55-26-15.68C81,54.42,72.14,50.36,55.5,57Z",
    "M48.5,86.5c-15.38,5.67-12.25,12.57,14,21,18.18,22.75,21.37,9.81,20-14,0,0,3.84,21,17.92,14s21.08-17,16.08-26S97,64.85,97,64.85c-13-11.8-23.51-16.2-24.5,7.65Z",
  ];
  const paths21 = ["M0.52,1 L52.52,33 M0.52,33 L52.52,1", "M0.52,1 L52.52,33 M0.52,33 L52.52,1"];
  //   const paths21 = ["M0.52,1 L52.52,33 M0.52,33 L52.52,1",
  //   "M0.02,1 L53.02,1 M53.02,17 L0.02,17 M0.02,33 L53.02,33"
  // ];
  const paths22 = [
    "M1513.58,716.64a6.74,6.74,0,0,0-.38-.87,112.67,112.67,0,0,0-26.54-34c-24.8-21.47-52.33-26-64-27.18l-.8,0H1290.81a7.88,7.88,0,0,0-7.88,7.7l-4.38,183.44a7.88,7.88,0,0,1-7.88,7.7h0a7.88,7.88,0,0,0-7.88,8.12l0,.77a7.88,7.88,0,0,0,8.12,7.64l134.87-4.16.89-.08c55.45-7.63,99.28-41.65,110.9-86.16C1524.43,753.37,1518.45,730,1513.58,716.64Zm-63.69,64c-12.59,28.36-40.18,38.2-47.41,40.42a8.07,8.07,0,0,1-2.18.35l-57.22.85a7.88,7.88,0,0,1-8-8.42l7.62-112.32a7.89,7.89,0,0,1,7.86-7.36h54.83a7.88,7.88,0,0,1,2.1.29c6.48,1.78,154-49.81,163.87-21C1578.68,694.76,1452.58,774.57,1449.89,780.63Z",
    "M50,50 L250,50 L150,250 Z",
  ];
  const cross = "M1 1.14355L13 12.6436M25 24.1436L13 12.6436M13 12.6436L25 1.14355L1 24.1436";
  const union = "M27.9997 2.48994H0.820312V0.677979H27.9997V2.48994ZM27.9997 11.5495H0.820312V9.73754H27.9997V11.5495ZM0.820312 20.6091H27.9997V18.7971H0.820312V20.6091Z";
  const paths = [cross, union];
  const result = interpolate(...paths21);
  const ref = React.useRef(null);
  // Animate the d attribute of the path
  const animatePath = (d: string) => {
    if (ref.current) {
      const elt = ref.current as SVGPathElement;
      elt.setAttribute("d", d);
    }
  };

  // const d = result(t);
  // animatePath(d);

  React.useEffect(() => {
    // Create animation using requestAnimationFrame
    const animate = (start: number) => {
      const now = Date.now();
      const elapsed = now - start;
      const duration = 1000; // 1 second
      const t = elapsed / duration;
      // console.log("I am t: ", t);
      const d = result(t);
      animatePath(d);
      if (t < 1) {
        requestAnimationFrame(() => animate(start));
      }
    };

    // Start the animation
    animate(Date.now());
    return () => {};
  }, []);

  return (
    <span>
      <svg width="400px" height="400px" viewBox="0 0 166.28 97.41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path id="path" d="" fill="none" strokeMiterlimit="10" stroke="#1968B7" strokeWidth="1.81" ref={ref} transition={{ duration: 0.8, ease: "easeInOut" }} />
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 53.05 34">
        <motion.path stroke="#1968B7" d="" strokeWidth="1.81" strokeLinecap="round" strokeLinejoin="round" />
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 53.05 34">
        <motion.path d="" fill="none" stroke="yellow" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </span>
  );
};

export default Union;
