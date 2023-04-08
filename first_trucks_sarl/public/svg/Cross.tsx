import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useFlubber } from "@/hooks/use-flubber";

const Cross = () => {
  const cross = "M1 1.14355L13 12.6436M25 24.1436L13 12.6436M13 12.6436L25 1.14355L1 24.1436";
  const union = "M27.9997 2.48994H0.820312V0.677979H27.9997V2.48994ZM27.9997 11.5495H0.820312V9.73754H27.9997V11.5495ZM0.820312 20.6091H27.9997V18.7971H0.820312V20.6091Z";
  const paths = [cross, union];
  const [pathIndex, setPathIndex] = React.useState(0);
  const progress = useMotionValue(pathIndex);
  // const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex !== paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        }
        // setPathIndex(pathIndex + 1);
        // if (pathIndex === paths.length - 1) {
        //   progress.set(0);
        //   setPathIndex(1);
        // } else {
        //   setPathIndex(pathIndex + 1);
        // }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);
  return (
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.05 34">
        <motion.path stroke="#1968B7" d={path} stroke-width="1.81" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path stroke="#1968B7" d={path} stroke-width="1.81" />
      </svg> */}
    </span>
  );
};

export default Cross;
