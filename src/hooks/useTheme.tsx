import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import * as themes from "../theme/schema.json";

interface useThemeType {
  theme: DefaultTheme;
  setThemeMode: (type: string) => void;
  themeLoaded: boolean;
  themeName: string;
}

export const useTheme = (): useThemeType => {
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeName, setThemeName] = useState(themes.data.dark.name);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setThemeMode = (type: string): void => {
    console.log(type, "useTheme");
    let theme = type === "light" ? themes.data.light : themes.data.dark;
    setTheme(theme);
    setThemeName(theme.name);
  };

  console.log(theme, themeLoaded, "theme");

  return { theme, themeLoaded, themeName, setThemeMode };
};
