"use client";
import Melanie from "./images/melanie";
import melanieBg from "../../public/assets/melanieBg.png";
import areYouReady from "../../public/assets/areYouReady.png";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-11/10 w-3xl h-full bg-cover z-0"
        style={{
          backgroundImage: `url(${melanieBg.src})`,
        }}
      ></div>
      <div className="absolute inset-0 z-10">
        <Melanie centered={true} />
      </div>
      <div className="relative flex flex-col justify-between w-full h-full p-20 px-30 gap-10">
        <div className="self-end">
          <Image
            className="object-contain max-w-2xl opacity-0 md:opacity-100 transition-opacity duration-300"
            src={areYouReady.src}
            alt="areYouReady"
            quality={100}
            width={1000}
            height={1000}
          />
        </div>
        <button className="z-20 self-end bg-primary text-white text-3xl font-bold rounded-full w-72 h-24 max-sm:m-auto">
          EMPEZAR
        </button>
        <h2 className="z-20 text-5xl font-bold text-primary w-96 max-sm:text-white transition-colors duration-300">
          ¡CUMPLE TUS METAS Y SUEÑOS!
        </h2>
      </div>
    </div>
  );
}
