import React from "react";
import { MainHeaderComponent } from "../../component/MainHeader";
import { LeftLayout } from "../LeftLayout";
import { RightLayout } from "../RightLayout/RightLayout";
import { MainLayoutWrapper } from "./styles";

export const MainLayout: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <MainHeaderComponent />
      <MainLayoutWrapper>
        <LeftLayout />
        <RightLayout />
      </MainLayoutWrapper>
    </React.Fragment>
  );
};
