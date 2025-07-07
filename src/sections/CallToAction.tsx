"use client";
import Button from "@/components/Button";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { RefObject, useRef, useEffect } from "react";
import starBg from "@/assets/stars.png";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current?.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: starBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="border border-white/15 py-24 relative rounded-xl overflow-hidden group"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starBg.src})`,
          }}
        >
          <div
            style={{
              backgroundImage: 'url("/grid-lines.png")',
            }}
            className="absolute group-hover:opacity-0 transition duration-700 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] inset-0 bg-[rgb(74,32,138)] bg-blend-overlay"
          ></div>
          <motion.div
            style={{
              maskImage,
              backgroundImage: 'url("/grid-lines.png")',
            }}
            className="absolute opacity-0 group-hover:opacity-100 transition duration-700 inset-0 bg-[rgb(74,32,138)] bg-blend-overlay"
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-lg mx-auto tracking-tighter text-center font-medium">
              AI driven SEO for everyone
            </h2>
            <p className="text-center max-w-sm mx-auto md:text-xl text-lg px-4 text-white/70 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity
            </p>
            <div className="flex justify-center mt-8">-
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
