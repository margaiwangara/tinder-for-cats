import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import theme from '@src/theme';
import { normalize } from 'polished';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default App;
