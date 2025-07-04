"use client";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  useMotionTemplate,
  motion,
  useMotionValue,
  animate,
  ValueAnimationTransition,
} from "framer-motion";

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
  const tabRef = useRef<HTMLDivElement>(null);
  const FeatureTab = (
    props: (typeof tabs)[number] &
      ComponentPropsWithoutRef<"div"> & { selected: boolean }
  ) => {
    const lottieRef = useRef<DotLottieCommonPlayer>(null);

    const XPercentage = useMotionValue(0);
    const YPercentage = useMotionValue(0);

    useEffect(() => {
      if (!tabRef.current || !props.selected) return;

      XPercentage.set(0);
      YPercentage.set(0);
      const { height, width } = tabRef.current?.getBoundingClientRect();
      const circumference = height * 2 + width * 2;

      const times = [
        0,
        width / circumference,
        (width + height) / circumference,
        (width * 2 + height) / circumference,
        1,
      ];

      const options: ValueAnimationTransition = {
        times,
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      };

      animate(XPercentage, [0, 100, 100, 0, 0], options);
      animate(YPercentage, [0, 0, 100, 100, 0], options);
    }, [props.selected]);

    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${XPercentage}% ${YPercentage}%,black,transparent)`;

    const handleTabHover = () => {
      if (lottieRef.current === null) return;
      lottieRef.current.seek(0);
      lottieRef.current.play();
    };
    return (
      <div
        ref={tabRef}
        onMouseEnter={handleTabHover}
        onClick={props.onClick}
        className="border relative xl:flex-1 border-white/15 flex p-2.5 items-center rounded-xl gap-2.5"
      >
        {props.selected && (
          <motion.div
            style={{
              maskImage,
            }}
            className="absolute inset-0 -m-px rounded-xl border border-[#a369ff]"
          ></motion.div>
        )}

        <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
          <DotLottiePlayer
            ref={lottieRef}
            autoplay
            src={props.icon}
            className="h-5 w-5"
          />
        </div>
        <div className="font-medium">{props.title}</div>
        {props.isNew && (
          <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
            new
          </div>
        )}
      </div>
    );
  };

  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const option: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      option
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, tabs[index].backgroundPositionX],
      option
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, tabs[index].backgroundPositionY],
      option
    );
  };
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
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              key={tab.title}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: 'url("/product-image.png")',
            }}
          ></motion.div>
        </div>
        {/* Placeholder for j component usage if intended */}
        {/* <J /> */}
      </div>
    </section>
  );
};

export default Features;
