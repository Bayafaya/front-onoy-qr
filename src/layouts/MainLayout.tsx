import { CssBaseline, Paper as MuiPaper, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const Root = styled.div`
  display: flex;
  min-height: 100dvh;
  transition: all 0.3s ease;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow-x: hidden;
`;
const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.paper};
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const MainLayout = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Root>
      <CssBaseline />
      <AppContent>
        <MainContent p={isLgUp ? 7 : 5}>
          <Outlet />
        </MainContent>
      </AppContent>
    </Root>
  );
};

export default MainLayout;
