import { useTheme } from "@emotion/react";
import GlobeIcon from "../../../assets/ui/GlobeIcon";
import ButtonFillIcon from "./ButtonFillIcon";
import i18n from "i18next";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Locale from "../../../interfaces/locale";
import { Typography } from "@mui/material";
import ButtonBlurIcon from "./ButtonBlurIcon";

type LangButtonProps = {
  blur?: boolean;
};

const LangButton = ({ blur }: LangButtonProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return blur ? (
    <>
      <ButtonBlurIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <GlobeIcon width={28} height={28} color={theme.palette.white} />
      </ButtonBlurIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          mt: 2,
          "& .MuiPaper-root": {
            border: "1px solid rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(2px)",
            borderRadius: "8px !important",
            width: 46,
          },
        }}
      >
        {Object.values(Locale).map((language) => (
          <MenuItem
            sx={{
              padding: 0,
            }}
            key={language}
            onClick={() => changeLanguage(language)}
          >
            <Typography
              sx={{
                color: theme.palette.white,
                fontWeight: 500,
                textAlign: "center",
                width: "100%",
              }}
            >
              {language.toUpperCase()}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  ) : (
    <>
      <ButtonFillIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <GlobeIcon width={28} height={28} color={theme.palette.white} />
      </ButtonFillIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          mt: 2,
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.primary.main,
            width: 46,
          },
        }}
      >
        {Object.values(Locale).map((language) => (
          <MenuItem
            sx={{
              padding: 0,
            }}
            key={language}
            onClick={() => changeLanguage(language)}
          >
            <Typography
              sx={{
                color: theme.palette.white,
                fontWeight: 500,
                textAlign: "center",
                width: "100%",
              }}
            >
              {language.toUpperCase()}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LangButton;
