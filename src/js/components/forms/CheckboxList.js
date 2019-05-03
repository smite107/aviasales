import React, { Component } from "react";
import CheckboxListItem from "./CheckboxListItem";
import PropTypes from "prop-types";

class CheckboxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allChecked: true
    };
  }

  handleSelectAllCheckbox(event) {
    let isChecked = event.target.checked;

    this.props.onChange(
      isChecked ? this.props.data.map((checkbox) => (checkbox.value)) : []
    );
  }

  handleCheckboxChange(event) {
    let key = event.target.value;
    let isChecked = event.target.checked;
    let newData = [];
    this.props.data.forEach((checkbox) => {
      if (checkbox.value.toString() === key) {
        if (isChecked) {
          newData.push(checkbox.value);
        }
      } else if (checkbox.checked) {
        newData.push(checkbox.value);
      }
    });
    this.props.onChange(newData);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.data !== prevState.data) {
      return { allChecked: nextProps.data.every((checkbox) => checkbox.checked) };
    }
    else {
      return null;
    }
  }

  handleCheckOnlyThis(event, key) {
    event.preventDefault();
    this.props.onChange([key]);
  }

  render() {
    return (
      <div className="checkbox-list">
        {this.props.data &&
          <CheckboxListItem label="Все" name={this.props.name} onChange={(event) => this.handleSelectAllCheckbox(event)} checked={this.state.allChecked} />
        }
        {this.props.data && this.props.data.map((checkbox) => (
          <CheckboxListItem 
            label={checkbox.label} 
            key={checkbox.value} 
            name={this.props.name} 
            value={checkbox.value} 
            withOnlyThisOption={true}
            checked={checkbox.checked}
            onChange={(event) => this.handleCheckboxChange(event)}
            onCheckOnlyThis={(event) => this.handleCheckOnlyThis(event, checkbox.value)} />
        ))}
      </div>
    );
  }
}

CheckboxList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      checked: PropTypes.bool.isRequired
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};


export default CheckboxList;