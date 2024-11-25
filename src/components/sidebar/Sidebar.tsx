import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import {
  Drawer as MuiDrawer,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";

// import { ReactComponent as Logo } from "../../vendor/DemirBankLogo.svg";
// import { ReactComponent as LogoWhite } from "../../vendor/DemirBankLogoWhite.svg";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SidebarNav from "./SidebarNav";
import useTheme from "../../hooks/useTheme";
import { useTheme as useThemeEmotion } from "@emotion/react";
import { SidebarItemsType } from "../../types/sidebar";
const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

const Brand = styled(ListItemButton)<{
  component?: React.ReactNode;
  to?: string;
}>`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.background};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)};
  padding-right: ${(props) => props.theme.spacing(6)};
  justify-content: center;
  cursor: pointer;
  flex-grow: 0;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const BrandIcon = styled(FastfoodIcon)`
  margin-right: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  // width: 32px;
  height: 32px;
`;

const BrandIconWhite = styled(FastfoodIcon)`
  margin-right: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  // width: 32px;
  height: 32px;
`;

// const BrandChip = styled(Chip)`
//   background-color: ${green[700]};
//   border-radius: 5px;
//   color: ${(props) => props.theme.palette.common.white};
//   font-size: 55%;
//   height: 18px;
//   margin-left: 2px;
//   margin-top: -16px;
//   padding: 3px 0;

//   span {
//     padding-left: ${(props) => props.theme.spacing(1.375)};
//     padding-right: ${(props) => props.theme.spacing(1.375)};
//   }
// `;

export type SidebarProps = {
  PaperProps: {
    style: {
      width: number;
    };
  };
  variant?: "permanent" | "persistent" | "temporary";
  open?: boolean;
  onClose?: () => void;
  items: {
    title: string;
    pages: SidebarItemsType[];
  }[];
  showFooter?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  items,
  showFooter = true,
  ...rest
}) => {
  const { theme } = useTheme();
  const themes = useThemeEmotion();
  const md = useMediaQuery(themes.breakpoints.up("md"));

  const useWhiteLogo = useMemo(() => {
    return theme !== "DEFAULT";
  }, [theme]);

  return (
    <Drawer variant="permanent" anchor={md ? "left" : "right"} {...rest}>
      <Brand
        sx={{ borderRight: "1px solid #e0e0e0" }}
        component={NavLink as any}
        to="/"
      >
        {useWhiteLogo ? <BrandIconWhite /> : <BrandIcon />}
        {/* <Box ml={1}>
          DemirBank <BrandChip label="PRO" />
        </Box> */}
      </Brand>
      <SidebarNav items={items} />

    </Drawer>
  );
};

export default Sidebar;
