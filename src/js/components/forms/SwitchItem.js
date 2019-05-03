import React from "react";
import PropTypes from "prop-types";

const SwitchItem = ({ name, value, label, checked, onChange, className = "" }) => (
  <label className={`switch__item ${className}`}>
    <input 
      type="radio" 
      className="switch__item-control" 
      name={name} 
      value={value} 
      checked={checked}
      onChange={onChange} />
    <span className="switch__item-label">{label}</span>
  </label>
);

SwitchItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SwitchItem;