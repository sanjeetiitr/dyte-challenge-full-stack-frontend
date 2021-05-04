import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    font-weight: 400;
    font-display: normal;
    src: local("Poppins"),
      url("/fonts/Poppins-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 300;
    font-display: normal;
    src: local("Poppins"),
      url("/fonts/Poppins-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 500;
    font-display: normal;
    src: local("Poppins Medium"), local('Poppins-Medium'),
      url("/fonts/Poppins-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 600;
    font-display: normal;
    src: local("Poppins Semibold"),local("Poppins-Semibold"),
      url("/fonts/Poppins-SemiBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 700;
    font-display: normal;
    src: local("Poppins Bold"),
      url("/fonts/Poppins-Bold.ttf") format("truetype");
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    letter-spacing: 1px;
  }

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}

  body{
    margin : 0;
    padding : 0;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    background-color : ${({ theme }) => theme.colors.bg_ddd}
  }
`;
