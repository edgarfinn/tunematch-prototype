import React, {Component} from 'react';
import { connect } from 'react-redux';
import SelectedTrackHeader from './SelectedTrackHeader';
import Tracklist from './Tracklist';
import './styles/reset.css';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedTrack, tracks } = this.props;
    return (
      <React.Fragment>
        <header className="appHeader">
          <h1>Tune match prototype</h1>
        </header>
        <main className="appMain">
          <SelectedTrackHeader track={selectedTrack}/>
          <Tracklist tracks={tracks} />
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    selectedTrack: state.selectedTrack
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTrack: track => dispatch(selectTrack(track))
  }
}

export default connect(
  mapStateToProps
)(App);
