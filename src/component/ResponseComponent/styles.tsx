import styled from "styled-components";

export const ResponseComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  margin-top: 16px;
  width: inherit;
  background: ${({ theme }) => theme.colors.bg_dd};

  .section {
    width: -webkit-fill-available;
    display: flex;
    padding: 16px;

    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.bgDark};
    .title {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.tn};
      flex: 2;
    }
    .status-symbol {
      height: 16px;
      width: 16px;
      border-radius: 50%;
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
      font-size: 14px;
      color: ${({ theme }) => theme.colors.tn};
    }
  }

  .section-tab {
    width: -webkit-fill-available;
    display: flex;
    // padding: 16px;

    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.bgDark};
  }
`;
