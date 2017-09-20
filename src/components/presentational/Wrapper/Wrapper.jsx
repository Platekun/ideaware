import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.css';

const Wrapper = (props) => (
  <div className="wrapper">
    {props.children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Wrapper;
