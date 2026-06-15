"use client";

import { motion } from "framer-motion";
import { ReactNode, Children } from "react";

type ScrollStaggerProps = {
  children: ReactNode;
  staggerDelay?: number;
  yOffset?: number;
  className?: string;
  itemClassName?: string;
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
      ease: "easeOut" as const,
    },
  },
});

export default function ScrollStagger({
  children,
  staggerDelay = 0.12,
  yOffset = 30,
  className = "",
  itemClassName = "",
}: ScrollStaggerProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Children.map(children, (child, i) => (
        <motion.div 
          key={i} 
          className={itemClassName} 
          variants={itemVariants(yOffset)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}