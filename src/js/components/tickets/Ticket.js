import React from "react";
import { declensionOfNumber } from "../../helpers/utils";
import TicketRoute from "./TicketRoute";
import TicketBuyButton from "./TicketBuyButton";
import PropTypes from "prop-types";

const declensions = ["пересадка", "пересадки", "пересадок"];

const Ticket = ({data}) => {
  let { 
    origin, 
    origin_name, 
    destination, 
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price: priceInRub
  } = data;

  let ticketLink = "https://www.aviasales.ru/";

  const handleOnClick = () => {
    window.location.href = ticketLink;
  }

  return (
    <div className="ticket" onClick={window.innerWidth <= 530 ? handleOnClick : null}>
      <div className="ticket__left">
        <img className="ticket__carrier" src={`${process.env.PUBLIC_URL}/images/carriers/${carrier}.png`} alt={carrier} />
        <TicketBuyButton link={ticketLink} priceInRub={priceInRub} />
      </div>
      <div className="ticket__info">
        <div className="ticket__flight">
          <TicketRoute airport={origin} city={origin_name} date={departure_date} time={departure_time} />
          <div className="ticket__transfers">
            {stops > 0 ? `${stops} ${declensionOfNumber(stops, declensions)}` : "прямой"}
          </div>
          <TicketRoute airport={destination} city={destination_name} date={arrival_date} time={arrival_time} align="right" />
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  data: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired, 
    destination: PropTypes.string.isRequired, 
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default Ticket;