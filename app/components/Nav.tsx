"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.webp";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

const links = {
  Home: {
    label: "Home",
    href: "/",
  },
  Planner: {
    label: "Planificador",
    href: "/planner",
  },
  Journaling: {
    label: "Journaling",
    href: "/journaling",
  },
  SocialMedia: {
    label: "Mis redes",
    href: "/social-media",
  },
  ContactMe: {
    label: "Contáctame",
    href: "/contact-me",
  },
};

export const DesktopNav = () => {
  return (
    <ul className="flex gap-10 text-md items-center">
      {Object.values(links).map(
        (link: { label: string; href: string }) =>
          link.label !== "Home" &&
          link.label !== "Contáctame" && (
            <li
              className="px-3 py-2 hover:cursor-pointer hover:bg-amber-100 rounded-full min-w-32 text-center transition-all duration-200"
              key={link.label}
            >
              <Link key={link.label} href={link.href}>
                {link.label.toUpperCase()}
              </Link>
            </li>
          ),
      )}
      <Link
        href={links.ContactMe.href}
        className="text-lg bg-[#EFAAD9] rounded-full px-5 py-3 font-extrabold text-white hover:bg-[#EFAAD9]/90 hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        key={links.ContactMe.label}
      >
        {links.ContactMe.label.toUpperCase()}
      </Link>
    </ul>
  );
};
export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className="fixed top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 min-h-fit p-5 text-black bg-amber-50 rounded-b-2xl text-center">
          <ul className="flex flex-col gap-4">
            {Object.values(links).map(
              (link: { label: string; href: string }) =>
                link.label !== "Home" &&
                link.label !== "Contáctame" && (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label.toUpperCase()}</Link>
                  </li>
                ),
            )}
            <Link
              href={links.ContactMe.href}
              className="text-lg bg-[#EFAAD9] rounded-full px-5 py-3 font-extrabold text-white hover:bg-[#EFAAD9]/90 hover:scale-105 transition-all duration-300 hover:cursor-pointer"
              key={links.ContactMe.label}
            >
              {links.ContactMe.label.toUpperCase()}
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};
export const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center p-2 px-10 bg-amber-50 text-black w-full lg:w-11/12 lg:left-1/2 lg:-translate-x-1/2 rounded-2xl h-30 min-w-fit fixed top-0 z-50 mt-4">
      <div className="flex min-w-60">
        <Link href={links.Home.href}>
          <Image
            className="hover:cursor-pointer"
            src={logo}
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
};
