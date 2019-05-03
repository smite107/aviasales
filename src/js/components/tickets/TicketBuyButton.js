import React from "react";
import { formatPrice } from "../../helpers/utils";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = (state) => ({
  currency: state.currencySelector.currency,
  currencyMultiplier: state.currencySelector.currencyMultiplier
});

const TicketBuyButton = ({ link, priceInRub, currency, currencyMultiplier }) => (
  <a className="ticket__buy" href={link} title="Купить билет">
    <span className="ticket__price-text">Купить<br />за </span>
    <span className="ticket__price">{formatPrice(Math.round(priceInRub * currencyMultiplier), currency)}</span>
  </a>
);

TicketBuyButton.propTypes = {
  link: PropTypes.string.isRequired,
  priceInRub: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencyMultiplier: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps
)(TicketBuyButton);