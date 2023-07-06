"use client";

import classNames from "classnames";
import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      aria-label="dark mode toggle"
      onClick={() => setIsDark(!isDark)}
      className={classNames(
        "relative rounded-full overflow-clip w-60 h-24 p-2",
        "dark:bg-slate-800"
      )}
    >
      <div className="absolute bg-purple-500/20 w-full h-full top-0 left-0"></div>
      <div className="rounded-full aspect-square bg-indigo-700 h-full"></div>
    </button>
  );
}

export default ThemeToggle;
