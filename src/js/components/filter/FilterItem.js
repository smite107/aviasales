import React from "react";
import PropTypes from "prop-types";

const FilterItem = ({ title, children }) => (
  <div className="filter__item">
    <h2 className="filter__item-header">{title}</h2>
    {children}
  </div>
);

FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FilterItem;