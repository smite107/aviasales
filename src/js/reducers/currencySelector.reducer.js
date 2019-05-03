import { currencySelectorConstants } from "../actions/currencySelector.actions";

const initialState = {
  currency: "RUB",
  currencyMultiplier: 1
};

const currencySelector = (state = initialState, action) => {
  switch (action.type) {
  case currencySelectorConstants.CHANGE_CURRENCY_SUCCESS:
    return {
      ...state,
      currency: action.currency,
      currencyMultiplier: action.multiplier
    };
  default:
    return state;
  }
};

export default currencySelector;