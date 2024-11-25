import { useParams } from "react-router";
import AccentCard from "../../components/ui/cards/AccentCard";
import { CardContent } from "@mui/material";
import AccentWidgetTitles from "../../components/ui/Typography/AccentWidgetTitles";
import UploadAWS from "../../components/upload/uploadAWS";

const CreateItem = () => {
  const { id } = useParams();
  return (
    <AccentCard sx={{ height: "100%" }}>
      <CardContent>
        <AccentWidgetTitles gutterBottom>{id ? "Редакитровать позицию" : "Создать позицию"}</AccentWidgetTitles>
        <UploadAWS/>
      </CardContent>
    </AccentCard>
  );
};

export default CreateItem;
