"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeTransitionOverlay() {
  const { resolvedTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousTheme, setPreviousTheme] = useState<string | undefined>();
  const [overlayColor, setOverlayColor] = useState<string>("");

  useEffect(() => {
    if (resolvedTheme && resolvedTheme !== previousTheme && previousTheme !== undefined) {
      // Set overlay color based on the new theme
      setOverlayColor(resolvedTheme === "dark" ? "#0A0A0A" : "#F5F3EF");
      
      // Theme has changed, trigger animation
      setIsAnimating(true);
      
      // Reset animation after it completes
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Match animation duration

      return () => clearTimeout(timer);
    }
    
    // Update previous theme
    if (resolvedTheme) {
      setPreviousTheme(resolvedTheme);
    }
  }, [resolvedTheme, previousTheme]);

  // Don't animate on initial mount
  if (previousTheme === undefined) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: overlayColor,
            transformOrigin: "top left",
          }}
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 2,
            opacity: 1,
          }}
          exit={{
            scale: 2,
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
    </AnimatePresence>
  );
}

