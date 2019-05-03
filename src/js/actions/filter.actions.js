export const filterConstants = {
  SET_STOPS_FILTER: "SET_STOPS_FILTER"
};

export const setStopsFilter = (stops) => ({
  type: filterConstants.SET_STOPS_FILTER, stops 
});

export const filterTickets = (tickets, filter) => (
  tickets.filter((ticket) => {
    for (let item in filter) {
      if (Array.isArray(filter[item])) {
        if (!filter[item].includes(ticket[item])) {
          return false;
        }
      } else if (ticket[item] !== filter[item]) {
        return false;
      }
    }
    return true;
  })
);