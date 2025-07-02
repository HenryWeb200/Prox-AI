import Button from "@/components/Button";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 relative rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'url("/starBg.png")',
          }}
        >
          <div
            style={{
              backgroundImage: 'url("/grid-lines.png")',
            }}
            className="absolute [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] inset-0 bg-[rgb(74,32,138)] bg-blend-overlay"
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl tracking-tighter text-center font-medium">
              AI driven SEO for everyone
            </h2>
            <p className="text-center md:text-xl text-lg px-4 text-white/70 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
