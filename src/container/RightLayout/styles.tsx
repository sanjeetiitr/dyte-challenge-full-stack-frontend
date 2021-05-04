import styled from "styled-components";

export const RightLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  // margin-top: 30px;
  padding: 20px;
  width: 30%;

  .tab-section {
    // height: 50px;
    // width: 100%;
    background: ${({ theme }) => theme.colors.bg_dd};
    border-radius: 0.5rem;
    padding: 16px;
    color: ${({ theme }) => theme.colors.tn};
  }

  .history-card-container {
    height: calc(100vh - 160px);
    overflow: scroll;
    border-radius: 0.4rem;
    margin-top: 10px;

    .card-container {
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.bg_dd};
      padding: 16px;
      cursor: pointer;
      border-bottom: 1px dashed ${({ theme }) => theme.colors.bg_d};

      .first-sec {
        display: flex;
        .titile {
          margin-left: 10px;
          color: ${({ theme }) => theme.colors.ts};
        }
      }

      .second-sec-url {
        color: ${({ theme }) => theme.colors.tn};
        font-size: 14px;
        padding-top: 8px;
      }
    }
  }
`;
