import { useEffect, useState } from "react";
import { getFoodByCategory } from "../services/ltems";
import { IFood } from "../interfaces/food";
import { ICategory } from "../interfaces/category";

export const useAllIFoods = ({ tab, category }: { tab: string, category: ICategory[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IFood[]>([]);

  const getListOfLimitedFoods = async () => {
    setIsLoading(true);
    try {
      const response = await getFoodByCategory(category[+tab]._id);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (category.length) {
      getListOfLimitedFoods();
    }
  }, [category, tab]);

  return { isLoading, data, getListOfLimitedFoods };
};

export default useAllIFoods;
