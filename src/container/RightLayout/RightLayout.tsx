import React from "react";
import { getResponseStatus } from "../../component/ResponseComponent";
import { RightLayoutWrapper } from "./styles";

export const RightLayout: React.FC<{ history: any[] }> = ({ history }) => {
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
        {history.length === 0 && (
          <div className="card-container">
            <div className="second-sec-url">No history records found</div>
          </div>
        )}
      </div>
    </RightLayoutWrapper>
  );
};
