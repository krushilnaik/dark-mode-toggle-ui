"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <main className={isDark ? "dark" : ""}>
      <div
        className={classNames(
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
            "relative rounded-full w-60 h-24 p-2 z-40 overflow-clip",
            "bg-slate-300 dark:bg-slate-800"
          )}
        >
          <div
            className={classNames(
              "relative h-full",
              `before:absolute before:rounded-full ${
                isDark ? "before:left-[63%]" : "before:left-0"
              } before:h-full before:origin-center before:scale-[150%] before:-z-30 before:aspect-square before:bg-slate-400/20 before:transition-[left_color] before:duration-500`,
              `after:absolute after:rounded-full ${
                isDark ? "after:left-[63%]" : "after:left-0"
              } after:h-full after:origin-center after:scale-[250%] after:-z-40 after:aspect-square after:bg-slate-400/20 after:transition-[left_color] after:duration-500`
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
