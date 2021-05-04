import React, { useState } from "react";
import { AceEditorComponent } from "../AceEditorComponent";
import { ResponseTabComponentWrapper } from "./styles";

enum TabTypes {
  json = "json",
  headers = "headers",
  raw = "text",
}

interface Props {
  responseData: any;
}

const Component: React.FC<Props> = ({ responseData }) => {
  const [selectedTab, setSelectedTab] = useState(TabTypes.json);
  return (
    <ResponseTabComponentWrapper>
      <div className="type-selection-wrapper">
        <div
          className={`tag ${selectedTab === TabTypes.json ? "selected" : ""}`}
          onClick={() => setSelectedTab(TabTypes.json)}
        >
          JSON
        </div>
        <div
          className={`tag ${selectedTab === TabTypes.raw ? "selected" : ""}`}
          onClick={() => setSelectedTab(TabTypes.raw)}
        >
          Raw
        </div>
        <div
          className={`tag ${
            selectedTab === TabTypes.headers ? "selected" : ""
          }`}
          onClick={() => setSelectedTab(TabTypes.headers)}
        >
          Headers
          {responseData?.headers && <span className="mid-dot"> • </span>}
          {responseData?.headers && Object.keys(responseData?.headers).length}
        </div>
      </div>
      {selectedTab !== TabTypes.headers && (
        <AceEditorComponent
          mode={selectedTab}
          value={JSON.stringify(responseData?.data, null, "\t")}
          readOnly={true}
          updatedData={() =>
            console.log("no chnages to update !!! README TYPE !!!")
          }
        />
      )}
      {selectedTab === TabTypes.headers && (
        <div className={"headers-data"}>
          <ul>
            {responseData?.headers &&
              Object.keys(responseData?.headers).map((el, k) => {
                return (
                  <li>
                    {el} → {responseData?.headers[el]}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </ResponseTabComponentWrapper>
  );
};

export const ResponseTabComponent = React.memo(Component);
