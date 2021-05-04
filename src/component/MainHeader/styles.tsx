import styled from "styled-components";

export const MainHeaderComponentWrapper = styled.div`
  display: flex;
  height: 100%;
  // background: ${({ theme }) => theme.colors.bgLight};
  align-items: center;
  justify-content: center;
  width: 100%;

  .main-tab-title {
    padding: 20px 40px 0px 40px;
    font-size: 24px;
    font-weight: 700;
    color: white;
    flex: 3;
  }
  .theme-icon {
    flex: 1;
    display: flex;
    padding-right: 40px;
    align-items: right;
    justify-content: flex-end;

    svg {
      cursor: pointer;
    }
  }
`;
