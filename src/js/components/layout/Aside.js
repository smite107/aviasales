import React from "react";
import PropTypes from "prop-types";
import { toggleAside } from "../../actions/app.actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAsideOpen: state.app.isAsideOpen
});

const mapDispatchToProps = (dispatch) => ({
  closeAside: () => {
    dispatch(toggleAside(false));
  }
});

const Aside = ({ children, isAsideOpen, closeAside }) => (
  <React.Fragment>
    <div className={`aside-overlay ${isAsideOpen ? "aside-overlay--visible" : ""}`} onClick={closeAside}></div>
    <aside className={`aside ${isAsideOpen ? "aside--open" : ""}`}>
      <button className="aside__close" onClick={closeAside}></button>
      {children}
    </aside>
  </React.Fragment>
);

Aside.propTypes = {
  children: PropTypes.node.isRequired,
  isAsideOpen: PropTypes.bool.isRequired,
  closeAside: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);