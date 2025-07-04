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
          <div className="flex-2 overflow-hidden w-full mt-6 md:mt-0 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-8 justify-center md:justify-start">
              <Image
                src={acmeLogo}
                width={90}
                height={24}
                alt="Acme Logo"
                className="h-6 w-auto"
              />
              <Image
                src={pulseLogo}
                width={90}
                height={24}
                alt="Pulse Logo"
                className="h-6 w-auto"
              />
              <Image
                src={celestialLogo}
                width={90}
                height={24}
                alt="Celestial Logo"
                className="h-6 w-auto"
              />
              <Image
                src={apexLogo}
                width={90}
                height={24}
                alt="Apex Logo"
                className="h-6 w-auto"
              />
              <Image
                src={quantumLogo}
                width={90}
                height={24}
                alt="Quantum Logo"
                className="h-6 w-auto"
              />
              <Image
                src={echoLogo}
                width={90}
                height={24}
                alt="Echo Logo"
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
