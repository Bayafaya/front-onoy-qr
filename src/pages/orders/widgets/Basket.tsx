import { Box, Typography } from "@mui/material";
import OrderCard from "./OrderCard";
import BottomFloatCard from "../../../components/ui/float/BottomFloatCard";
import AccentButton from "../../../components/ui/buttons/AccentButton";
import { confirmBucket } from "../../../services/bucket";
import { useEffect, useMemo, useState } from "react";
import useMyBucket from "../../../hooks/useMyBucket";
import useConnectToSocket from "../../../hooks/useConnectToSocket";
import BasketSkeleton from "../../../components/ui/skeleton/BasketSkeleton";

const Basket = () => {
  const [isSending, setIsSending] = useState(false);
  const { sendMessage } = useConnectToSocket();
  const { data, fetchBucket, isLoading } = useMyBucket();
  const [body, setBody] = useState<
    { [key: string]: number; totalCost: number }[]
  >([]);

  useEffect(() => {
    if (data.client_items && data.client_items.bucket) {
      setBody(
        data.client_items.bucket.items.map((item) => {
          return {
            [item._id]: item.count,
            totalCost: item.discount_cost,
          };
        })
      );
    }
  }, [data]);

  const handleChangeCount = (value: {
    [key: string]: number;
    totalCost: number;
  }) => {
    setBody((prev) => {
      const index = prev.findIndex((item) => {
        return Object.keys(item)[0] === Object.keys(value)[0];
      });
      if (index !== -1) {
        return [
          ...prev.slice(0, index),
          value,
          ...prev.slice(index + 1, prev.length),
        ];
      }
      return [...prev, value];
    });
  };

  const goToKitchen = async () => {
    try {
      setIsSending(true);
      const access = localStorage.getItem("access");
      const client_id = localStorage.getItem("client_id");
      const response = await confirmBucket({
        qr_code_id: access || "",
        client_id: client_id || "",
        body: body.map((item) => {
          return { [Object.keys(item)[0]]: Object.values(item)[0] };
        }),
      });
      if (response.status === 200) {
        setIsSending(false);
        sendMessage(access || "");
        await fetchBucket();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const totalCost = useMemo(() => {
    return body.reduce((acc, item) => acc + item.totalCost, 0);
  }, [body]);

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
      }}
    >
      {isLoading ? (
        <BasketSkeleton animation="wave" />
      ) : (
        <>
          {data.client_items && (
            <OrderCard
              handleChangeCount={handleChangeCount}
              showCounter={true}
              list={data.client_items.bucket}
              color={data.client_items.client.color}
              name={data.client_items.client.name}
              avatar={data.client_items.client.avatar}
            />
          )}
        </>
      )}
      <BottomFloatCard>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          <Typography variant="h3" fontWeight={600} textAlign="center" flex={1}>
            {`${totalCost} c`}
          </Typography>
          <Box sx={{ width: "260px" }}>
            <AccentButton fullWidth onClick={goToKitchen} disabled={isSending}>
              {isSending ? "Отправка..." : "Добавить в кухню"}
            </AccentButton>
          </Box>
        </Box>
      </BottomFloatCard>
    </Box>
  );
};

export default Basket;
