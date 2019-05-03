import React from "react";
import FilterItem from "./FilterItem";
import CurrencySelector from "./CurrencySelector";
import StopsFilter from "./StopsFilter";

const Filter = () => (
  <div className="filter block">
    <FilterItem title="Валюта">
      <CurrencySelector />
    </FilterItem>
    <FilterItem title="Количество пересадок">
      <StopsFilter />
    </FilterItem>
  </div>
);

export default Filter;