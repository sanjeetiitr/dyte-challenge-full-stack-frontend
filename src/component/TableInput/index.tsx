import React, { useCallback, useEffect, useState } from "react";
import AddIcon from "../../svgComponent/addIcon";
import DeleteIcon from "../../svgComponent/deleteIcon";
import { debounce } from "../../utils";
import { InputElement, TableInputWrapper } from "./styles";

export interface CellData {
  cell_1: string | undefined;
  cell_2: string | undefined;
}

interface Props {
  title?: string;
  firstCellplaceholder: string;
  data: any;
  updatedData: (key: string, value: any) => void;
  dataKey: string;
}

const TableInput: React.FC<Props> = ({
  title,
  firstCellplaceholder,
  data,
  dataKey,
  updatedData,
}) => {
  const [cellData, setCellData] = useState<CellData[]>([]);

  useEffect(() => {
    setCellData(data && data.hasOwnProperty(dataKey) ? [...data[dataKey]] : []);
  }, [data]);

  const handleAddItemClick = (): void => {
    let newObj = [
      {
        cell_1: undefined,
        cell_2: undefined,
      },
    ];
    setCellData([...cellData, ...newObj]);
  };

  // let updateMainData = useCallback(
  //   (key, value) => debounce(updatedData(key, value), 500),
  //   []
  // );

  const handleDeleteItem = (key: number): void => {
    let initData = cellData;
    initData.splice(key, 1);
    setCellData([...initData]);
    updatedData(dataKey, initData);
  };

  const handleCellOneUpdate = (value: string, key: number): void => {
    let initData = cellData;
    initData[key]["cell_1"] = value;
    setCellData([...initData]);
    console.log(dataKey, initData);
    updatedData(dataKey, initData);
  };

  const handleCellTwoUpdate = (value: string, key: number): void => {
    let initData = cellData;
    initData[key]["cell_2"] = value;
    setCellData([...initData]);
    updatedData(dataKey, initData);
  };

  console.log(cellData, data, "dasdas");

  let cellCount = cellData.length;

  return (
    <TableInputWrapper>
      {cellCount > 0 && title && <div className="table-title">{title}</div>}
      {cellCount > 0 &&
        cellData.map((el, k) => {
          return (
            <div key={k} className="inp-sec-container">
              <div className="inp-ele1 box-ele">
                <InputElement
                  type="text"
                  value={el.cell_1}
                  placeholder={`${firstCellplaceholder} ${k + 1}`}
                  onChange={(e) => handleCellOneUpdate(e.target.value, k)}
                />
              </div>
              <div className="inp-ele2 box-ele">
                <InputElement
                  type="text"
                  value={el.cell_2}
                  placeholder={`value ${k + 1}`}
                  onChange={(e) => handleCellTwoUpdate(e.target.value, k)}
                />
              </div>
              <div
                className="inp-check box-ele"
                onClick={() => handleDeleteItem(k)}
              >
                <DeleteIcon height="20" width="20" />
              </div>
            </div>
          );
        })}
      <div
        className={`${cellCount ? "" : "all-border-radius"} table-add-btn`}
        onClick={handleAddItemClick}
      >
        + Add New
      </div>
    </TableInputWrapper>
  );
};

const areEqual = (prevProps: any, nextProps: any) => {
  console.log(prevProps, nextProps, "nextProps");
  if (JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)) {
    return true;
  } else if (
    JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data) &&
    (JSON.stringify(prevProps.data.headers) ===
      JSON.stringify(nextProps.data.headers) ||
      JSON.stringify(prevProps.data.parameters) ===
        JSON.stringify(nextProps.data.parameter))
  ) {
    return true;
  } else {
    return false;
  }
};

export const TableInputMemoized = React.memo(TableInput, areEqual);
