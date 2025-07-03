import logoImage from "@/assets/logo.svg";
import Image from "next/image";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex gap-2 items-center lg:flex-1 lg:justify-start">
            <Image
              src={logoImage.src}
              alt="logo"
              width={30}
              height={30}
              className="invert h-6 w-6"
            />
            <div className="font-medium">AI startup Landing page</div>
          </div>
          <nav className="flex lg:justify-center flex-col lg:flex-row lg:flex-1 gap-5 lg:gap-7">
            <a
              href=""
              className="text-white/70 transition md:text-sm hover:text-white text-sm "
            >
              Features
            </a>
            <a
              href=""
              className="text-white/70 transition md:text-sm hover:text-white text-sm "
            >
              Developers
            </a>
            <a
              href=""
              className="text-white/70 transition md:text-sm hover:text-white text-sm "
            >
              Company
            </a>
            <a
              href=""
              className="text-white/70 transition md:text-sm hover:text-white text-sm "
            >
              Blog
            </a>
            <a
              href=""
              className="text-white/70 transition md:text-sm hover:text-white text-sm "
            >
              ChangeLog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Image
              src={XSocial.src}
              alt="logo"
              width={22}
              height={22}
              className="invert opacity-40 hover:opacity-100 transition"
            />
            <Image
              src={InstaSocial.src}
              alt="logo"
              width={22}
              height={22}
              className="invert opacity-40 hover:opacity-100 transition"
            />
            <Image
              src={YTSocial.src}
              alt="logo"
              width={22}
              height={22}
              className="invert opacity-40 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
