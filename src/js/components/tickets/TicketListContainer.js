import React, { Component } from "react";
import { connect } from "react-redux";
import { getTickets } from "../../actions/list.actions";
import { filterTickets } from "../../actions/filter.actions";
import TicketsList from "./TicketsList";
import TicketsLoading from "./TicketsLoading";
import TicketsNotFound from "./TicketsNotFound";
import PropTypes from "prop-types";

const mapStateToProps = (state) => ({
  tickets: state.list.tickets,
  isTicketsLoading: state.list.isTicketsLoading,
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  getTickets: (success = null, failure = null) => {
    dispatch(getTickets(success, failure));
  }
});

class TicketListContainer extends Component {
  constructor() {
    super();

    this.state = {
      filteredTickets: []
    };
  }

  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    let ticketList;

    if (this.props.isTicketsLoading) {
      ticketList = <TicketsLoading />;
    } else {
      let tickets = filterTickets(this.props.tickets, this.props.filter);

      if (tickets.length > 0) {
        ticketList = <TicketsList data={tickets} />;
      } else {
        ticketList = <TicketsNotFound />;
      }
    }
    return (
      <div className="ticket-list">
        {ticketList}
      </div>
    );
  }
}

TicketListContainer.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  isTicketsLoading: PropTypes.bool.isRequired,
  getTickets: PropTypes.func.isRequired,
  filter: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ])
      )
    ])
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);