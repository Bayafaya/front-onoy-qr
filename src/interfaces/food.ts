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
  id: string;
  option_name: string;
  cost: number | string;
}

export interface IFoodModifiers {
  id: string;
  name: string;
  additional_cost: number | string;
}

export interface IFoodNutrition {
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
}


export interface IFoodOrderResponse {
  _id: string;
  pk: string;
  name: string;
  description: string;
  type: string;
  category: string;
  cook_time: number;
  discount_cost: number;
  count	: number;
  options: IFoodOptions;
  modifiers: IFoodModifiers[];
  ingredients: string[];
  allergens: string[];
  nutrition: IFoodNutrition;
  availability: boolean;
  discount: number;
  image_url: string;
  tags: string[];
}

