"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react"; // ✅ Lucide icons

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="py-4 border-b sticky top-0 z-50 overflow-hidden backdrop-blur border-white/15 md:border-none">
      <div className="container  relative z-50">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          {/* Logo */}
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="invert"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {["Features", "Developers", "Pricing", "Changelog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/70 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button>Join WaitList</Button>

            {/* Mobile Menu Icon (Lucide) */}
            <div
              className="ml-4 cursor-pointer md:hidden z-50"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in Nav Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transition-transform duration-300 ease-in-out z-40
        ${navOpen ? "translate-x-0" : "translate-x-full"}
        w-full md:w-[40vw] p-6`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium mt-20">
          {["Features", "Developers", "Pricing", "Changelog"].map((item) => (
            <a key={item} href="#" className="hover:text-purple-400 transition">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
