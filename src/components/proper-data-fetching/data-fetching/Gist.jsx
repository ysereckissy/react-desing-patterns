import React from 'react';
import PropTypes from 'prop-types';

const Gist = ({ description, star }) => (
  <li>
    {description}
    <button type="button" onClick={star}>
      +1
    </button>
  </li>
);

Gist.propTypes = {
  description: PropTypes.string,
  star: PropTypes.func,
};

Gist.defaultProps = {
  description: '',
  star: f => f,
};

export default Gist;
