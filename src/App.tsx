import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { blocksTheme, getBlocksCSSVariables } from "./blocks";
import { getAppBasePath, useDarkMode } from "./common";
import { GlobalProvider } from "./context/GlobalContext";
import { RouterConatiner } from "./common/components/RouterConatiner";

const GlobalStyle = createGlobalStyle`
  :root{
    /* Font Family */
      --font-family: 'FK Grotesk Neu';

    /* New blocks theme css variables*/
  
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }
`;

const themeConfig = {
  dark: {
    blocksTheme: blocksTheme.dark,
    scheme: "dark",
  },
  light: { blocksTheme: blocksTheme.light, scheme: "light" },
};

export default function App() {
  const { isDarkMode } = useDarkMode();
  return (
    <ThemeProvider theme={isDarkMode ? themeConfig.dark : themeConfig.light}>
      <GlobalStyle />
      <GlobalProvider>
        <Router basename={getAppBasePath()}>
          <RouterConatiner />
          {/* <Routes> */}
          {/* <RouterConatiner/> */}
          {/* <Route path="/landing" element={<Landing />} />

                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} /> */}
          {/* Redirect to home if route is not found
                // {/* <Route path="*" element={<Navigate to="/" />} />  */}
          {/* </Routes> */}
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  );
}
