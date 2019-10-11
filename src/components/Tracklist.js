import React from 'react';
import { connect } from 'react-redux';
import { selectTrack } from '../actions';
import Track from './Track';

const Tracklist = props => {
  console.log('>>>props', props);
  const { tracks, selectTrack } = props;
  return (
    <ul className="trackList">
      {
        tracks.map((track, i) => {
          return (
            <li
              key={`track-${i}_-_${track.title}`}
              className="trackContainer"
              onClick={() => selectTrack(track)}
            >
              <Track track={track} />
            </li>
          )
        })
      }
    </ul>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    selectTrack: track => dispatch(selectTrack(track))
  }
}

export default connect(null, mapDispatchToProps)(Tracklist);
