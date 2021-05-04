import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 120px;
  background: ${({ theme }) => theme.colors.tab_uns};
  opacity: 0.8;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-right: 2px solid ${({ theme }) => theme.colors.bg_dd};

  &.selected-tab {
    background: ${({ theme }) => theme.colors.bg_dd};
    opacity: 1;
  }

  .tab-title {
    font-size: 10px;
    padding: 8px 12px;
    letter-spacing: none;
    width: 60px;
    color: ${({ theme }) => theme.colors.tn};
  }
  .close-icon {
    background: ${({ theme }) => theme.colors.bg_d};
    border-radius: 50%;
    height: 12px;
    width: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover {
      transform: scale(1.3);
      background: ${({ theme }) => theme.colors.bg_ddd};
    }
  }
`;
