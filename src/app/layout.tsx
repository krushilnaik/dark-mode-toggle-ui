import classNames from "classnames";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          // layout
          "grid place-content-center min-h-screen text-2xl",
          // light mode
          "bg-slate-200 text-slate-950",
          // dark mode
          "dark:bg-slate-950 dark:text-slate-200"
        )}
      >
        {children}
      </body>
    </html>
  );
}
