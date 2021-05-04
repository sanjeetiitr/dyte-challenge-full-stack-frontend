import React, { useEffect, useState } from "react";
import { getResponseStatus } from "../../component/ResponseComponent";
import { RightLayoutWrapper } from "./styles";
import { useLocalStorage } from "@rehooks/local-storage";

export const RightLayout: React.FC<{}> = () => {
  // const [history, setHistoryData] = useState<any[]>([]);
  const [history] = useLocalStorage("history");

  useEffect(() => {
    let initData = localStorage.getItem("history");
    if (initData) {
      let parserdData = JSON.parse(initData);
      // setHistoryData(parserdData);
    }
  }, [history]);

  console.log(history, "history");

  return (
    <RightLayoutWrapper>
      <div className="tab-section">History</div>
      <div className="history-card-container">
        {/* {history &&
          JSON.parse(history).map((el: any, k: number) => {
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
          })} */}
      </div>
    </RightLayoutWrapper>
  );
};
