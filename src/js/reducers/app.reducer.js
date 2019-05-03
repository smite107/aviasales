import { appConstants } from "../actions/app.actions";

const initialState = {
  isAsideOpen: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
  case appConstants.TOGGLE_ASIDE:
    return {
      ...state,
      isAsideOpen: action.isAsideOpen
    };
  default:
    return state;
  }
};

export default app;