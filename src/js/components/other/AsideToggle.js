import React from "react";
import PropTypes from "prop-types";
import { toggleAside } from "../../actions/app.actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAsideOpen: state.app.isAsideOpen
});

const mapDispatchToProps = (dispatch) => ({
  openAside: () => {
    dispatch(toggleAside(true));
  }
});

const AsideToggle = ({ isAsideOpen, openAside }) => (
  <button className="aside-toggle" onClick={openAside}>
    <i className="fas fa-sliders-h"></i> <span>Выбрать</span>
  </button>
);

AsideToggle.propTypes = {
  isAsideOpen: PropTypes.bool.isRequired,
  openAside: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideToggle);