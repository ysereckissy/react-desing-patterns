import React from 'react';

class Gists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gists: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/gaearon/gists')
      .then(response => response.json())
      .then(gists => this.setState({
        gists,
      }));
  }

  render() {
    const { gists } = this.state;
    return (
      <ul>
        {gists.map(gist => (
          <li key={gist.id}>
            {gist.description}
          </li>
        ))}
      </ul>
    );
  }
}
export default Gists;
