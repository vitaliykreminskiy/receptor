import { FC, useEffect, useMemo, useState } from "react";
import { units } from "../App";
import { IAmount, IUnitDescriptor, Unit } from "../types";

type Props = {
  amount: IAmount;
  unit: IUnitDescriptor;
};

export const UnitRepresenter: FC<Props> = ({ amount, unit }) => {
  const [selectedUnit, setSelectedUnit] = useState<Unit>(amount.unit);

  const unitDetails: IUnitDescriptor = useMemo((): IUnitDescriptor => {
    return units[selectedUnit];
  }, [selectedUnit]);

  const atomicAmount: number = useMemo((): number => {
    return amount.value / unit.multiplier;
  }, [amount, selectedUnit]);

  const calculatedAmount: number = useMemo(() => {
    return atomicAmount * unitDetails.multiplier;
  }, [amount, selectedUnit]);

  return (
    <div className="flex flex-row items-center space-x-1">
      <span>{calculatedAmount}</span>

      <select
        onChange={(e) => setSelectedUnit(e.target.value as unknown as Unit)}
      >
        {Object.entries(units).map((unit, key) => (
          <option
            key={unit[0]}
            value={unit[0]}
            selected={unitDetails?.short === unit[1].short}
          >
            {unit[1].short}
          </option>
        ))}
      </select>
    </div>
  );
};
