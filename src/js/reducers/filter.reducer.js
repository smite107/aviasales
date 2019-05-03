import { filterConstants } from "../actions/filter.actions";

const initialState = {
  stops: [0, 1, 2, 3]
};

const filter = (state = initialState, action) => {
  switch (action.type) {
  case filterConstants.SET_STOPS_FILTER:
    return {
      ...state,
      stops: action.stops
    };
  default:
    return state;
  }
};

export default filter;