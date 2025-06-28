import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react"; // Optional: any icon

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 btn btn-primary btn-circle shadow-lg animate-fade-in"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
