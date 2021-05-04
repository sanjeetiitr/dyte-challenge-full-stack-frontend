import React, { useEffect, useState } from "react";
import { getResponseStatus } from "../../component/ResponseComponent";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { RightLayoutWrapper } from "./styles";

export const RightLayout: React.FC<{}> = () => {
  const [history, setHistoryData] = useLocalStorage<any[]>("history", []);

  useEffect(() => {
    let initData = localStorage.getItem("history");
    if (initData) {
      let parserdData = JSON.parse(initData);
      setHistoryData(parserdData);
    }
  }, []);

  console.log(history, "history");

  return (
    <RightLayoutWrapper>
      <div className="tab-section">History</div>
      <div className="history-card-container">
        {history.map((el, k) => {
          let color = getResponseStatus(el.response.status);
          return (
            <div key={k} className="card-container">
              <div className="first-sec">
                <div style={{ color: color }}>
                  {el.data.method} - {el.response.status}
                </div>
                <div className="titile">{el.title}</div>
              </div>
              <div className="second-sec-url">{el.data.url}</div>
            </div>
          );
        })}
      </div>
    </RightLayoutWrapper>
  );
};
