"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import melanie1 from "../../../public/assets/melanie1_4k.png";
import { useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowWidth from "@/app/useComponents/useWindowWidth";

export default function Melanie({ centered = false }: { centered?: boolean }) {
  // if the image will need to be centered, we use this custom class for the motion div
  const customTailwindClass = `m-0 p-0 absolute top-12 ${centered ? "left-1/2 -translate-x-100" : "left-0"}`;
  // this is used to set the range for the centered image version
  const customTransformRange = centered ? [58, 0] : [-200, 0];
  const [isMounted, setIsMounted] = useState(false);
  const windowWidth = useWindowWidth();

  // create a motion value that will be updated when windowWidth changes
  const widthValue = useMotionValue(0);

  // update the motion value when windowWidth changes
  useEffect(() => {
    setIsMounted(true);
    widthValue.set(windowWidth);
  }, [windowWidth, widthValue]);

  // map the window width (640-1920px) to a size (500-900px)
  const size = useTransform(
    widthValue,
    [300, 780], // input range: minimum and maximum window width
    customTransformRange, // output range: minimum and maximum div size
  );

  // Calcular el translate solo en cliente para evitar hydration mismatch
  const translateValue = isMounted ? `${size.get()}px` : "-140px";
  return (
    <motion.div className={customTailwindClass}>
      <Image
        src={melanie1}
        alt="melanie posando"
        className="object-contain max-w-4xl h-full"
        style={{ translate: translateValue }}
        quality={100}
      />
    </motion.div>
  );
}
