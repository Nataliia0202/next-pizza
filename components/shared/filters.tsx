import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="You can collect it" value="1" />
        <FilterCheckbox text="New items" value="2" />
      </div>
      {/* Фильтры цены */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            defaultValue={0}
          />
          <Input type="number" min={10} max={100} placeholder="100" />
        </div>
        <RangeSlider min={0} max={100} step={10} value={[0, 100]} />
      </div>
    </div>
  );
};
