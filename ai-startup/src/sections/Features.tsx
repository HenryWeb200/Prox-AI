"use client";
import React, { useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

// Simplified DotLottiePlayer component

// Define the Tab type to improve type safety
interface Tab {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
}

const tabs: Tab[] = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const Features = () => {
  useEffect(() => {
    console.log("Features component rendered"); // Debug log
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate SEO efforts
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From startups to enterprises, our AI tool is redefining SEO
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border xl:flex-1 border-white/15 flex p-2.5 items-center rounded-xl gap-2.5"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: 'url("/product-image.png")',
            }}
          ></div>
        </div>
        {/* Placeholder for j component usage if intended */}
        {/* <J /> */}
      </div>
    </section>
  );
};

export default Features;
