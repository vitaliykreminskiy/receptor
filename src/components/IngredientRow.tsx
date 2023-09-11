import { FC, useMemo } from "react";
import { IIngredient, IUnitDescriptor } from "../types";
import { units } from "../App";
import { UnitRepresenter } from "./UnitRepresenter";

type Props = {
  ingredient: IIngredient;
};

export const IngredientRow: FC<Props> = ({ ingredient }) => {
  const unit: IUnitDescriptor = useMemo(
    (): IUnitDescriptor => units[ingredient.amount.unit],
    [ingredient]
  );

  return (
    <div className="w-[20rem] h-[5rem] flex justify-between items-center px-4">
      <span>{ingredient.title}</span>
      <UnitRepresenter amount={ingredient.amount} unit={unit} />
    </div>
  );
};
