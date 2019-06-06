import { connect } from 'react-refetch';

import { List } from '../data-fetching/GistsList';

const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`,
}));

const ListWithGists = connectWithGists(List);
export default ListWithGists;
