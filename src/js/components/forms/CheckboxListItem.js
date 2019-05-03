import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({ name, value, checked, label, onChange, withOnlyThisOption, onCheckOnlyThis }) => (
  <label className="checkbox checkbox--list-item">
    <input 
      type="checkbox" 
      className="checkbox__control" 
      name={name} 
      value={value} 
      checked={checked}
      onChange={onChange} />
    <span className="checkbox__label">{label}</span>
    {withOnlyThisOption &&
      <span className="checkbox__only-this" onClick={onCheckOnlyThis}>только</span>
    }
  </label>
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  withOnlyThisOption: PropTypes.bool,
  onCheckOnlyThis: PropTypes.func
};

export default CheckboxField;