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
import useHandleColor from "../../../hooks/useHandleColor";

interface OrderHeaderProps extends CardContentProps {
  active?: boolean;
  color?: string;
};

const OrderProductCard: FC<OrderHeaderProps> = ({
  active,
  color,
  ...props
}) => {
  const theme = useTheme();
  const getColor = useHandleColor({
    active,
    color,
  });
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow: " 0px 1px 10px 0px #00000033",
        // height: "120px",
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
        image="src/assets/images.jpg"
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
          Beef, vegetables and sesame
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
            position: "relative",
            pr: 8,
          }}
        >
          Lizards are a widespread group of squamate reptilesa sdjasuogd
          asjbdouasg bdaugduahsd
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{
              position: "absolute",
              bottom: -4,
              right: 0,
            }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ p: 0 }}>
            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Grid2>
            <Counter size={8} />
          </Grid2>
          <Typography
            variant="h5"
            sx={{
              color: getColor,
            }}
          >
            350 с
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
