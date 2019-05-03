import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

const TicketList = ({ data }) => {
  let i = 0;
  return (
    <React.Fragment>
      {data.map((ticket) => {
        i++;
        return (
          <Ticket data={ticket} key={i} />
        );
      })}
    </React.Fragment>
  );
};

TicketList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};


export default TicketList;