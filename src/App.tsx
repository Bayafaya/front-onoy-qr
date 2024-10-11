import { useRoutes } from "react-router";
import routes from "./routes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useTheme from "./hooks/useTheme";
import createTheme from "./theme";
import { Suspense, useEffect } from "react";
import { THEMES } from "./context/constants";
import createEmotionCache from "./utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CircularProgress } from "@mui/material";
const clientSideEmotionCache = createEmotionCache();

const loaderStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  zIndex: 9999,
};

function App({ emotionCache = clientSideEmotionCache }) {
  const content = useRoutes(routes);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setTheme(THEMES.DEFAULT);
  }, [setTheme]);
  return (
    <>
      <CacheProvider value={emotionCache}>
        <MuiThemeProvider theme={createTheme(theme)}>
          <Suspense fallback={<CircularProgress sx={loaderStyle}/>}>{content}</Suspense>
        </MuiThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
