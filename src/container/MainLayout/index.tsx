import React from "react";
import { MainHeaderComponent } from "../../component/MainHeader";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LeftLayout } from "../LeftLayout";
import { RightLayout } from "../RightLayout/RightLayout";
import { MainLayoutWrapper } from "./styles";

export const MainLayout: React.FC<{}> = () => {
  const [history, setHistory] = useLocalStorage<any[]>("history", []);
  return (
    <React.Fragment>
      <MainHeaderComponent />
      <MainLayoutWrapper>
        <LeftLayout setHistory={setHistory} />
        <RightLayout history={history} />
      </MainLayoutWrapper>
    </React.Fragment>
  );
};
