"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };

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
    <div className="w-full relative">
      {/* ================= MAIN NAVBAR ================= */}
      <header
        className={`transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full bg-black backdrop-blur-md shadow-sm z-50"
            : "relative bg-black"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-8 py-6 flex justify-start gap-12 items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[100px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-12 text-white  font-medium items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-primary transition manrope-font text-lg font-bold   ${
                  pathname === item.href ? "text-primary " : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* ================= MOBILE MENU (Absolute Positioned) ================= */}
          {mobileOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white px-8 py-4 space-y-4 border-t shadow z-40">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block ${
                    pathname === item.href ? "text-yellow-700" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent layout shift */}
      {isSticky && <div className="h-[80px]" />}
    </div>
  );
};

export default Navbar;
