import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon library (lucide-react)

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6
            p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600
            shadow-lg shadow-blue-500/40
            hover:shadow-purple-500/50
            animate-float hover:scale-110
            transition-all duration-300 text-white
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

// Floating animation keyframes
// <style jsx>{`

// `}</style>
