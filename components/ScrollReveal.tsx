"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  yOffset = 40,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  
  const getInitialCoordinates = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: yOffset };
      case "down":
        return { x: 0, y: -yOffset };
      case "left":
        return { x: yOffset, y: 0 };
      case "right":
        return { x: -yOffset, y: 0 };
      default:
        return { x: 0, y: yOffset };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialCoordinates() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}