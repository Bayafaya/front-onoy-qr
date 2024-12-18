import { useEffect, useState } from "react";
import { countOfBucket } from "../services/bucket";




export const useCountOfOrder = () => {
  const [countOfOrder, setCountOfOrder] = useState<number>(0);

  const fetchCountOfBucket = async () => {
    const access = localStorage.getItem("access");
    const client_id = localStorage.getItem("client_id");
    const response = await countOfBucket({
      qr_code_id: access || "",
      client_id: client_id || "",
    });
    setCountOfOrder(response.data.count);
  };



  useEffect(() => {
    fetchCountOfBucket();
  }, []);

  return { countOfOrder, setCountOfOrder };
}