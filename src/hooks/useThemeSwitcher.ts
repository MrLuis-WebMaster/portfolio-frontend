"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme | undefined, (theme: Theme) => void] => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      let check: Theme;
      if (userPref) {
        check = userPref === "dark" ? "dark" : "light";
      } else {
        check = mediaQuery.matches ? "dark" : "light";
        window.localStorage.setItem("theme", check);
      }
      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setMode(theme);
  };

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, handleThemeChange];
};

export default useThemeSwitcher;
