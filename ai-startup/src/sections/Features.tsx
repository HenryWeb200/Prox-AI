"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";

const tabs = [
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

import React from "react";

const Features = () => {
  return (
    <section>
      <div className="container">
        <h2>Elevate SEO efforts</h2>
        <p>
          From small startups to large enterprises, our AI driven tool has
          revolutionized the way businesses approach SEO
        </p>
        {tabs.map((tabs) => (
          <div key={tabs.title}>
            <DotLottiePlayer src={tabs.icon} className="size-5" autoplay />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
