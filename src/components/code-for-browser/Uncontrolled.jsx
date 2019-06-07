import React from 'react';

class Uncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange({ target }) {
    this.setState({
      firstName: target.value,
    });
  }

  handleLastNameChange({ target }) {
    this.setState({
      lastName: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
    });
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleFirstNameChange} value={firstName} />
        <input type="text" onChange={this.handleLastNameChange} value={lastName} />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Uncontrolled;
