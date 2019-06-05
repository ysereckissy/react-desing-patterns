import React from 'react';
import PropTypes from 'prop-types';

import withData from './withData';

const List = ({ data: gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>
        {gist.description}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
List.defaultProps = {
  data: [],
};


const GistsList = withData(props => `https://api.github.com/users/${props.username}/gists`)(List);
export default GistsList;
