import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = ({ counter }) => (
  <div className="display">
    <h1>
      {counter}
    </h1>
  </div>
);

Display.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Display;
