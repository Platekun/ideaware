import React from 'react';
import PropTypes from 'prop-types';

import './Logo.css';

const Logo = (props) => (
  <h1 className="ideaware-logo">
    {props.title}
  </h1>
);

Logo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Logo;
