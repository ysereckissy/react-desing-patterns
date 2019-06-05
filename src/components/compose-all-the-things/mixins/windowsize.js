import React from 'react';

import WindowResize from './windowresize';

const WindowSize = React.createClass({
  mixins: [WindowResize],
  render() {
    React.createElement('p', null, this.state.innerWidth);
  },
});

export default WindowSize;
