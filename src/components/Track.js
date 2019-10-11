import React from 'react';

const Track = props => {
  const { title, artist, key, bpm } = props.track;
  return (
    <React.Fragment>
      <h3 className="">{title}</h3>
      <h4 className="trackSmallText">{artist}</h4>
      <div className="trackSectionData trackSmallText">
        <p>{key}</p>
        <p className="trackTextPaddingLeft">{`${bpm} bpm`}</p>
      </div>
    </React.Fragment>
  )
}

export default Track;
