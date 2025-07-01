"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-4 border-b backdrop-blur md:backdrop-blur-none border-white/15 md:border-none">
        <div className="container relative">
          <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl backdrop-blur-sm max-w-2xl mx-auto">
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
              {["Features", "Developers", "Pricing", "Changelog"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/70 hover:text-white transition"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Buttons + Mobile Icon */}
            <div className="flex items-center gap-4">
              <Button>Join WaitList</Button>

              <div
                className="ml-4 cursor-pointer md:hidden"
                onClick={() => setNavOpen(true)}
              >
                <Menu className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay when mobile nav is open */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Mobile Slide-in Nav Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[40vw] bg-black text-white transition-transform duration-300 ease-in-out z-[1000] ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-6">
          <X
            className="h-6 w-6 text-white cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-6 text-lg font-medium px-6">
          {["Features", "Developers", "Pricing", "Changelog"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-purple-400 transition"
              onClick={() => setNavOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
