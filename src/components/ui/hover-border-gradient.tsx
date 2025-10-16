// "use client";
// import React, { useState, useEffect, useRef } from "react";

// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// export function HoverBorderGradient({
//   children,
//   containerClassName,
//   className,
//   as: Tag = "button",
//   duration = 1,
//   clockwise = true,
//   ...props
// }: React.PropsWithChildren<
//   {
//     as?: React.ElementType;
//     containerClassName?: string;
//     className?: string;
//     duration?: number;
//     clockwise?: boolean;
//   } & React.HTMLAttributes<HTMLElement>
// >) {
//   const [hovered, setHovered] = useState<boolean>(false);
//   const [direction, setDirection] = useState<Direction>("TOP");

//   const rotateDirection = (currentDirection: Direction): Direction => {
//     const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
//     const currentIndex = directions.indexOf(currentDirection);
//     const nextIndex = clockwise
//       ? (currentIndex - 1 + directions.length) % directions.length
//       : (currentIndex + 1) % directions.length;
//     return directions[nextIndex];
//   };

//   const movingMap: Record<Direction, string> = {
//     TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//     LEFT: "radial-gradient(46% 60.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//     BOTTOM:
//       "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//     RIGHT:
//       "radial-gradient(46.2% 61.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
//   };

//   const highlight =
//     "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

//   useEffect(() => {
//     if (!hovered) {
//       const interval = setInterval(() => {
//         setDirection((prevState) => rotateDirection(prevState));
//       }, duration * 1000);
//       return () => clearInterval(interval);
//     }
//   }, [hovered]);
//   return (
//     <Tag
//       onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
//         setHovered(true);
//       }}
//       onMouseLeave={() => setHovered(false)}
//       className={cn(
//         "relative flex rounded-full border  content-center bg-primary/20 hover:bg-primary/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
//         containerClassName
//       )}
//       {...props}
//     >
//       <div
//         className={cn(
//           "w-auto text-white z-10 bg-primary px-4 py-2 rounded-[inherit]",
//           className
//         )}
//       >
//         {children}
//       </div>
//       <motion.div
//         className={cn(
//           "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
//         )}
//         style={{
//           filter: "blur(2px)",
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//         }}
//         initial={{ background: movingMap[direction] }}
//         animate={{
//           background: hovered
//             ? [movingMap[direction], highlight]
//             : movingMap[direction],
//         }}
//         transition={{ ease: "linear", duration: duration ?? 1 }}
//       />
//       <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
//     </Tag>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // 🌈 Updated blue gradient variants
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #38bdf8 0%, rgba(255, 255, 255, 0) 100%)", // sky blue
    LEFT: "radial-gradient(46% 60.1% at 0% 50%, #0ea5e9 0%, rgba(255, 255, 255, 0) 100%)", // blue-500
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #2563eb 0%, rgba(255, 255, 255, 0) 100%)", // indigo-600
    RIGHT:
      "radial-gradient(46.2% 61.2% at 100% 50%, #1e40af 0%, rgba(255, 255, 255, 0) 100%)", // blue-800
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #38bdf8 0%, #0ea5e9 25%, #2563eb 50%, #1e3a8a 75%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-md border content-center bg-primary/20 hover:bg-primary/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-primary px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
    </Tag>
  );
}
