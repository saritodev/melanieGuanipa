// here we will create the div to contain the service we offer.
import Image from "next/image";
import journaling from "../../../public/assets/services/journaling.png";

export default function Service() {
  return (
    <div className="relative bg-amber-50 rounded-4xl px-10 shadow-md w-72 h-96 flex flex-col items-center text-primary">
      <div className="relative flex flex-col items-center justify-center h-20 w-full self-center my-12 mb-16">
        <Image
          className="z-20"
          src={journaling}
          alt="journaling"
          width={1000}
          height={1000}
        />
        <div className="absolute -bottom-8 left-0 w-full h-7 bg-primary border-2 rounded-full z-10" />
      </div>
      <p className="text-lg text-center font-medium">
        ¡Empezamos escuchándote! Tu estilo, personalidad y lo que quieres
        expresar.
      </p>
      <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-xl w-48 font-bold cursor-pointer">
        LO QUIERO
      </button>
    </div>
  );
}
