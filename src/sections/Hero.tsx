"use client";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import starBg from "@/assets/stars.png";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen mt-12 lg:mt-16 flex items-center justify-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] -z-10"
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] z-[-20]"></div>
      {/* Planet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-20]">
        <div className="h-64 w-64 md:h-96 md:w-96 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] rounded-full border border-white/20"></div>
      </div>
      {/* Ring 1 */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <div className="h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full">
          <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-5 w-5 border border-white inline-flex rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      <div className="container relative z-10 text-center mt-6">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold bg-white text-transparent bg-clip-text tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))]">
          Prox
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 max-w-xl mx-auto">
          Prox helps you rank higher — fast, smart, and AI-powered
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
