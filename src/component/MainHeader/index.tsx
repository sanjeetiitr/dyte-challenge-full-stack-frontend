import React from "react";
import { useTheme } from "../../hooks/useTheme";
import ThemeIcon from "../../svgComponent/themeIcon";
import { MainHeaderComponentWrapper } from "./styles";

export const MainHeaderComponent: React.FC<{}> = () => {
  const { theme, setThemeMode } = useTheme();
  return (
    <MainHeaderComponentWrapper>
      <div className="main-tab-title">Dyte Api Testing Platform 🚀 🚀</div>
      <div className="theme-icon">
        <ThemeIcon
          height="26px"
          width="26px"
          // onClick={() =>
          //   // setThemeMode(theme.name === "light" ? "dark" : "light")
          // }
        />
      </div>
    </MainHeaderComponentWrapper>
  );
};
