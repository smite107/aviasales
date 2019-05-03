import { fakeDelay } from "../helpers/utils";
import axios from "axios";

export const listConstants = {
  GET_TICKETS_REQUEST: "GET_TICKETS_REQUEST",
  GET_TICKETS_SUCCESS: "GET_TICKETS_SUCCESS",
  GET_TICKETS_FAILURE: "GET_TICKETS_FAILURE"
};

export const getTicketsRequest = () => ({
  type: listConstants.GET_TICKETS_REQUEST
});

export const getTicketsSuccess = (tickets) => ({
  type: listConstants.GET_TICKETS_SUCCESS, tickets
});

export const getTicketsFailure = () => ({
  type: listConstants.GET_TICKETS_FAILURE
});

export const getTickets = (success = null, failure = null) => (
  (dispatch) => {
    dispatch(getTicketsRequest());
    fakeDelay(() => 
      axios.get("../tickets.json")
        .then((response) => (
          response.data.tickets.sort((a, b) => {
            if (a.price < b.price ) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          })
        ))
        .then(
          (tickets) => {
            dispatch(getTicketsSuccess(tickets));
            if (success) {
              success(tickets);
            }
          },
          (error) => {
            dispatch(getTicketsFailure());
            if (failure) {
              failure(error);
            }
          }
        )
    );
  }
);