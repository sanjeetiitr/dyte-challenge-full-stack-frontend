import axios from "axios";
import React, { useRef, useState } from "react";
import { AceEditorComponent } from "../../component/AceEditorComponent";
import { ParamsComponent } from "../../component/ParamComponent";
import { ResponseComponent } from "../../component/ResponseComponent";
import { CellData, TableInputMemoized } from "../../component/TableInput";
import LoadingBar from "react-top-loading-bar";
import { writeStorage } from "@rehooks/local-storage";

import {
  ContentTypeInput,
  MethodSelectElement,
  SendButton,
  TabContainerWrapper,
  UrlInputElement,
} from "./styles";
import { TabsProperties } from "../LeftLayout";

export interface TabContainerData {
  method?: string;
  url?: string;
  headers?: CellData[];
  parameter?: CellData[];
  form_input?: CellData[];
  is_raw_data?: boolean;
  raw_data?: string;
  content_type?: string;
}

type DataOptions = {
  [key: string]: any;
};

interface Props {
  selectedTabData: TabsProperties;
  updateSelectedTabs: (type: string, value: any) => void;
}

const Component: React.FC<Props> = ({
  selectedTabData,
  updateSelectedTabs,
}) => {
  // const [data, setData] = useState<TabContainerData>(selectedTabData?.data);
  // const [responseData, updateSelectedTabs] = useState<any | undefined>(
  //   undefined
  // );
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const loader = useRef<any>(null);

  const handleMethodUpdate = (e: any): void => {
    updateSelectedTabs("data", {
      ...selectedTabData?.data,
      method: e.target.value,
    });
  };

  const handleUrlChange = (e: any): void => {
    updateSelectedTabs("data", {
      ...selectedTabData?.data,
      url: e.target.value,
    });
  };

  const handleSend = () => {
    setLoading(true);
    loader?.current?.continuousStart();
    let callOpts: Record<string, any> = {
      url: selectedTabData?.data.url,
      method: selectedTabData?.data.method,
    };

    if (selectedTabData?.data.parameter) {
      let params: Record<string, any> = {};
      let values: CellData[] = selectedTabData?.data.parameter;
      values.forEach((el, k) => {
        if (el.cell_1) {
          params[el.cell_1] = el.cell_2;
        }
      });
      callOpts["params"] = params;
    }

    if (selectedTabData?.data.headers) {
      let headers: Record<string, any> = {};
      let values: CellData[] = selectedTabData?.data.headers;
      values.forEach((el, k) => {
        if (el.cell_1) {
          headers[el.cell_1] = el.cell_2;
        }
      });
      callOpts["headers"] = headers;
    }

    if (
      selectedTabData?.data.method !== "GET" &&
      !selectedTabData?.data.is_raw_data &&
      selectedTabData?.data.form_input
    ) {
      let form_input: Record<string, any> = {};
      let values: CellData[] = selectedTabData?.data.form_input;
      values.forEach((el, k) => {
        if (el.cell_1) {
          form_input[el.cell_1] = el.cell_2;
        }
      });
      callOpts["data"] = form_input;
    }

    if (
      selectedTabData?.data.method !== "GET" &&
      selectedTabData?.data.is_raw_data &&
      selectedTabData?.data.raw_data
    ) {
      callOpts["data"] = selectedTabData?.data.raw_data;
    }
    if (
      selectedTabData?.data.method !== "GET" &&
      selectedTabData?.data.content_type
    ) {
      callOpts["headers"]["Content-Type"] = selectedTabData?.data.content_type;
    }

    console.log(callOpts, selectedTabData?.data, "raw_input_ace");
    // http://localhost:4000
    // axios({ ...callOpts }).then((res) => {
    //   updateSelectedTabs(res);
    //   console.log(res);
    // });

    axios.interceptors.request.use((x: any) => {
      x.meta = x.meta || {};
      x.meta.requestStartedAt = new Date().getTime();
      return x;
    });

    axios.interceptors.response.use(
      (x: any) => {
        x.responseDuration =
          new Date().getTime() - x.config.meta.requestStartedAt;
        return x;
      },
      (x: any) => {
        x.responseDuration =
          new Date().getTime() - x.config.meta.requestStartedAt;
        return x;
      }
    );

    axios
      .post("http://localhost:4000", { data: callOpts })
      .then((res: any) => {
        console.log(res, "res");
        if (res.data.isSuccess) {
          updateSelectedTabs("response", {
            ...res.data.data,
            responseDuration: res.responseDuration,
          });
          handleSaveToHistory({
            ...selectedTabData,
            response: {
              ...res.data.data,
              responseDuration: res.responseDuration,
            },
          });
        } else {
          updateSelectedTabs("response", {
            ...res.data.error,
            responseDuration: res.responseDuration,
          });
          handleSaveToHistory({
            ...selectedTabData,
            response: {
              ...res.data.error,
              responseDuration: res.responseDuration,
            },
          });
        }
      })
      .catch((err) => {
        updateSelectedTabs("response", {
          ...err,
          responseDuration: err.responseDuration,
        });
        handleSaveToHistory({
          ...selectedTabData,
          response: { ...err, responseDuration: err.responseDuration },
        });
      })
      .finally(() => {
        loader?.current?.complete();
        setLoading(false);
      });
  };

  const handleSaveToHistory = (data: any) => {
    let initData = localStorage.getItem("history");
    if (initData) {
      let parsedData = JSON.parse(initData);
      parsedData.push(data);
      writeStorage("history", parsedData);
    } else {
      writeStorage("history", [data]);
    }
  };

  const handleDataUpdate = (key: string, value: any) => {
    // setData({ ...data, [key]: value });
    console.log(selectedTabData.data, key, value, "data updae");
    updateSelectedTabs("data", { ...selectedTabData.data, [key]: value });
  };

  const handleContentTypeUpdate = (key: string, value: any) => {
    // setData({ ...data, [key]: value });
    updateSelectedTabs("data", { ...selectedTabData.data, [key]: value });
  };

  console.log(selectedTabData, "tabs @@@ ");

  return (
    <TabContainerWrapper>
      <LoadingBar color="#0095A2  " ref={loader} shadow={true} />
      <div className="url-input-section">
        <div className="call-type-select">
          <div className="header"> Method</div>
          <MethodSelectElement
            value={selectedTabData.data.method}
            onChange={handleMethodUpdate}
          >
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="POST">POST</option>
            <option value="DELETE">DELETE</option>
          </MethodSelectElement>
        </div>
        <div className="url-input">
          <div className="header"> URL</div>
          <UrlInputElement
            type="text"
            placeholder="URL"
            value={selectedTabData.data.url ? selectedTabData.data.url : ""}
            onChange={handleUrlChange}
          />
        </div>
        <div className="call-btn">
          <SendButton onClick={handleSend}>Send</SendButton>
        </div>
      </div>
      {selectedTabData?.data.method !== "GET" && (
        <div className="request-body-wrapper">
          <div className="content-title">Content Type</div>
          <ContentTypeInput
            type="text"
            placeholder="Content Type"
            value={selectedTabData.data.content_type}
            onChange={(e) =>
              handleContentTypeUpdate("content_type", e.target.value)
            }
          />
          <div className="toggle-switch">
            <label className="switch">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  handleDataUpdate("is_raw_data", !checked);
                  setChecked(!checked);
                }}
              />
              <span className="slider round"></span>
            </label>
            <div className="tg-txt">Raw input</div>
          </div>
          {checked && <div className="content-title">Request Body</div>}
          {!checked && <div className="content-title">Request Raw Body</div>}
          {!checked && (
            <TableInputMemoized
              data={selectedTabData.data}
              updatedData={handleDataUpdate}
              firstCellplaceholder="key"
              dataKey="form_input"
            />
          )}
          {checked && (
            <AceEditorComponent
              mode="text"
              updatedData={handleDataUpdate}
              parentClasss="raw_input_ace"
              readOnly={false}
              value={selectedTabData.data.raw_data}
              defaultValue="{}"
            />
          )}
        </div>
      )}
      <ParamsComponent
        data={selectedTabData.data}
        updatedData={handleDataUpdate}
      />
      <ResponseComponent
        responseData={selectedTabData.response}
        loading={loading}
      />
    </TabContainerWrapper>
  );
};

const areEqual = (prevProps: any, nextProps: any) => {
  console.log(
    prevProps.selectedTabData,
    nextProps.selectedTabData,
    prevProps.selectedTabData?.id !== nextProps.selectedTabData?.id,
    "nextProps"
  );
  if (
    JSON.stringify(prevProps.selectedTabData.data) !==
    JSON.stringify(nextProps.selectedTabData.data)
  ) {
    return false;
  } else {
    return true;
  }
};

export const TabContainer = Component;
