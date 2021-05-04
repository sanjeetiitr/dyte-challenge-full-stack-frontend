import React, { useState } from "react";
import { Tab } from "../../component/Tabs";
import AddIcon from "../../svgComponent/addIcon";
import { TabContainer, TabContainerData } from "../TabContainer";
import { LeftLayoutWrapper } from "./styles";

export interface TabsProperties {
  id: number;
  title: string;
  selected: boolean;
  data: TabContainerData;
  response: undefined | any;
}

const tabData = [
  {
    id: 1,
    title: "Untitled",
    selected: true,
    data: {
      method: "GET",
      content_type: "application/json",
    },
    response: undefined,
  },
];

export const LeftLayout: React.FC<{}> = () => {
  const [tabs, setTabs] = useState<TabsProperties[]>([...tabData]);
  const [selectedTab, setSelectedTabs] = useState<number>(0);

  const handleAddTab = (): void => {
    let existingTabs = [...tabs];
    let count = existingTabs.length;
    existingTabs.forEach((el) => {
      el.selected = false;
    });
    let newTabObject = [
      {
        id: count + 1,
        title: "Untitled",
        selected: true,
        data: {
          method: "GET",
          content_type: "application/json",
        },
        response: undefined,
      },
    ];
    setSelectedTabs(count);
    setTabs([...existingTabs, ...newTabObject]);
  };

  const handleCloseTab = (key: number): void => {
    let initTabs = tabs;
    initTabs.splice(key, 1);
    let isAnySelected = initTabs.some((el) => el.selected === true);
    if (!isAnySelected && initTabs.length > 0) {
      initTabs[initTabs.length - 1]["selected"] = true;
      setSelectedTabs(initTabs.length - 1);
    }
    setTabs([...initTabs]);
  };

  const handleTabOnClick = (key: number, data: any) => {
    let initTabs = tabs;
    initTabs.forEach((el, k) => {
      if (k === key) {
        el.selected = true;
      } else {
        el.selected = false;
      }
    });
    console.log(key, "key");
    setSelectedTabs(key);
    setTabs([...initTabs]);
  };

  const handleSelectedTabDataUpdate = (type: string, value: any) => {
    let initTabs = tabs;
    let temp = initTabs[selectedTab];
    initTabs[selectedTab] = { ...temp, [type]: value };
    setTabs([...initTabs]);
  };

  console.log(tabs, selectedTab, "tabs");
  let selectedTabData = tabs[selectedTab];

  return (
    <LeftLayoutWrapper>
      <div className="tab-section">
        {tabs.map((el, k) => {
          return (
            <Tab
              tabData={el}
              closeTab={handleCloseTab}
              onTabClick={handleTabOnClick}
              uniqueKey={k}
            />
          );
        })}
        <div className="add-tab" onClick={handleAddTab}>
          <AddIcon height="16px" width="16px" />
        </div>
      </div>
      {tabs.length > 0 && (
        <div className="tab-body">
          <TabContainer
            selectedTabData={selectedTabData}
            updateSelectedTabs={handleSelectedTabDataUpdate}
          />
        </div>
      )}
    </LeftLayoutWrapper>
  );
};
