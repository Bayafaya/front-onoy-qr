import {
  Box,
  Card,
  CardContentProps,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

interface ProductCardProps extends CardContentProps {
  title: string;
  description: string;
  image: string;
  cook_time: number;
  cost: number;
}

const ProductCard = (props: ProductCardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow: " 0px 1px 10px 0px #00000033",
        height: "120px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      {...props}
    >
      <CardMedia
        component="img"
        sx={{
          height: "72%",
          width: "90px",
          borderRadius: "12px",
          marginX: "16px",
        }}
        image={props.image}
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
          height={"18px"}
          mb={2}
          sx={{
            width: "100%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          mb={2}
          sx={{
            color: theme.palette.secondary.contrastText,
            width: "100%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {props.description}
        </Typography>
        <Box display="flex" alignItems="end" justifyContent="space-between">
          <Grid2>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.secondary.contrastText,
              }}
            >
              Вес: 300 г
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.secondary.contrastText,
              }}
            >
              Ожидание: {props.cook_time} м
            </Typography>
          </Grid2>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            {props.cost} с
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
