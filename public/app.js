var Playlist = React.createClass({
  getInitialState: function() {
    return {
      results: '',
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      console.log(result);
      // this.setState({
      //   this.results = result;
      // });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  handleClick: function() {
    this.componentDidMount();
  },

  render: function() {
    return (
      <div><button onClick={this.handleClick}>
      </button> {this.state.results}
      </div>
    );
  }
});

ReactDOM.render(<Playlist source="https://api.spotify.com/v1/artists/63aP18bg2ABSOqSNQcAMNy/top-tracks?country=US" />, document.getElementById('content'));