import React from "react";
import CloseIcon from "../../svgComponent/closeIcon";
import { TabWrapper } from "./styles";

interface Props {
  uniqueKey: number;
  closeTab: (key: number) => void;
  tabData: any;
  onTabClick: (key: number, data: any) => void;
}

const Component: React.FC<Props> = ({
  uniqueKey,
  closeTab,
  tabData,
  onTabClick,
}) => {
  return (
    <TabWrapper
      key={uniqueKey}
      className={tabData.selected ? "selected-tab" : ""}
      onClick={() => onTabClick(uniqueKey, tabData)}
    >
      <div className="tab-title">Untitled {uniqueKey + 1}</div>
      <div
        className="close-icon"
        onClick={(e) => {
          e.stopPropagation();
          closeTab(uniqueKey);
        }}
      >
        <CloseIcon height="6px" width="6px" />
      </div>
    </TabWrapper>
  );
};

export const Tab = React.memo(Component);
