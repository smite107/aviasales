import React from "react";
import SwitchField from "../forms/SwitchField";
import { connect } from "react-redux";
import { changeCurrency } from "../../actions/currencySelector.actions";
import PropTypes from "prop-types";

const currencies = [
  {
    label: "RUB",
    value: "RUB"
  },
  {
    label: "USD",
    value: "USD"
  },
  {
    label: "EUR",
    value: "EUR"
  }
];

const mapStateToProps = (state) => ({
  selectedCurrency: state.currencySelector.currency
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (currency) => {
    dispatch(changeCurrency(currency));
  }
});


const CurrencySelector = ({selectedCurrency, onChange}) => (
  <SwitchField 
    data={currencies} 
    name="currency" 
    selectedValue={selectedCurrency} 
    onChange={onChange} 
  />
);

CurrencySelector.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySelector);