import React, { useState } from "react";
import { TabContainerData } from "../../container/TabContainer";
import { TableInputMemoized } from "../TableInput";
import { ParamsComponentWrapper } from "./styles";

enum TabTypes {
  parameters = "PARAM",
  headers = "HEADERS",
}

interface Props {
  data: TabContainerData;
  updatedData: (key: string, value: any) => void;
}

const Component: React.FC<Props> = ({ updatedData, data }) => {
  const [selectedTab, setSelectedTab] = useState(TabTypes.parameters);
  return (
    <ParamsComponentWrapper>
      <div className="type-selection-wrapper">
        <div
          className={`tag ${
            selectedTab === TabTypes.parameters ? "selected" : ""
          }`}
          onClick={() => setSelectedTab(TabTypes.parameters)}
        >
          Parameters
          {data.parameter && <span className="mid-dot"> • </span>}
          {data.parameter && Object.keys(data.parameter).length}
        </div>
        <div
          className={`tag ${
            selectedTab === TabTypes.headers ? "selected" : ""
          }`}
          onClick={() => setSelectedTab(TabTypes.headers)}
        >
          Headers
          {data.headers && <span className="mid-dot"> • </span>}
          {data.headers && Object.keys(data.headers).length}
        </div>
      </div>
      {selectedTab === TabTypes.parameters && (
        <TableInputMemoized
          data={data}
          updatedData={updatedData}
          title="Parameter List"
          firstCellplaceholder="parameter"
          dataKey="parameter"
        />
      )}
      {selectedTab === TabTypes.headers && (
        <TableInputMemoized
          data={data}
          updatedData={updatedData}
          title="Header List"
          firstCellplaceholder="header"
          dataKey="headers"
        />
      )}
    </ParamsComponentWrapper>
  );
};

export const ParamsComponent = React.memo(Component);
