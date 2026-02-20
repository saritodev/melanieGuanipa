"use client";
import Service from "./service/service";
// function to expose the products available for purchase
export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center text-primary bg-melaniePink">
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-4xl font-bold ">PRODUCTOS DIGITALES</h2>
        <p className="text-4xl text-center font-medium">
          ¡Cumple tus metas y sueños!
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 py-16">
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
}
