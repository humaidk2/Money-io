class App extends React.Component {
  constructor(props) {
    super(props);
    //this.click = this.click.bind(this);
    this.data = props.data;
    this.state = {
      title: 'Spending'
    };
  }
  // click(vid) {
  //   // if (vid !== undefined) {
  //   //   this.setState({
  //   //     playing: vid
  //   //   });
  //     // this.render();
  //     // this.props.searchViews({key: window.YOUTUBE_API_KEY, id: vid.id.videoId}, this.viewsCaller);
  //     // this.props.searchComments({key: window.YOUTUBE_API_KEY, id: vid.id.videoId}, this.commentsCaller)
  // }
    // componentDidMount() {
  //   this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'puppies', max: 8}, this.caller);
  // }


  // search(e) {
  //   this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: e.target.value, max: 8}, this.caller);
  // }
  render() {
    return (
      <div>
        <h1>Reca$hly</h1>
        <Sidebar />
        <Spending list={this.data} title={this.state.title} />
        <OwesList list={this.data} title={this.state.title} />
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;