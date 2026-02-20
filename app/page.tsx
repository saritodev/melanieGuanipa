"use client";
import { Nav } from "@/app/components/Nav";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Products from "./components/products";
import Cta from "./components/Cta";
export default function Home() {
  return (
    <div className="h-fit w-full bg-linear-to-r from-amber-50 to bg-purple-300">
      <Nav />
      <Hero />
      <SobreMi />
      <Products />
      <Cta />
    </div>
  );
}
