"use client";

import classNames from "classnames";
import { useState } from "react";
import cloudSVG from "../../public/cloud.svg";
import starsSVG from "../../public/stars.svg";
import Image from "next/image";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <main className={isDark ? "dark" : ""}>
      <div
        className={classNames(
          // layout
          "grid place-content-center min-h-screen text-2xl transition-colors duration-500",
          // light mode
          "bg-slate-200 text-slate-950",
          // dark mode
          "dark:bg-slate-950 dark:text-slate-200"
        )}
      >
        <button
          aria-label="dark mode toggle"
          onClick={() => setIsDark(!isDark)}
          className={classNames(
            // buttom layout
            "relative rounded-full w-60 h-24 p-2 z-40 overflow-clip shadow-[inset_0_0_15px_black] transition-colors duration-300",
            // sky color
            "bg-blue-400 dark:bg-[#101034]"
          )}
        >
          <div
            className={`h-[200%] bg-white/10 absolute w-full transition-[bottom] duration-500 ${
              isDark ? "-bottom-full" : "bottom-0"
            } left-0 flex flex-col`}
          >
            {/* stars shown on dark mode */}
            <div className="relative h-1/2 w-full grid place-content-center">
              <Image
                src={starsSVG}
                width={1600}
                height={1200}
                alt=""
                className="w-3/5 absolute bottom-0 left-0"
              />
            </div>
            {/* clouds shown on light mode */}
            <div className="h-1/2 w-full relative -z-30">
              <Image
                src={cloudSVG}
                width={1600}
                height={1200}
                alt=""
                className="w-2/4 absolute bottom-0 right-0"
              />
              <Image
                src={cloudSVG}
                width={1600}
                height={1200}
                alt=""
                className="w-ful absolute -bottom-4 -right-1/4 opacity-50 rotate-6"
              />
            </div>
          </div>

          {/* sun/moon */}
          <div
            className={classNames(
              "relative h-full",
              `before:absolute before:rounded-full ${
                isDark ? "before:left-[63%]" : "before:left-0"
              } before:h-full before:origin-center before:scale-[150%] before:-z-30 before:aspect-square before:bg-white/20 before:transition-[left_color] before:duration-500`,
              `after:absolute after:rounded-full ${
                isDark ? "after:left-[63%]" : "after:left-0"
              } after:h-full after:origin-center after:scale-[250%] after:-z-40 after:aspect-square after:bg-white/20 after:transition-[left_color] after:duration-500`
            )}
          >
            <div
              className={`absolute h-full ${
                isDark ? "left-[63%]" : "left-0"
              } aspect-square bg-amber-300 dark:bg-slate-400 rounded-full transition-[left_color] duration-500`}
            ></div>
          </div>
        </button>
      </div>
    </main>
  );
}
