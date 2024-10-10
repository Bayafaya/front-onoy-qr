import { useEffect, useState } from "react";
import { getAllFoods } from "../services/ltems";
import { IFood } from "../interfaces/food";

export const useAllIFoods = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IFood[]>([]);

  const getListOfLimitedFoods = async () => {
    setIsLoading(true);

    try {
      const response = await getAllFoods();
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListOfLimitedFoods();
  }, []);

  return { isLoading, data, getListOfLimitedFoods };
};

export default useAllIFoods;
