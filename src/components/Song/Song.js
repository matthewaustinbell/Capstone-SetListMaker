import React from 'react';

import songShape from '../../helpers/propz/songShapes';

import './Song.scss';

class Song extends React.Component {
  static propTypes = {
    song: songShape.songShape,
  }

  render() {
    const { song } = this.props;
    const isAvailable = song.status === 'available';
    return (
      <li className="Song">
        <h3 className="name">
          {song.name}
        </h3>
          <div>{song.artist}</div>
          <div>{song.decade}</div>
          <div>{song.genre}</div>
          <div>{song.key}</div>
          <div>{song.tempo}</div>
          <button
          disabled={!isAvailable}
        >
          {isAvailable ? '+' : 'Need to Learn!'}
        </button>
      </li>
    );
  }
}

export default Song;
