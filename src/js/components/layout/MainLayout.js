import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="main">
      {children}
    </div>
  </React.Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;