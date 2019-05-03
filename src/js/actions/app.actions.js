export const appConstants = {
  TOGGLE_ASIDE: "TOGGLE_ASIDE"
};

export const toggleAside = (isAsideOpen) => ({
  type: appConstants.TOGGLE_ASIDE, isAsideOpen
});