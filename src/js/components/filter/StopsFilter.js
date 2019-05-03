import React from "react";
import CheckboxList from "../forms/CheckboxList";
import { connect } from "react-redux";
import { setStopsFilter } from "../../actions/filter.actions";
import PropTypes from "prop-types";

const initialStops = [
  {
    label: "Без пересадок",
    value: 0
  },
  {
    label: "1 пересадка",
    value: 1
  },
  {
    label: "2 пересадки",
    value: 2
  },
  {
    label: "3 пересадки",
    value: 3
  }
];

const mapStateToProps = (state) => ({
  stops: state.filter.stops
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (stops) => {
    dispatch(setStopsFilter(stops));
  }
});

const StopsFilter = ({ stops, onChange }) => {
  const data = initialStops.map((stopInfo) => ({
    ...stopInfo,
    checked: stops.includes(stopInfo.value)
  }));

  return (
    <CheckboxList data={data} name="stops" onChange={onChange} />
  );
};

StopsFilter.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopsFilter);