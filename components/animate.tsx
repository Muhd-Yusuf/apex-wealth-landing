"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
  distance?: number;
  once?: boolean;
  as?: ElementType;
  style?: CSSProperties;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  once = true,
  as: Tag = "div",
  style,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const translateY =
    direction === "up" ? distance : direction === "down" ? -distance : 0;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${translateY}px)`,
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0)",
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
