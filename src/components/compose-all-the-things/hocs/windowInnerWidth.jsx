import React from 'react';
import PropTypes from 'prop-types';

import withInnerWidth from './withInnerWindth';

const windowInfos = ({ innerWidth }) => (
  <p>
    The window innerwith is:
    {innerWidth}
  </p>
);

windowInfos.propTypes = {
  innerWidth: PropTypes.number.isRequired,
};

export default withInnerWidth(windowInfos);
