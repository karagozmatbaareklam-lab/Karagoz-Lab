'use client';
import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, width = "100%", delay = 0.2, duration = 0.8, direction = "up" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (direction === "up") return isVisible ? "translateY(0)" : "translateY(50px)";
    if (direction === "down") return isVisible ? "translateY(0)" : "translateY(-50px)";
    if (direction === "left") return isVisible ? "translateX(0)" : "translateX(50px)";
    if (direction === "right") return isVisible ? "translateX(0)" : "translateX(-50px)";
    return isVisible ? "scale(1)" : "scale(0.95)";
  };

  return (
    <div
      ref={ref}
      style={{
        width,
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
