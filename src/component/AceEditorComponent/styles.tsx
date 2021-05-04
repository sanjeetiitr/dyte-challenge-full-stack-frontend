import styled from "styled-components";

export const AceEditorComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 10px;
  border-radius: 0.4rem;
  width: 100%;

  #response_div {
    width: 100% !important;
  }

  .section {
    width: 100%;
    display: flex;
    padding: 16px 10px;

    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.bgDark};
    .title {
      font-size: 16px;
      color: white;
      flex: 2;
    }
    .status-symbol {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: green;
    }

    .sub-details {
      display: flex;
      width: 100%;
      flex: 4;
      justify-content: flex-end;
    }

    .d1 {
      margin-right: 16px;
    }
    .tb {
      font-size: 16px;
      color: white;
    }
  }
`;
