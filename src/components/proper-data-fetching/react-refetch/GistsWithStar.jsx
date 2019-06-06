import { connect } from 'react-refetch';

import { List } from '../data-fetching/GistsList';

const token = 'access_token=123';
const connectWithStar = connect(({ id }) => ({
  star: () => ({
    starResponse: {
      url: `https://api.github.com/gists/${id}/star?${token}`,
      method: 'PUT',
    },
  }),
}));
const GistWithStar = connectWithStar(List);
export default GistWithStar;
