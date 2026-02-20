"use client";
import sobremi from "../../public/assets/sobremi.png";
import melanie2 from "../../public/assets/melanie2.png";
import Image from "next/image";
import useWindowWidth from "../useComponents/useWindowWidth";
import { useEffect, useState } from "react";
import { useMotionValue, useTransform } from "framer-motion";

export default function SobreMi() {
  const [isMounted, setIsMounted] = useState(false);
  const widthValue = useMotionValue(0);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setIsMounted(true);
    widthValue.set(windowWidth);
  }, [widthValue, windowWidth]);

  const size = useTransform(widthValue, [600, 601], [380, 1000]);
  const translateValue = isMounted ? size.get() : 1000;

  return (
    <div className="relative flex justify-start bg-amber-50 pt-75 overflow-hidden">
      <div className="absolute -top-30 -left-30 min-w-[600px] h-full p-0 m-0 z-20">
        <Image
          className="max-sm:brightness-0 transition-all duration-300"
          src={sobremi}
          alt="sobre mi"
          width={600}
          height={600}
        />
      </div>
      <div className="absolute max-xs:hidden top-0 -right-10 p-0 m-0 z-10 ">
        <Image
          src={melanie2}
          alt="melanie 2"
          className="object-contain transition-all duration-500 max-sm:w-[380px] max-w-[1000px]"
          quality={100}
        />
      </div>
      <div className="relative flex flex-col bg-primary md:mx-20 m-auto rounded-t-3xl max-w-11/12 z-20">
        <div className="relative mt-10 z-0">
          <div className="absolute top-8 left-0 m-0 z-10 border-2 border-l-0 rounded-r-full border-white text-3xl font-bold text-transparent p-2 px-10 w-fit scale-100 max-xxs:py-6">
            A CONTENT CREATOR & LOVER
          </div>
          <h2 className="relative z-20 p-10 text-3xl font-bold text-white sm:h-32 max-xs:h-fit">
            A CONTENT CREATOR & LOVER
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:min-w-[480px] max-xs:min-w-32 md:w-2xl px-12 pb-20 text-md text-balance md:text-pretty">
          <p className="sm:h-50 max-xs:h-fit sm:w-96 max-xs:w-fit md:w-full">
            Durante años sentí que hacía muchas cosas, pero
            <span className="font-bold"> sin un orden ni dirección.</span>
            <br />
            <br />
            Con el tiempo entendí que
            <span className="font-bold">
              {" "}
              el cambio empieza cuando tomas conciencia{" "}
            </span>
            de tus hábitos, tus pensamientos y tu relación con el dinero.
            <br />
            <br />
            Hoy creo productos digitales prácticos y accesibles para
            <span className="font-bold"> ayudarte a organizar </span>
            tu vida,
            <span className="font-bold"> mejorar </span>
            tu mentalidad y<span className="font-bold"> avanzar </span>
            hacia tus metas.
          </p>
        </div>
      </div>
    </div>
  );
}
