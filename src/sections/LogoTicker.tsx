"use client";

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const LogoTicker = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

  const [subtitle, setSubtitle] = useState<string | null>(null);

  useEffect(() => {
    // Only runs on the client
    if (isMobile) {
      setSubtitle("Trusted by top startups");
    } else if (isTablet) {
      setSubtitle("Supported by tech accelerators");
    } else {
      setSubtitle("Backed by industry-leading investors");
    }
  }, [isMobile, isTablet]);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
          <div className="flex-1">
            {subtitle && (
              <p className="text-sm text-white/60 mt-1">{subtitle}</p>
            )}
          </div>

          {/* Logo Ticker */}
          <div className="flex-2 flex overflow-hidden  w-full mt-6 md:mt-0 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{
                translateX: 0,
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none pr-14 gap-8 justify-center md:justify-start"
            >
              {[
                acmeLogo,
                apexLogo,
                pulseLogo,
                quantumLogo,
                echoLogo,
                celestialLogo,
                acmeLogo,
                apexLogo,
                pulseLogo,
                quantumLogo,
                echoLogo,
                celestialLogo,
              ].map((logo) => (
                <Image
                  width={90}
                  height={60}
                  key={logo.src}
                  src={logo.src}
                  alt="logo"
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
