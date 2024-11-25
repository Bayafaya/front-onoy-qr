export interface IFood {
  pk: string;
  name: string;
  description: string;
  type: string;
  category: string;
  cook_time: number;
  options: IFoodOptions[];
  modifiers: IFoodModifiers[];
  ingredients: string[];
  allergens: string[];
  nutrition: IFoodNutrition;
  availability: boolean;
  discount: number;
  image_url: string;
  tags: string[];
}

export interface IFoodOptions {
  option_name: string;
  cost: number | string;
}

export interface IFoodModifiers {
  name: string;
  additional_cost: number | string;
}

export interface IFoodNutrition {
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
}
