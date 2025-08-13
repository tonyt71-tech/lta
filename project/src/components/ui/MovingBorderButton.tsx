"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const cx = (...cls: Array<string | false | undefined>) =>
  cls.filter(Boolean).join(" ");

type AnyElement = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export function MovingBorderButton({
  as: Component = "a",
  children,
  className,
  containerClassName,
  borderClassName,
  borderRadius = "1.75rem",
  duration = 2200,
  rx = "28%",
  ry = "28%",
  ...other
}: {
  as?: AnyElement;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  borderRadius?: string;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cx(
        "relative inline-block h-16 w-[min(90vw,320px)] p-[1px] overflow-hidden",
        "bg-transparent",
        containerClassName
      )}
      style={{ borderRadius }}
      {...other}
    >
      {/* animated border */}
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx={rx} ry={ry}>
          {/* glowing bead color uses brand accents for this site */}
          <div
            className={cx(
              "h-20 w-20 opacity-80",
              "bg-[radial-gradient(var(--brand-accent)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* button body */}
      <div
        className={cx(
          // high contrast on green background
          "relative flex h-full w-full items-center justify-center",
          "bg-[linear-gradient(90deg,var(--brand-accent),var(--brand-accent2))]",
          "text-green-900 font-extrabold tracking-wide text-xl",
          "border border-yellow-300/60 backdrop-blur-xl shadow-[0_10px_24px_rgba(0,0,0,.25)]",
          "select-none",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorder({
  children,
  duration = 2200,
  rx,
  ry,
  ...other
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const len = pathRef.current?.getTotalLength?.();
    if (!len) return;
    const pxPerMs = len / duration;
    progress.set((time * pxPerMs) % len);
  });

  const x = useTransform(progress, (v) => pathRef.current?.getPointAtLength(v).x ?? 0);
  const y = useTransform(progress, (v) => pathRef.current?.getPointAtLength(v).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...other}
      >
        <rect ref={pathRef} fill="none" width="100%" height="100%" rx={rx} ry={ry} />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        {children}
      </motion.div>
    </>
  );
}
