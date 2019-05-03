import { listConstants } from "../actions/list.actions";

const initialState = {
  tickets: [], 
  isTicketsLoading: false
};

const list = (state = initialState, action) => {
  switch (action.type) {
  case listConstants.GET_TICKETS_REQUEST:
    return {
      ...state,
      isTicketsLoading: true
    };
  case listConstants.GET_TICKETS_SUCCESS:
    return {
      ...state,
      tickets: action.tickets,
      isTicketsLoading: false
    };
  case listConstants.GET_TICKETS_FAILURE:
    return {
      ...state,
      tickets: [],
      isTicketsLoading: false
    };
  default:
    return state;
  }
};

export default list;