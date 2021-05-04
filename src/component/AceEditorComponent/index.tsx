import React, { useCallback } from "react";
import { AceEditorComponentWrapper } from "./styles";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import { debounce } from "../../utils";

interface Props {
  mode?: string;
  theme?: string;
  value?: string;
  fontSize?: number;
  showPrintMargin?: boolean;
  showGutter?: boolean;
  highlightActiveLine?: boolean;
  parentClasss?: string;
  editorProps?: object;
  readOnly?: boolean;
  updatedData: (key: string, value: any) => void;
  defaultValue?: string;
}

const Component: React.FC<Props> = ({
  mode = "json",
  theme = "twilight",
  value,
  fontSize = 14,
  showPrintMargin = true,
  showGutter = true,
  highlightActiveLine = true,
  parentClasss = "response_div",
  editorProps = { $blockScrolling: true },
  readOnly,
  updatedData,
  defaultValue = "",
}) => {
  const updateEditorData = useCallback(
    (key, value) => debounce(updatedData(key, value), 3000),
    []
  );

  const handleOnChange = (value: string, e: any) => {
    if (!readOnly) {
      updateEditorData("raw_data", value);
    }
  };

  return (
    <AceEditorComponentWrapper>
      <AceEditor
        mode={mode}
        theme={theme}
        value={value}
        fontSize={fontSize}
        showPrintMargin={showPrintMargin}
        showGutter={showGutter}
        highlightActiveLine={highlightActiveLine}
        name={parentClasss}
        editorProps={editorProps}
        wrapEnabled={true}
        readOnly={readOnly}
        onChange={handleOnChange}
        defaultValue={defaultValue}
      />
    </AceEditorComponentWrapper>
  );
};

const areEqual = (prevProps: any, nextProps: any) => {
  if (JSON.stringify(prevProps.value) !== JSON.stringify(nextProps.value)) {
    return false;
  } else {
    return true;
  }
};

export const AceEditorComponent = React.memo(Component, areEqual);
