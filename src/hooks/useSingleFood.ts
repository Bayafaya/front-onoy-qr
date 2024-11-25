import { useEffect, useMemo, useState } from "react";
import { IFood, IFoodModifiers, IFoodOptions } from "../interfaces/food";
import { getFoodById } from "../services/ltems";

interface IGetFoodProps {
  id: string | undefined;
}

export const useSingleFood = ({ id }: IGetFoodProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IFoodOptions>(
    {} as IFoodOptions
  );
  const [selectedModifier, setSelectedModifier] = useState<IFoodModifiers[]>(
    [] as IFoodModifiers[]
  );
  const [count, setCount] = useState(1);

  const totalCost = useMemo(() => {
    const optionCost = Number(selectedOption.cost) || 0;
    const modifierCost = selectedModifier.reduce(
      (acc, modifier) => acc + Number(modifier.additional_cost),
      0
    );
    return (optionCost + modifierCost) * count;
  }, [selectedModifier, selectedOption, count]);

  const [food, setFood] = useState<IFood>({
    pk: "",
    name: "",
    description: "",
    type: "",
    category: "",
    cook_time: 0,
    options: [
      {
        option_name: "",
        cost: "",
      },
    ],
    modifiers: [
      {
        name: "",
        additional_cost: "",
      },
    ],
    ingredients: [],
    allergens: [],
    nutrition: {
      calories: 0,
      fat: 0,
      protein: 0,
      carbs: 0,
    },
    availability: true,
    discount: 0,
    image_url: "",
    tags: [],
  } as IFood);

  const getSingleFood = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const response = await getFoodById(id);
      setFood(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleFood();
  }, []);

  return {
    isLoading,
    food,
    getSingleFood,
    setFood,
    selectedOption,
    setSelectedOption,
    selectedModifier,
    setSelectedModifier,
    totalCost,
    count,
    setCount,
  };
};

export default useSingleFood;
