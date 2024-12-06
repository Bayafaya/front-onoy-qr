import { CssBaseline, Paper as MuiPaper, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Outlet } from "react-router";
import { spacing } from "@mui/system";

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

const WelcomeContent = styled(Paper)`
  flex: 1;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }
  background-image: url("static/bg-pattern.png");
  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const WelcomeLayout = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Root>
      <CssBaseline />
      <AppContent>
        <WelcomeContent p={isLgUp ? 7 : 5}>
          <Outlet />
        </WelcomeContent>
      </AppContent>
    </Root>
  );
};

export default WelcomeLayout;
