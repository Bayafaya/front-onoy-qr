import { FC, useState } from "react";
import {
  Box,
  Card,
  CardContentProps,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
  IconButtonProps,
  IconButton,
  Collapse,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Counter from "../../Counter";
import { IFoodOrderResponse } from "../../../interfaces/food";
import "../../../styles/OrderProductCard.css";
import { useTranslation } from "react-i18next";

interface OrderHeaderProps extends CardContentProps {
  item: IFoodOrderResponse;
  showCounter?: boolean;
  handleChangeCount?: (value: {
    [key: string]: number;
    totalCost: number;
  }) => void;
  deleteOrder?: (orderId: string) => void;
}

const OrderProductCard: FC<OrderHeaderProps> = ({
  item,
  showCounter,
  handleChangeCount,
  deleteOrder,
  ...props
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [optionCount, setOptionCount] = useState(item.count);
  const [totalCost, setTotalCost] = useState(item.discount_cost);

  const handleCountChange = (value: number) => {
    const result = calcTotalCost(value);
    setTotalCost(result);
    setOptionCount(value);
    if(value === 0 && deleteOrder) deleteOrder(item._id);
    if (handleChangeCount)
      handleChangeCount({ [item._id]: value, totalCost: result });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const calcTotalCost = (value?: number) => {
    const optionCost = Number(item.options.cost);
    const modifierCost = item.modifiers.reduce(
      (acc, modifier) => acc + Number(modifier.additional_cost),
      0
    );
    return (optionCost + modifierCost) * (value || optionCount);
  };

  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow: " 0px 1px 10px 0px #00000033",
        display: "flex",
        alignItems: "start",
      }}
      {...props}
    >
      <CardMedia
        component="img"
        sx={{
          height: "62px",
          width: "80px",
          borderRadius: "12px",
          marginX: "16px",
          mt: "16px",
        }}
        image={item.image_url}
        alt="Live from space album cover"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          padding: "16px !important",
          paddingLeft: "0px !important",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.secondary.contrastText,
            width: "100%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            position: "relative",
            pr: 8,
            pb: 2,
          }}
        >
          {item.description}
          {!!item.modifiers.length && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{
                position: "absolute",
                bottom: 4,
                right: 0,
              }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          )}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ p: 0 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="body1"
                color={theme.palette.secondary.contrastText}
                mb={2}
              >
                {t("options")}: <b>{item.options.option_name}</b>
              </Typography>
              <Typography
                variant="body1"
                color={theme.palette.secondary.contrastText}
                mb={2}
              >
                {item.options.cost} с
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="body1"
                color={theme.palette.secondary.contrastText}
              >
                {t("modifiers")}:
              </Typography>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "16px",
                  width: "100%",
                }}
              >
                {item.modifiers.map((modifier) => (
                  <li key={modifier.id}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight={700}
                        color={theme.palette.secondary.contrastText}
                      >
                        {modifier.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.secondary.contrastText}
                      >
                        {modifier.additional_cost} с
                      </Typography>
                    </Box>
                  </li>
                ))}
              </ul>
            </Box>
          </CardContent>
        </Collapse>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Grid2>
            {showCounter ? (
              <Counter
                count={optionCount}
                setCount={handleCountChange}
                size={8}
                showDeleteButton={deleteOrder ? true : false}
              />
            ) : (
              <Typography
                variant="body2"
                color={theme.palette.secondary.contrastText}
                fontWeight={700}
              >
                {t("count")}: {optionCount}
              </Typography>
            )}
          </Grid2>
          <Typography variant="h5" display="flex" align="center" gap={1}>
            <Typography fontWeight={700}>{t("amount")}:</Typography> {totalCost}{" "}
            с
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderProductCard;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props; // eslint-disable-line
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));
