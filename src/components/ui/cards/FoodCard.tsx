import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { IFood } from "../../../interfaces/food";
import { useNavigate } from "react-router";
type FoodCardProps = {
  food: IFood;
};
const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={food.image_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {food.name}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ color: "text.secondary" }}
        >
          {food.description}
        </Typography>
        <Typography variant="h6" component="div">
          {food.cost} KGS
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 2 }}>
        <Button
          onClick={() => navigate(`/create-item/${food.pk}`)}
          variant="outlined"
          size="small"
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
