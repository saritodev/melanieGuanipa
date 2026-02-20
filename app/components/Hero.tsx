"use client";
import Melanie from "./images/melanie";

export default function Hero() {
  return (
    <div className={`flex py-60 items-center relative overflow-hidden`}>
      <div
        className="absolute top-0 left-80 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/bigM.png')`,
          scale: `1.27`,
          overflow: `hidden`,
        }}
      />
      <Melanie /> {/* Melanie image that will be animated */}
      <div className="text-right min-w-full h-96 z-10">
        <div className="max-w-2xl px-23 max-xs:px-5 md:px-10 justify-self-start sm:justify-self-end overflow-auto mt-45">
          <div className="flex">
            <h1 className="text-5xl font-bold text-balance text-start text-white lg:text-primary transition-all duration-300">
              Inspirandote a vivir una vida más consciente...
            </h1>
          </div>
          <button className="bg-primary text-white text-3xl text-bold px-4 py-2 rounded-full mt-10">
            Empezar
          </button>
        </div>
      </div>
    </div>
  );
}
