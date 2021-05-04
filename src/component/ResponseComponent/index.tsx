import React from "react";
import { ResponseComponentWrapper } from "./styles";
import { ResponseTabComponent } from "../ResponseTabComponent";
import { memorySizeOf } from "../../utils";
import LoaderIcon from "../../svgComponent/loaderIcon";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  responseData?: any;
  loading: boolean;
}

enum StatusCodeColor {
  IR = "#DAF7A6",
  SR = "#4ade80",
  RD = "#FFC300",
  CE = "#F87171",
  SE = "#DC2626",
  NONE = "#FFF",
}

export const getResponseStatus = (status: number): string => {
  if (status >= 100 && status <= 199) {
    return StatusCodeColor.IR;
  } else if (status >= 200 && status <= 299) {
    return StatusCodeColor.SR;
  } else if (status >= 300 && status <= 399) {
    return StatusCodeColor.RD;
  } else if (status >= 400 && status <= 499) {
    return StatusCodeColor.CE;
  } else if (status >= 500 && status <= 599) {
    return StatusCodeColor.SE;
  } else {
    return StatusCodeColor.NONE;
  }
};

const Component: React.FC<Props> = ({ responseData, loading }) => {
  let statusColor = getResponseStatus(responseData?.status);
  let { theme } = useTheme();

  return (
    <ResponseComponentWrapper>
      <div className="section">
        <div className="title">Response</div>
        {!loading && (
          <div
            className={`status-symbol`}
            style={{
              background: `${
                statusColor !== "#FFF" ? statusColor : "transparent"
              }`,
            }}
          ></div>
        )}
        {loading && (
          <div>
            <LoaderIcon />
          </div>
        )}
      </div>
      <div className="section">
        <div className="title">
          Status :{" "}
          <span
            style={{
              color: `${
                statusColor === "#FFF" ? theme.colors.tn : statusColor
              }`,
            }}
          >
            {responseData ? responseData.status : "(waiting to send request)"}
          </span>
        </div>
        <div className="sub-details">
          <div className="d1 tb">
            {" "}
            Duration: {responseData ? responseData.responseDuration : 0}&nbsp;ms
          </div>
          <div className="d2 tb">
            Size:{" "}
            {responseData?.data ? memorySizeOf(responseData.data) : "undefined"}
          </div>
        </div>
      </div>
      {responseData && (
        <div className="section-tab">
          <ResponseTabComponent responseData={responseData} />
        </div>
      )}
    </ResponseComponentWrapper>
  );
};

export const ResponseComponent = React.memo(Component);
