import { createGlobalStyle } from "styled-components";
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    transition: all 0.25s linear;
  }
`;