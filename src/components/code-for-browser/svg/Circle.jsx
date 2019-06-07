import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({
  x, y, radius, fill,
}) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
);

Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  fill: PropTypes.string,
};

Circle.defaultProps = {
  fill: 'red',
};

export default Circle;
