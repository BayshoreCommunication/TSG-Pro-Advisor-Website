"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-14">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Column 1 */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={60}
              className=" max-w-32 w-full"
            />

            <p className="text-sm mt-4 max-w-xs leading-relaxed opacity-90">
              At TSG ProAdvisor, our mission is to help you build and scale a
              successful tax and accounting business.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col md:pl-10">
            <h3 className="text-lg font-semibold mb-4 underline">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
              <Link href="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
              <Link href="/about" className="hover:text-primary transition">
                About Us
              </Link>
              <Link href="/blogs" className="hover:text-primary transition">
                Blogs
              </Link>
              <Link href="/services" className="hover:text-primary transition">
                Services
              </Link>
              <Link href="/events" className="hover:text-primary transition">
                Events
              </Link>
              <Link href="/join-us" className="hover:text-primary transition">
                Join Us
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 underline">Contact us</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <Link href="tel:8338747767" className="hover:text-primary">
                  (833) 874-7767
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <Link
                  href="mailto:info@tsgproadvisor.com"
                  className="hover:text-primary"
                >
                  info@tsgproadvisor.com
                </Link>
              </li>
            </ul>

            <div className="flex gap-5 text-xl mt-5">
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="hover:text-primary transition" />
              </Link>

              <Link href="#" aria-label="YouTube">
                <FaYoutube className="hover:text-primary transition" />
              </Link>

              <Link href="#" aria-label="Facebook">
                <FaFacebookF className="hover:text-primary transition" />
              </Link>

              <Link href="#" aria-label="Twitter">
                <FaTwitter className="hover:text-primary transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
          <p>Copyright © 2025 TSG Pro Advisor. All rights reserved</p>
          <p className="mt-2 md:mt-0">
            Design & Development Bayshore Communication
          </p>
        </div>
      </div>
    </footer>
  );
}
