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
          <p>{song.artist}</p>
          <p>{song.decade}</p>
          <p>{song.genre}</p>
          <p>{song.key}</p>
          <p>{song.tempo}</p>
      </li>
    );
  }
}

export default Song;
