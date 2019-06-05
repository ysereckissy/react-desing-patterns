import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Buttons = ({ onDecrement, onIncrement }) => (
  <div>
    <button type="button" onClick={onDecrement}>
      -
    </button>
    <button type="button" onClick={onIncrement}>
      +
    </button>
  </div>
);

Buttons.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Buttons;
