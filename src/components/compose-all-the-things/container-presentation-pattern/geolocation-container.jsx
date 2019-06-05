import React, { Component } from 'react';

import Geolocation from './geolocation';

class GeolocationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    };

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  }

  render() {
    return <Geolocation {...this.state} />;
  }
}

export default GeolocationContainer;
