'use client'
import { useState, useEffect } from 'react';

const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-12 h-12 bg-gray-900 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-white z-50 group"
          aria-label="Scroll to top"
        >
          <div className="flex items-center justify-center h-full">
            <svg
              className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

export default ButtonTop;