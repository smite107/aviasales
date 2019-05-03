import React from "react";
import { getFormatedDate } from "../../helpers/utils";
import PropTypes from "prop-types";

const TicketRoute = ({ airport, city, date, time, align = "left" }) => (
  <div className={`ticket__route route route--${align}`}>
    <div className="route__time">{time}</div>
    <div className="route__place">
      {align === "right" ?
        (`${city}, ${airport}`)
        :
        (`${airport}, ${city}`)
      }
    </div>
    <div className="route__date">{getFormatedDate(date)}</div>
  </div>
);

TicketRoute.propTypes = {
  airport: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "right"])
};

export default TicketRoute;