import axios from "axios";

export const currencySelectorConstants = {
  CHANGE_CURRENCY_SUCCESS: "CHANGE_CURRENCY_SUCCESS"
};

export const changeCurrencySuccess = (currency, multiplier) => ({
  type: currencySelectorConstants.CHANGE_CURRENCY_SUCCESS, currency, multiplier
});

export const changeCurrency = (currency) => (
  (dispatch) => {
    let savedData = JSON.parse(localStorage.getItem("currencyData"));
    //30 minutes cache lifetime
    if (savedData && ((new Date().getTime() - savedData.timestamp) / 1000 / 60) < 30) {
      dispatch(changeCurrencySuccess(currency, savedData[currency]));
    } else {
      axios.get("https://api.exchangeratesapi.io/latest?base=RUB")
        .then((response) => (response.data.rates))
        .then((rates) => {
          const { RUB, USD, EUR } = rates;
          const currencyData = { RUB, USD, EUR, timestamp: new Date().getTime() };
          localStorage.setItem("currencyData", JSON.stringify(currencyData));
          dispatch(changeCurrencySuccess(currency, currencyData[currency]));
        });
    }
  }
);