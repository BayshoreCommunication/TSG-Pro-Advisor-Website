"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "https://join.tsgproadvisor.com", label: "Join Us", external: true },
    { href: "/blogs", label: "Blogs" },
    { href: "/events", label: "Events" },
  ];

  return (
    <div className="w-full">
      <header
        className={`transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-black backdrop-blur-md shadow-md z-50"
            : "relative bg-black"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-10 relative">
          {/* LOGO */}
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[110px] h-auto"
            />
          </Link>

          {/* MENU */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-7 lg:gap-x-10 items-center text-white font-bold text-sm sm:text-base lg:text-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`hover:text-primary transition ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

      </header>

      {isSticky && <div className="h-[90px]" />}
    </div>
  );
};

export default Navbar;
