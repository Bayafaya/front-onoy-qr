export interface IFood {
  pk: string;
  name: string;
  description: string;
  type: string;
  category: string;
  cook_time: number;
  cost: number;
  options: IFoodOPtions[];
  modifiers: IFoodModifiers[];
  ingredients: string[];
  allergens: string[];
  nutrition: IFoodNutrition;
  availability: boolean;
  discount: string;
  image_url: string;
  tags: string[];
}

interface IFoodOPtions {
  option_name: string;
  cost: number;
}

interface IFoodModifiers {
  name: string;
  additional_cost: number;
}

interface IFoodNutrition {
  calories: number;
  fat: string;
  protein: string;
  carbs: string;
}
