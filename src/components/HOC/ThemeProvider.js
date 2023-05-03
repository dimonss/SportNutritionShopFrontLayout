import React, { useCallback, useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useCallback(() => {
    window.setTheme = (theme) => {
      setTheme(theme !== "dark" && theme !== "light" ? "light" : theme);
      return `switch theme  to ${
        theme !== "dark" && theme !== "light" ? "light" : theme
      }`;
    };
  }, []);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
