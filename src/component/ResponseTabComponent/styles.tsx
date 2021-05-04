import styled from "styled-components";

export const ResponseTabComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;

  #response_div {
    width: 100% !important;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }

  .headers-data {
    background: ${({ theme }) => theme.colors.bgDark};
    width: 100%;
    color: ${({ theme }) => theme.colors.tn};
    border-radius: 0.4rem;
    li {
      padding: 6px 0;
    }
    min-height: 100px;
  }

  .type-selection-wrapper {
    padding: 16px;
    display: flex;
    width: inherit;
    align-items: flex-start;
    justify-content: flex-start;
    .tag {
      padding: 8px 12px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.tn};
      margin: 0 20px 0 0px;
      cursor: pointer;
      border-radius: 0.4rem;

      .mid-dot {
        font-weight: 700;
        padding: 0 8px;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.ts};
      }

      &.selected {
        background: ${({ theme }) => theme.colors.bg_d};
        color: ${({ theme }) => theme.colors.ts};
      }
    }
  }
`;
