"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollStaggerProps = {
  children: ReactNode;
  staggerDelay?: number;
  yOffset?: number;
};

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

const itemVariants = (yOffset: number) => ({
  hidden: {
    opacity: 0,
    y: yOffset,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

export default function ScrollStagger({
  children,
  staggerDelay = 0.12,
  yOffset = 30,
}: ScrollStaggerProps) {
  return (
    <motion.div
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVariants(yOffset)}>
              {child}
            </motion.div>
          ))
        : (
          <motion.div variants={itemVariants(yOffset)}>
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}