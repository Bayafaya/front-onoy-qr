import React, { forwardRef, useMemo } from "react";
import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";
import { rgba, darken } from "polished";
import {
  Chip,
  Collapse,
  ListItemProps,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useTheme from "../../hooks/useTheme";


const CustomRouterLink = forwardRef<any, NavLinkProps>((props, ref) => (
  <div ref={ref}>
    <NavLink {...props} />
  </div>
));

CustomRouterLink.displayName = "CustomRouterLink";

type ItemType = {
  activeclassname?: string;
  onClick?: () => void;
  to?: string;
  component?: typeof NavLink;
  depth: number;
};

const Item = styled(ListItemButton)<ItemType>`
  padding-top: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 2 : 3)};
  padding-bottom: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 2 : 3)};
  padding-left: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 14 : 8)};
  padding-right: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 4 : 7)};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  border-radius: 6px;
  margin: 0 12px;
  &:before {
    content: "";
    position: absolute;
    left: -12px;
    background: transparent;
    height: 100%;
    width: 4px;
    border-radius: 0 6px 6px 0;
    transition: all 0.1s;
  }
  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background: gray;
    color: ${(props) => props.theme.sidebar.background};
    svg path {
      stroke: ${(props) => props.theme.sidebar.activeColor};
      color: ${(props) => props.theme.sidebar.activeColor};
    }
    span {
      color: ${(props) => props.theme.sidebar.activeColor};
    }
    &:before {
      background: gray;
    }
  }
  &.${(props) => props.activeclassname} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.activeBackground)};
    span {
      color: ${(props) => props.theme.sidebar.activeColor};
    }
    svg path {
      stroke: ${(props) => props.theme.sidebar.activeColor};
      color: ${(props) => props.theme.sidebar.activeColor};
    }
    &:before {
      background: ${(props) => props.theme.sidebar.activeBackground};
    }
  }
`;

type TitleType = {
  depth: number;
};

const Title = styled(ListItemText)<TitleType>`
  margin: 0;
  span {
    color: ${(props) =>
      rgba(
        props.theme.sidebar.color,
        props.depth && props.depth > 0 ? 0.7 : 1
      )};
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(4)};
  }
`;

const Badge = styled(Chip)`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 26px;
  top: 12px;
  background: ${(props) => props.theme.sidebar.badge.background};
  z-index: 1;
  span.MuiChip-label,
  span.MuiChip-label:hover {
    font-size: 11px;
    cursor: pointer;
    color: ${(props) => props.theme.sidebar.badge.color};
    padding-left: ${(props) => props.theme.spacing(2)};
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;

const ExpandLessIcon = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const ExpandMoreIcon = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

type SidebarNavListItemProps = ListItemProps & {
  className?: string;
  depth: number;
  href: string;
  icon: React.FC<any>;
  badge?: string;
  open?: boolean;
  title: string;
};

const SidebarNavListItem: React.FC<SidebarNavListItemProps> = (props) => {
  const {
    title,
    href,
    depth = 0,
    children,
    icon: Icon,
    badge,
    open: openProp = false,
  } = props;
  const [open, setOpen] = React.useState(openProp);
  



  const handleToggle = () => {
    setOpen((state) => !state);
  };

  const { theme } = useTheme();
  const isIconWhite = useMemo(() => {
    return theme === "DEFAULT" || theme === "LIGHT";
  }, [theme]);


  if (children) {
    return (
      <React.Fragment>
        <Item depth={depth} onClick={handleToggle}>
          {Icon && <Icon />}
          <Title depth={depth}>
            {title}
            {badge && <Badge label={badge} />}
          </Title>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Item>
        <Collapse in={open}>{children}</Collapse>
      </React.Fragment>
    );
  }

  return (
    <>
      
        <React.Fragment>
          <Item
            depth={depth}
            component={CustomRouterLink}
            to={href}
            activeclassname="active"
          >
            {Icon && <Icon stroke={isIconWhite ? "#8E8E93" : "#FFF"} />}
            <Title depth={depth}>
              {title}
              {badge && <Badge label={badge} />}
            </Title>
          </Item>
        </React.Fragment>
    
    </>
  );
};

export default SidebarNavListItem;
