import styled from "styled-components";

export const TabContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  #raw_input_ace {
    height: 200px !important;
    width: 100% !important;
  }

  .url-input-section {
    display: flex;
    color: ${({ theme }) => theme.colors.tn};

    .header {
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1.7;
    }

    .call-type-select {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    .url-input {
      display: flex;
      flex: 3;
      flex-direction: column;
    }

    .call-btn {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .request-body-wrapper {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.tn};
    margin-bottom: 20px;

    .content-title {
      padding: 16px;
      font-size: 14px;
      font-weight: 500;
    }

    .toggle-switch {
      padding: 16px;
      font-size: 14px;
      display: flex;
      align-items: center;
      font-weight: 500;

      .tg-txt {
        margin-left: 10px;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 18px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 10px;
        width: 10px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #2196f3;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
      }

      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    }
  }
`;

export const SendButton = styled.button`
  border: none;
  background: #60a5fa;
  color: ${({ theme }) => theme.colors.ts};
  padding: 10px;
  cursor: pointer;
  height: 56px;
  font-size: 16px;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`;

export const UrlInputElement = styled.input`
  height: 56px;
  width: -webkit-fill-available;
  // border: 1px solid ${({ theme }) => theme.colors.bgDark};
  background: ${({ theme }) => theme.colors.bg_dd};
  color: ${({ theme }) => theme.colors.ts};
  border: none;
  font-size: 16px;
  display: flex;
  padding: 0 1rem;
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

export const MethodSelectElement = styled.select`
  height: 56px;
  width: -webkit-fill-available;
  border: 1px solid ${({ theme }) => theme.colors.bg_dd};
  background: ${({ theme }) => theme.colors.bg_dd};
  color: ${({ theme }) => theme.colors.ts};
  border: none;
  font-size: 16px;
  display: flex;
  padding: 0 1rem;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;

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

export const ContentTypeInput = styled(UrlInputElement)`
  border-radius: 0.4rem;
  &:focus-visible {
    outline: none;
  }
  &:focus {
    box-shadow: none;
  }
`;
