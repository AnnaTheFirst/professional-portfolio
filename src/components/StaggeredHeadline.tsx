"use client";

import { motion, useReducedMotion } from "framer-motion";

type StaggeredHeadlineProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
};

export function StaggeredHeadline({
  text,
  className = "",
  as: Tag = "h1",
}: StaggeredHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.08 + index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
