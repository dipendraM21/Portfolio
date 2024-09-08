"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Update mouse position
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
      initial={{ scale: 1, x: "-50%", y: "-50%" }}
      animate={{ scale: isHovered ? 1.5 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        className="cursor-dot"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 0.7 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

export default CustomCursor;
