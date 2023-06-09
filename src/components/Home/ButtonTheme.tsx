import React from "react";
import { SunIcon, MoonIcon } from "./Icons";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const ButtonTheme = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ease
${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
`}
    >
      {mode === "light" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </button>
  );
};

export default ButtonTheme;
