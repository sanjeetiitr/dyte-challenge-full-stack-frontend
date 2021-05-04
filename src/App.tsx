import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { MainLayout } from "./container/MainLayout";
import { useTheme } from "./hooks/useTheme";
import { GlobalStyle } from "./styles/customStyles";

const App: React.FC<{}> = () => {
  const { theme, themeName, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeName]);

  console.log(selectedTheme, themeName);

  return (
    <Suspense fallback={<div> Loading </div>}>
      <BrowserRouter>
        <Switch>
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyle />
            <Route exact path="/" component={MainLayout} />
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
