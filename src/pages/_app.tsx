import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import theme from '@src/theme';
import { normalize } from 'polished';
import FavoritesProvider from '@context/FavoritesContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FavoritesProvider>
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

  a {
    text-decoration: none;
  }
`;

export default App;
