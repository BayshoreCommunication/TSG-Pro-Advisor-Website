"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
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
    { href: "/join-us", label: "Join Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
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
        <div className="max-w-[1640px] mx-auto px-8 py-4 flex items-center justify-center gap-10 relative">
          {/* Mobile Button */}
          <button
            className="md:hidden absolute left-8 top-1/2 -translate-y-1/2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* LOGO — CENTERED */}
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[110px] h-auto"
            />
          </Link>

          {/* MENU — CENTERED NEXT TO LOGO */}
          <nav className="hidden md:flex gap-10 items-center text-white font-bold text-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-primary transition ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden w-full bg-white px-8 py-4 space-y-4 shadow border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg ${
                  pathname === item.href ? "text-yellow-700" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {isSticky && <div className="h-[90px]" />}
    </div>
  );
};

export default Navbar;
