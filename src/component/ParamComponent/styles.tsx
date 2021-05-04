import styled from "styled-components";

export const ParamsComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px 0;

  .mid-dot {
    font-weight: 700;
    padding: 0 8px;
  }

  .type-selection-wrapper {
    padding: 10px;
    display: flex;
    font-weight: 500;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    .tag {
      padding: 8px 12px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.tn};
      margin: 0 10px 0 0;
      cursor: pointer;
      border-radius: 0.4rem;

      &:hover {
        color: ${({ theme }) => theme.colors.ts};
      }

      &.selected {
        background: ${({ theme }) => theme.colors.th};
        color: ${({ theme }) => theme.colors.ts};
      }
    }
  }
`;
