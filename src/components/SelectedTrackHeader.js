import React from 'react';
import Track from './Track';

const Placeholder = () => (
  <h3>
    Select a track
  </h3>
)

const SelectedTrack = ({ track }) => {
  const { artist, title, key, bpm } = track;
  return (
    <div className="selectedTrackContainer">
      <h2>Matches for:</h2>
      <Track track={track}/>
    </div>
  )
}

export default props => {
  const { track } = props;
  console.log('>>>track', track);
  return track ? (
    <SelectedTrack track={track} />
  ) : (
    <Placeholder />
  )
}
