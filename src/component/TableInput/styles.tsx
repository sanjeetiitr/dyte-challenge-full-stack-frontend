import styled from "styled-components";

export const TableInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: -webkit-fill-available;
  // background: ${({ theme }) => theme.colors.bgLight};
  // border-radius: 0.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  .table-title {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.tn};
    background: ${({ theme }) => theme.colors.bg_dd};
    width: inherit;
    padding: 16px;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }

  .table-add-btn {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tn};
    background: ${({ theme }) => theme.colors.bg_dd};
    width: inherit;
    padding: 16px;
    text-align: center;
    font-weight: 700;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;

    &.all-border-radius {
      border-radius: 0.4rem;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.ts};
    }
  }

  .inp-sec-container {
    display: flex;
    width: 100%;
    // margin: 5px 0;
  }

  .box-ele {
    height: 50px;
    background: ${({ theme }) => theme.colors.bg_dd};
    border-right: 0.5px dashed ${({ theme }) => theme.colors.th};
  }

  .inp-ele1 {
    flex: 5;
  }
  .inp-ele2 {
    flex: 5;
  }
  .inp-del {
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .inp-check {
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    background: ${({ theme }) => theme.colors.bg_dd};
    svg {
      opacity: 0.5;
    }
    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
`;

export const InputElement = styled.input`
  height: 100%;
  width: -webkit-fill-available;
  border: none;
  font-size: 16px;
  display: flex;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.bg_dd};
  color: ${({ theme }) => theme.colors.ts};
  box-shadow: inset 0 0 0 2px ${({ theme }) => "transparent"};

  &:focus-visible {
    outline: none;
  }
  &:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.tn};
  }
  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.tn};
  }
`;
