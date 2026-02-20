"use client";
import { useEffect, useState } from "react";

// Custom hook to get the window width
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(() => {
    // Obtener el valor real en el cliente desde el inicio
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1024; // Valor por defecto para SSR (puedes ajustarlo)
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
