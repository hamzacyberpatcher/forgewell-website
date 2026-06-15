"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  margin?: string; // Add a customizable margin prop
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up", 
  margin = "0px"
}: ScrollRevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: directions[direction].x, y: directions[direction].y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: margin }} // Use the dynamic margin here
      transition={{ duration: 0.6, delay: delay, ease: [0.215, 0.610, 0.355, 1.000] }}
    >
      {children}
    </motion.div>
  );
}