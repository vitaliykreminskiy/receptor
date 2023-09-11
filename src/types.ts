export enum Unit {
  KILOGRAM,
  MILLILITER,
  MILLIGRAM,
  TEASPOON,
  TABLESPOON,
  GRAM,
  CUP,
  //PIECES,
}

export interface IAmount {
  unit: Unit;
  value: number;
}

export interface IUnitDescriptor {
  title: string;
  short: string;
  multiplier: number;
}

export interface IIngredient {
  title: string;
  amount: IAmount;
}
