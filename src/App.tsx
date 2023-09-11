import { FC, useState } from "react";
import "./App.css";
import { IIngredient, IUnitDescriptor, Unit } from "./types";
import { IngredientRow } from "./components/IngredientRow";

const sampleRecipe: IIngredient[] = [
  {
    title: "Carrot",
    amount: { value: 300, unit: Unit.GRAM },
  },
  {
    title: "Cabbage",
    amount: { value: 500, unit: Unit.GRAM },
  },
  {
    title: "Water",
    amount: { value: 300, unit: Unit.MILLILITER },
  },
  {
    title: "Salt",
    amount: { value: 1, unit: Unit.TEASPOON },
  },
];

export const units: Record<Unit, IUnitDescriptor> = {
  [Unit.KILOGRAM]: { title: "Kilogram", short: "kg", multiplier: 1000000 },
  [Unit.MILLILITER]: { title: "Milliliter", short: "ml", multiplier: 1 },
  [Unit.MILLIGRAM]: { title: "Milligram", short: "mg", multiplier: 1 },
  [Unit.TEASPOON]: { title: "Teaspoon", short: "tsp", multiplier: 5 },
  [Unit.TABLESPOON]: { title: "Tablespoon", short: "tbsp", multiplier: 15 },
  [Unit.GRAM]: { title: "Gram", short: "g", multiplier: 1000 },
  [Unit.CUP]: { title: "Cup", short: "cup", multiplier: 240 },
  // [Unit.PIECES]: { title: "Pieces", short: "pcs", multiplier: 0 },
};

const getUniqString = (): string => {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2); // Generates a random string
  const uniqueString = `${timestamp}${random}`;

  return uniqueString;
};

function App() {
  const [ingredients, setIngredients] = useState<IIngredient[]>(sampleRecipe);
  const [portions, setPortions] = useState<number>(1);

  return (
    <>
      <div className="px-4 w-[20rem]">
        <span>{portions} portions</span>

        <input
          className="w-full"
          type="range"
          min={0.5}
          max={20}
          step={0.5}
          value={portions}
          onChange={(e) => setPortions(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        {ingredients.map((ingredient) => {
          const totalValue: number = ingredient.amount.value * portions;
          const preparedIngredient: IIngredient = {
            ...ingredient,
            amount: { ...ingredient.amount, value: totalValue },
          };

          return (
            <IngredientRow
              key={getUniqString()}
              ingredient={preparedIngredient}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
