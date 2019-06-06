import React from 'react';
import PropTypes from 'prop-types';
import Gist from './Gist';

import withData from './withData';

const List = ({ gists }) => (
  gists.fulfilled && (
    <ul>
      {gists.value.map(gist => (
        <Gist key={gist.id} {...gist} />
      ))}
    </ul>
  )
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
List.defaultProps = {
  data: [],
};


const GistsList = withData(props => `https://api.github.com/users/${props.username}/gists`)(List);
export default GistsList;
export { List };
