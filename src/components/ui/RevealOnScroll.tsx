"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span" | "li";
}

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -5% 0px" }}
      variants={makeVariants(y)}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
