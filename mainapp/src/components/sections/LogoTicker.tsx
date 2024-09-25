"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [
    acmeLogo,
    apexLogo,
    pulseLogo,
    echoLogo,
    celestialLogo,
    quantumLogo,
  ];

  return (
    <div className="section marquee py-20 md:py-24">
      <div className="container">
        {/* Create an overflow-hidden box to contain the logos */}
        <div className="flex-1 overflow-hidden relative">
          {/* Animated div that moves continuously */}
          <motion.div
            initial={{ translateX: "0%" }}
            animate={{ translateX: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex w-full gap-14 whitespace-nowrap"
          >
            {/* Duplicate the logo set to create the infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                src={logo.src}
                key={index}
                className="h-6 w-auto inline-block"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
