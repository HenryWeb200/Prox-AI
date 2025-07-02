import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Beyond Expectations
        </h2>
        <p className="text-white/70 md:text-xl max-w-sm md:max-w-md mx-auto text-center text-lg mt-5 tracking-tight">
          Our revolutionary AI SEO tools have transformed our clients strategies
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5">
            {testimonials.map((testimonials) => (
              <div
                className="border flex-none max-w-xs p-6 md:p-10 md:max-w-md border-white/15 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]"
                key={testimonials.name}
              >
                <div className="text-lg md:text-2xl tracking-tight">
                  {testimonials.text}
                </div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="relative before:content-[''] before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:border-white/30 after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light">
                    <Image
                      src={testimonials.avatarImg}
                      alt={`Avatar for ${testimonials.name}`}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="">
                    <div>{testimonials.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonials.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
