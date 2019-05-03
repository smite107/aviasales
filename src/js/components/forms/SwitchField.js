import React, { Component } from "react";
import PropTypes from "prop-types";
import SwitchItem from "./SwitchItem";

class SwitchField extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeItem: this.props.selectedValue
    };
  }

  handleChange(event) {
    let newValue = event.target.value;

    this.setState({
      activeItem: newValue
    });

    this.props.onChange(newValue);
  }

  render() {
    const { data, name, selectedValue } = this.props;
    return (
      <div className="switch">
        {data && data.map((item) => (
          <SwitchItem 
            label={item.label} 
            value={item.value} 
            key={item.value} 
            name={name} 
            onChange={(event) => this.handleChange(event)}
            checked={selectedValue === item.value}
            className={this.state.activeItem === item.value ? "switch__item--active" : ""}
          />
        ))}
      </div>
    );
  }
}

SwitchField.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SwitchField;