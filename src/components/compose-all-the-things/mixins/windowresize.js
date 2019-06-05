
const WindowResize = {
  getInitialState() {
    return {
      innerWidth: window.innerWidth,
    };
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  handleResize() {
    this.setState({
      innerWidth: window.innerWidth,
    });
  },
};

export default WindowResize;
