import styled from "styled-components";

export const LeftLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  // margin-top: 30px;
  padding: 20px 20px 0px 20px;
  width: 70%;

  .tab-section {
    display: flex;
    height: 50px;
    width: 100%;
    // background: ${({ theme }) => theme.colors.bgDark};
    border-radius: 0.5rem;
  }

  .add-tab {
    width: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .tab-body {
    background: ${({ theme }) => theme.colors.bg_dd};
    padding: 10px;
  }
`;
